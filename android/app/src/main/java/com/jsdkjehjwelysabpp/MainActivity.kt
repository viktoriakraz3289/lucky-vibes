package com.jsdkjehjwelysabpp

import android.content.Intent
import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.luckkmyvjibmehsu.VluckkmyvjibmehsuiewportBridge
import com.luckkmyvjibmehsu.SluckkmyvjibmehsuharedPreferencesHelper

class MainActivity : ReactActivity() {
  override fun getMainComponentName(): String = "luckkmyvjibmehsuabpp"

  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    cacheluckkmyvjibmehsuPendingSendId(intent)
    cacheluckkmyvjibmehsuPendingPushUrl(intent)
  }

  override fun onNewIntent(intent: Intent?) {
    super.onNewIntent(intent)
    setIntent(intent)
    cacheluckkmyvjibmehsuPendingSendId(intent)
    cacheluckkmyvjibmehsuPendingPushUrl(intent)
  }

  @Deprecated("Deprecated in Java")
  override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
    if (VluckkmyvjibmehsuiewportBridge.onActivityResult(requestCode, resultCode, data)) {
      return
    }
    @Suppress("DEPRECATION")
    super.onActivityResult(requestCode, resultCode, data)
  }

  override fun onRequestPermissionsResult(
      requestCode: Int,
      permissions: Array<String>,
      grantResults: IntArray,
  ) {
    VluckkmyvjibmehsuiewportBridge.onRequestPermissionsResult(requestCode, permissions, grantResults)
    super.onRequestPermissionsResult(requestCode, permissions, grantResults)
  }

  private fun cacheluckkmyvjibmehsuPendingSendId(intent: Intent?) {
    val sendIluckkmyvjibmehsud = intent?.getStringExtra("sendid")
    if (!sendIluckkmyvjibmehsud.isNullOrEmpty()) {
      SluckkmyvjibmehsuharedPreferencesHelper.saveString("pendingSendId", sendIluckkmyvjibmehsud)
    }
  }

  private fun cacheluckkmyvjibmehsuPendingPushUrl(intent: Intent?) {
    val pushUrl = intent?.getStringExtra("url")
    if (!pushUrl.isNullOrEmpty()) {
      SluckkmyvjibmehsuharedPreferencesHelper.saveString("pendingPushUrl", pushUrl)
    }
  }
}
