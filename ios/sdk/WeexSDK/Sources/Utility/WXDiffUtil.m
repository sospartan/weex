/**
 * Created by Weex.
 * Copyright (c) 2016, Alibaba, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache Licence 2.0.
 * For the full copyright and license information,please view the LICENSE file in the root directory of this source tree.
 */

#import "WXDiffUtil.h"
#import "WXLog.h"

typedef enum : NSUInteger {
    WXDiffOperationDoNothing,
    WXDiffOperationUpdate,
    WXDiffOperationDelete,
    WXDiffOperationInsert
} WXDiffOperation;

@implementation WXDiffUpdateIndex

- (instancetype)initWithOldIndex:(NSUInteger)oldIndex newIndex:(NSUInteger)newIndex
{
    if (self = [super init]) {
        _oldIndex = oldIndex;
        _newIndex = newIndex;
    }
    
    return self;
}

@end

@implementation WXDiffResult

- (instancetype)initWithInserts:(NSIndexSet *)inserts
                        deletes:(NSIndexSet *)deletes
                        updates:(NSArray<WXDiffUpdateIndex *> *)updates
{
    if (self = [super init]) {
        _inserts = [inserts copy];
        _deletes = [deletes copy];
        _updates = [updates copy];
    }
    
    return self;
}

- (BOOL)hasChanges
{
    return _updates.count > 0 || _inserts.count > 0 || _deletes.count > 0;
}

- (NSString *)description
{
    return [NSString stringWithFormat:@"<%@: %p; %zi inserts; %zi deletes; %zi updates", NSStringFromClass([self class]), self, _inserts.count, _deletes.count, _updates.count];
}


@end

@implementation WXDiffUtil

+ (WXDiffResult *)diffWithMinimumDistance:(NSArray<id<WXDiffable>> *)newArray oldArray:(NSArray<id<WXDiffable>> *)oldArray
{
    // Using the levenshtein algorithm
    // https://en.wikipedia.org/wiki/Levenshtein_distance
    
    int oldSize = (int)(oldArray.count + 1);
    int newSize = (int)(newArray.count + 1);
    
    int **matrix = malloc(oldSize * sizeof(int *));
    for (int i = 0; i < oldSize; i++) {
        matrix[i] = malloc(newSize * sizeof(int));
    }
    
    matrix[0][0] = 0;
    
    for (int i = 1; i < oldSize; i++) {
        matrix[i][0] = i;
    }
    
    for (int j = 1; j < newSize; j++) {
        matrix[0][j] = j;
    }
    
    for (int oldIndex = 1; oldIndex < oldSize; oldIndex ++) {
        for (int newIndex = 1; newIndex < newSize; newIndex ++) {
            if ([oldArray[oldIndex - 1] isEqualToWXObject:newArray[newIndex - 1]]) {
                matrix[oldIndex][newIndex] = matrix[oldIndex - 1][newIndex - 1];
            } else {
                int updateCost = matrix[oldIndex - 1][newIndex - 1] + 1;
                int insertCost = matrix[oldIndex][newIndex - 1] + 1;
                int deleteCost = matrix[oldIndex - 1][newIndex] + 1;
                matrix[oldIndex][newIndex] = MIN(MIN(insertCost, deleteCost), updateCost);
            }
        }
    }
    
    [self _printMatrix:matrix rowSize:oldSize columnSize:newSize];
    
    NSMutableArray *updates = [NSMutableArray array];
    NSMutableIndexSet *inserts = [NSMutableIndexSet indexSet];
    NSMutableIndexSet *deletes = [NSMutableIndexSet indexSet];
    int oldIndex = oldSize - 1;
    int newIndex = newSize - 1;
    while (oldIndex != 0 || newIndex != 0) {
        WXDiffOperation operation = [self _operationInMatrix:matrix newIndex:newIndex oldIndex:oldIndex];
        switch (operation) {
            case WXDiffOperationUpdate:
                newIndex --;
                oldIndex --;
                [updates addObject:[[WXDiffUpdateIndex alloc] initWithOldIndex:oldIndex newIndex:newIndex]];
                break;
            case WXDiffOperationDelete:
                oldIndex --;
                [deletes addIndex:oldIndex];
                break;
            case WXDiffOperationInsert:
                newIndex --;
                [inserts addIndex:newIndex];
                break;
            case WXDiffOperationDoNothing:
                newIndex --;
                oldIndex --;
                break;
        }
    }
    
    for (int i = 0; i < oldSize; i++) {
        free(matrix[i]);
    }
    free(matrix);
    
    WXDiffResult *result = [[WXDiffResult alloc] initWithInserts:inserts deletes:deletes updates:updates];
    return result;
}

+ (WXDiffOperation)_operationInMatrix:(int **)matrix newIndex:(int)newIndex oldIndex:(int)oldIndex
{
    if (newIndex == 0) {
        return WXDiffOperationDelete;
    }
    
    if (oldIndex == 0) {
        return WXDiffOperationInsert;
    }
    
    int cost = matrix[oldIndex][newIndex];
    
    int costBeforeInsert = matrix[oldIndex][newIndex - 1];
    if (costBeforeInsert + 1 == cost) {
        return WXDiffOperationInsert;
    }
    
    int costBeforDelete = matrix[oldIndex - 1][newIndex];
    if (costBeforDelete + 1 == cost) {
        return WXDiffOperationDelete;
    }
    
    int costBeforUpdate = matrix[oldIndex - 1][newIndex - 1];
    if (costBeforUpdate + 1 == cost) {
        return WXDiffOperationUpdate;
    }
    
    return WXDiffOperationDoNothing;
}

+ (void)_printMatrix:(int **)matrix rowSize:(int)rowSize columnSize:(int)columnSize
{
    for (int i = 0; i < rowSize; i ++) {
        NSMutableArray *array = [NSMutableArray array];
        for (int j = 0; j < columnSize; j ++) {
            int value = matrix[i][j];
            NSString *result;
            if (value < 10) {
                result = [NSString stringWithFormat:@"0%zi", value];
            } else {
                result = [NSString stringWithFormat:@"%zi", value];
            }
            [array addObject:result];
        }
        WXLogDebug(@"%@", [array componentsJoinedByString:@" "]);
    }
}

@end
