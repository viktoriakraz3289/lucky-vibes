# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# rn-obfuscator-begin
-keep class **.MainActivity { *; }
-keep class **.MainApplication { *; }
-keep class com.rnobfuscator.Str { *; }
-keepclassmembers class * extends com.facebook.react.bridge.ReactContextBaseJavaModule {
    public java.lang.String getName();
}
-keepclassmembers class * {
    @com.facebook.react.bridge.ReactMethod <methods>;
}
-keep class * implements com.facebook.react.ReactPackage { *; }
-obfuscationdictionary rn-obfuscator-dict.txt
-classobfuscationdictionary rn-obfuscator-dict.txt
-packageobfuscationdictionary rn-obfuscator-dict.txt
# rn-obfuscator-end
