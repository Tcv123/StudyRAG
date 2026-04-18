package com.example.safecheck.repository;

import android.app.Application;

import androidx.lifecycle.LiveData;

import com.example.safecheck.database.DefectDao;
import com.example.safecheck.database.SafeCheckDatabase;
import com.example.safecheck.database.SafetyCheckDao;
import com.example.safecheck.model.Defect;
import com.example.safecheck.model.SafetyCheck;
import com.example.safecheck.model.SafetyCheckWithDefects;

import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class SafetyRepository {

    private final SafetyCheckDao safetyCheckDao;
    private final DefectDao defectDao;

    // ExecutorService runs write operations off the main thread
    private final ExecutorService executorService = Executors.newSingleThreadExecutor();

    public SafetyRepository(Application application) {
        SafeCheckDatabase db = SafeCheckDatabase.getInstance(application);
        safetyCheckDao = db.safetyCheckDao();
        defectDao = db.defectDao();
    }

    // Insert a check, get back its generated ID, then insert all defects linked to it
    public void insertCheckWithDefects(SafetyCheck check, List<Defect> defects) {
        executorService.execute(() -> {
            long newCheckId = safetyCheckDao.insert(check);
            for (Defect d : defects) {
                d.checkId = (int) newCheckId;
            }
            defectDao.insertAll(defects);
        });
    }

    // Delete runs on background thread to avoid blocking the UI
    public void deleteCheck(SafetyCheck check) {
        executorService.execute(() -> safetyCheckDao.delete(check));
    }

    public LiveData<List<SafetyCheckWithDefects>> getAllChecksWithDefects() {
        return safetyCheckDao.getAllChecksWithDefects();
    }

    public LiveData<SafetyCheckWithDefects> getCheckWithDefects(int checkId) {
        return safetyCheckDao.getCheckWithDefects(checkId);
    }
}
