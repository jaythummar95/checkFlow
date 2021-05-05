package com.obfuscatingdemo.storage;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.obfuscatingdemo.MainApplication;

public class StorageModule extends ReactContextBaseJavaModule {

    public StorageModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "StorageModule";
    }

    @ReactMethod
    public void setItem(String key, String value) {
        key = AESHelper.encryption(key);
        MainApplication.storagePreferance.storeDataIntoPreFerance(key, value);
    }

    @ReactMethod
    public void getItem(String key, Callback callback) {
        key = AESHelper.encryption(key);
        callback.invoke(MainApplication.storagePreferance.getValueFromPreferance(key));
    }
}
