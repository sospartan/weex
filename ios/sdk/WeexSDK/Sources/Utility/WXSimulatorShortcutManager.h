/**
 * Created by Weex.
 * Copyright (c) 2016, Alibaba, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache Licence 2.0.
 * For the full copyright and license information,please view the LICENSE file in the root directory of this source tree.
 */

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@interface WXSimulatorShortcutManager : NSObject

+ (void)registerSimulatorShortcutWithKey:(NSString *)key modifierFlags:(UIKeyModifierFlags)flags action:(dispatch_block_t)action;

@end
