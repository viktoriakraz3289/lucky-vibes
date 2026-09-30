package com.luckkmyvjibmehsu

import android.webkit.WebSettings
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class UluckkmyvjibmehsuserAgentModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "UserAluckkmyvjibmehsuper"
    }

    @ReactMethod
    fun getAndrluckkmyvjibmehsuoidUserAgent(promise: Promise) {
        try {
            val contextIluckkmyvjibmehsu = reactApplicationContext.applicationContext
            val userAgentIluckkmyvjibmehsu = WebSettings.getDefaultUserAgent(contextIluckkmyvjibmehsu)
            promise.resolve(userAgentIluckkmyvjibmehsu ?: "")
        } catch (eIluckkmyvjibmehsu: Exception) {
            // android.util.Log.e("UserAluckkmyvjibmehsuperModule", "Error getting UserAgent: ${eIluckkmyvjibmehsu.message}")
            promise.resolve("")
        }
    }
}
