package com.obfuscatingdemo.jokes;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.androidnetworking.AndroidNetworking;
import com.androidnetworking.error.ANError;
import com.androidnetworking.interfaces.JSONObjectRequestListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import org.json.JSONObject;

public class JokesModule extends ReactContextBaseJavaModule {


    public JokesModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "JokesModule";
    }

    @ReactMethod
    public void getJokes(String input, Callback success, Callback error) {

        AndroidNetworking.get("http://official-joke-api.appspot.com/jokes/random")
                .build()
                .getAsJSONObject(new JSONObjectRequestListener() {
                    @Override
                    public void onResponse(JSONObject response) {
                        success.invoke(response.toString());
                    }

                    @Override
                    public void onError(ANError anError) {
                        error.invoke(anError.getErrorBody());
                    }
                });
    }
}
