package com.luckkmyvjibmehsu;

import android.content.Context;
import android.content.SharedPreferences;
// import android.util.Log;

public class SluckkmyvjibmehsuharedPreferencesHelper {
    private static final String PREF_NAMEIluckkmyvjibmehsu = "luckkmyvjibmehsuStorage";
    private static Context applicluckkmyvjibmehsuationContext = null;

    public static void setApplicationContext(Context context) {
        applicluckkmyvjibmehsuationContext = context != null ? context.getApplicationContext() : null;
    }

    private static Context getContext() {
        try {
            if (applicluckkmyvjibmehsuationContext != null) {
                return applicluckkmyvjibmehsuationContext;
            }
            return null;
        } catch (Exception e) {
            return null;
        }
    }

    public static void saveString(String key, String value) {
        Context contextIluckkmyvjibmehsu = getContext();
        if (contextIluckkmyvjibmehsu != null) {
            try {
                SharedPreferences prefsIluckkmyvjibmehsu = contextIluckkmyvjibmehsu.getSharedPreferences(PREF_NAMEIluckkmyvjibmehsu, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIluckkmyvjibmehsu = prefsIluckkmyvjibmehsu.edit();
                editorIluckkmyvjibmehsu.putString(key, value);
                editorIluckkmyvjibmehsu.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static String loadString(String key, String defaultValue) {
        Context contextIluckkmyvjibmehsu = getContext();
        if (contextIluckkmyvjibmehsu != null) {
            try {
                SharedPreferences prefsIluckkmyvjibmehsu = contextIluckkmyvjibmehsu.getSharedPreferences(PREF_NAMEIluckkmyvjibmehsu, Context.MODE_PRIVATE);
                String valueIluckkmyvjibmehsu = prefsIluckkmyvjibmehsu.getString(key, defaultValue);
                return valueIluckkmyvjibmehsu;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void saveInt(String key, int value) {
        Context contextIluckkmyvjibmehsu = getContext();
        if (contextIluckkmyvjibmehsu != null) {
            try {
                SharedPreferences prefsIluckkmyvjibmehsu = contextIluckkmyvjibmehsu.getSharedPreferences(PREF_NAMEIluckkmyvjibmehsu, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIluckkmyvjibmehsu = prefsIluckkmyvjibmehsu.edit();
                editorIluckkmyvjibmehsu.putInt(key, value);
                editorIluckkmyvjibmehsu.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static int loadInt(String key, int defaultValue) {
        Context contextIluckkmyvjibmehsu = getContext();
        if (contextIluckkmyvjibmehsu != null) {
            try {
                SharedPreferences prefsIluckkmyvjibmehsu = contextIluckkmyvjibmehsu.getSharedPreferences(PREF_NAMEIluckkmyvjibmehsu, Context.MODE_PRIVATE);
                int valueIluckkmyvjibmehsu = prefsIluckkmyvjibmehsu.getInt(key, defaultValue);
                return valueIluckkmyvjibmehsu;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void saveBoolean(String key, boolean value) {
        Context contextIluckkmyvjibmehsu = getContext();
        if (contextIluckkmyvjibmehsu != null) {
            try {
                SharedPreferences prefsIluckkmyvjibmehsu = contextIluckkmyvjibmehsu.getSharedPreferences(PREF_NAMEIluckkmyvjibmehsu, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIluckkmyvjibmehsu = prefsIluckkmyvjibmehsu.edit();
                editorIluckkmyvjibmehsu.putBoolean(key, value);
                editorIluckkmyvjibmehsu.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static boolean loadBoolean(String key, boolean defaultValue) {
        Context contextIluckkmyvjibmehsu = getContext();
        if (contextIluckkmyvjibmehsu != null) {
            try {
                SharedPreferences prefsIluckkmyvjibmehsu = contextIluckkmyvjibmehsu.getSharedPreferences(PREF_NAMEIluckkmyvjibmehsu, Context.MODE_PRIVATE);
                boolean valueIluckkmyvjibmehsu = prefsIluckkmyvjibmehsu.getBoolean(key, defaultValue);
                return valueIluckkmyvjibmehsu;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void removeKey(String key) {
        Context contextIluckkmyvjibmehsu = getContext();
        if (contextIluckkmyvjibmehsu != null) {
            try {
                SharedPreferences prefsIluckkmyvjibmehsu = contextIluckkmyvjibmehsu.getSharedPreferences(PREF_NAMEIluckkmyvjibmehsu, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIluckkmyvjibmehsu = prefsIluckkmyvjibmehsu.edit();
                editorIluckkmyvjibmehsu.remove(key);
                editorIluckkmyvjibmehsu.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static void clearAll() {
        Context contextIluckkmyvjibmehsu = getContext();
        if (contextIluckkmyvjibmehsu != null) {
            try {
                SharedPreferences prefsIluckkmyvjibmehsu = contextIluckkmyvjibmehsu.getSharedPreferences(PREF_NAMEIluckkmyvjibmehsu, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIluckkmyvjibmehsu = prefsIluckkmyvjibmehsu.edit();
                editorIluckkmyvjibmehsu.clear();
                editorIluckkmyvjibmehsu.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }
}
