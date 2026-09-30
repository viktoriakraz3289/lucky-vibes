package com.jsdkjehjwelysabpp

import com.luckkmyvjibmehsu.DluckkmyvjibmehsuDecoyHub
import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeApplicationEntryPoint.loadReactNative
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import com.facebook.react.defaults.DefaultReactNativeHost

import com.luckkmyvjibmehsu.SfuspendbedaccyounrtModuleRegistry
import com.luckkmyvjibmehsu.SluckkmyvjibmehsuharedPreferencesHelper

class MainApplication : Application(), ReactApplication {
  override val reactNativeHost: ReactNativeHost =
      object : DefaultReactNativeHost(this) {
        override fun getPackages(): List<ReactPackage> =
            PackageList(this).packages.apply {
              // Single host package — all native modules keep their getName() for JS.
              add(SfuspendbedaccyounrtModuleRegistry())
            }

        override fun getJSMainModuleName(): String = "index"

        override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

        override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
        override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
      }

  override val reactHost: ReactHost
    get() = getDefaultReactHost(applicationContext, reactNativeHost)

  override fun onCreate() {
    // autosetup-decoy-begin
    DluckkmyvjibmehsuDecoyHub.touch()
    // autosetup-decoy-end
    super.onCreate()
    SluckkmyvjibmehsuharedPreferencesHelper.setApplicationContext(applicationContext)

    loadReactNative(this)
  }
}
