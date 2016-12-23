# /bin/bash -eu

function buildAndroid {
    dir=$(pwd)
    builddir=$dir'/android/playground'
    current_dir=$PWD;
    cd $builddir;
    ./gradlew clean assembleDebug;
    cd $current_dir;
    pwd
}
function runAndroid {
    buildAndroid
    platform=android macaca run -d $1
}

function buildIOS {
    builddir=$(pwd)'/ios/playground'
    current_dir=$PWD;
    cd $builddir
    product=$(PWD)'/build/Debug-iphoneos/WeexDemo.app'
    pod install --silent 
    [ -f product ] && rm -rf $product
    xcodebuild clean build -quiet -workspace WeexDemo.xcworkspace -sdk iphonesimulator -scheme Pods-WeexDemo SYMROOT=$(PWD)/build CODE_SIGN_IDENTITY="" CODE_SIGNING_REQUIRED=NO

    xcodebuild clean build -quiet -workspace WeexDemo.xcworkspace -sdk iphonesimulator -scheme WeexSDK SYMROOT=$(PWD)/build CODE_SIGN_IDENTITY="" CODE_SIGNING_REQUIRED=NO
    
    xcodebuild clean build -quiet -arch x86_64 -configuration RELEASE -workspace WeexDemo.xcworkspace -sdk iphonesimulator -scheme WeexDemo SYMROOT=$(PWD)/build CODE_SIGN_IDENTITY="" CODE_SIGNING_REQUIRED=NO
    echo $product
    cd $current_dir;
}
function runIOS {
    echo $1
    buildIOS

    platform=ios macaca run -d $1 --verbose
}

#validate macaca 


#get platform

#get test folder

#setup devices

#run tests
# runAndroid ./test/scripts/

runIOS ./test/scripts/

