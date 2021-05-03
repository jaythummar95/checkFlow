package com.obfuscatingdemo.currentdate;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public class CurrentDateModule extends ReactContextBaseJavaModule {


    public CurrentDateModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "CurrentDateModule";
    }

    /***
     * Get the current date in MM-DD-YYYY HH:MM:SS format
     * @return current date in MM-DD-YYYY HH:MM:SS format
     */
    @ReactMethod
    public void getCurrentDate(Callback callback) {
        String strDate = "";
        strDate = new SimpleDateFormat("MM-dd-yyyy HH:mm:ss", Locale.US)
                .format(new Date());
        callback.invoke(strDate);
    }


}
