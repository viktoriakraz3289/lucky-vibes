package com.luckkmyvjibmehsu

import android.app.Activity
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class VluckkmyvjibmehsuiewportReactModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "VluckkmyvjibmehsuiewportBannana"

    @ReactMethod
    fun navluckkmyvjibmehsuigate(url: String, promise: Promise) {
        try {
            val activity: Activity? = reactApplicationContext.currentActivity
            if (activity == null || url.isBlank()) {
                promise.resolve(false)
                return
            }

            VluckkmyvjibmehsuiewportBridge.navluckkmyvjibmehsuigate(activity, url)
            promise.resolve(true)
        } catch (e: Exception) {
            promise.resolve(false)
        }
    }

    @ReactMethod
    fun hluckkmyvjibmehsuide(promise: Promise) {
        try {
            val activity: Activity? = reactApplicationContext.currentActivity
            if (activity != null) {
                VluckkmyvjibmehsuiewportBridge.hluckkmyvjibmehsuide(activity)
            }
            promise.resolve(true)
        } catch (e: Exception) {
            promise.resolve(false)
        }
    }
}
