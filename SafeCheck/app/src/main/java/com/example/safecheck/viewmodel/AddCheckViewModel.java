package com.example.safecheck.viewmodel;

import android.app.Application;

import androidx.annotation.NonNull;
import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.MutableLiveData;

import com.example.safecheck.model.Defect;
import com.example.safecheck.model.SafetyCheck;
import com.example.safecheck.repository.SafetyRepository;

import java.util.ArrayList;
import java.util.List;

public class AddCheckViewModel extends AndroidViewModel {

    private final SafetyRepository repository;

    // These survive rotation because they live in the ViewModel
    public MutableLiveData<List<Defect>> pendingDefects = new MutableLiveData<>(new ArrayList<>());
    public MutableLiveData<String> currentDefectText = new MutableLiveData<>("");
    public MutableLiveData<String> currentSeverity = new MutableLiveData<>("Low");

    public AddCheckViewModel(@NonNull Application application) {
        super(application);
        repository = new SafetyRepository(application);
    }

    public void addDefect(String description, String severity) {
        Defect defect = new Defect(0, description, severity);
        List<Defect> current = pendingDefects.getValue();
        if (current == null) current = new ArrayList<>();
        current.add(defect);
        pendingDefects.setValue(current);
    }

    public void saveCheck(SafetyCheck check) {
        List<Defect> defects = pendingDefects.getValue();
        if (defects == null) defects = new ArrayList<>();
        repository.insertCheckWithDefects(check, defects);
    }
}
