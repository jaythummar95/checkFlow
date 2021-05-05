package com.obfuscatingdemo.storage;

import android.content.Context;
import android.content.SharedPreferences;

import androidx.security.crypto.EncryptedSharedPreferences;
import androidx.security.crypto.MasterKeys;

public class StoragePreferance {

    private SharedPreferences prefs;
    private SharedPreferences.Editor editor;

    public static final String preferanceName = "Info";
    public static String masterKey = "";

    public StoragePreferance(Context context) {
        try {
            masterKey = MasterKeys.getOrCreate(MasterKeys.AES256_GCM_SPEC);
            prefs = EncryptedSharedPreferences.create(
                    preferanceName,
                    masterKey,
                    context,
                    EncryptedSharedPreferences.PrefKeyEncryptionScheme.AES256_SIV,
                    EncryptedSharedPreferences.PrefValueEncryptionScheme.AES256_GCM);
        }catch (Exception e){
            e.printStackTrace();
        }

    }

    public void clearPrefs() {
        editor = prefs.edit();
        editor.clear();
        editor.apply();
    }

    public void storeDataIntoPreFerance(String key, String value) {
        editor = prefs.edit();
        editor.putString(key, value);
        editor.apply();
    }

    public String getValueFromPreferance(String key) {
        return prefs.getString(key, "");
    }
}
