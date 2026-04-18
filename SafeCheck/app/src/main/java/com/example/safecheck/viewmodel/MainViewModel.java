package com.example.safecheck.viewmodel;

import android.app.Application;

import androidx.annotation.NonNull;
import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.LiveData;

import com.example.safecheck.model.SafetyCheck;
import com.example.safecheck.model.SafetyCheckWithDefects;
import com.example.safecheck.repository.SafetyRepository;

import java.util.List;

public class MainViewModel extends AndroidViewModel {

    private final SafetyRepository repository;
    private final LiveData<List<SafetyCheckWithDefects>> allChecks;

    public MainViewModel(@NonNull Application application) {
        super(application);
        repository = new SafetyRepository(application);
        allChecks = repository.getAllChecksWithDefects();
    }

    public LiveData<List<SafetyCheckWithDefects>> getAllChecks() {
        return allChecks;
    }

    public void deleteCheck(SafetyCheck check) {
        repository.deleteCheck(check);
    }
}
