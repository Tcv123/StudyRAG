package uk.edu.le.co2103.safecheck.repository;

import android.app.Application;

import androidx.lifecycle.LiveData;

import uk.edu.le.co2103.safecheck.database.DefectDao;
import uk.edu.le.co2103.safecheck.database.SafeCheckDatabase;
import uk.edu.le.co2103.safecheck.database.SafetyCheckDao;
import uk.edu.le.co2103.safecheck.model.Defect;
import uk.edu.le.co2103.safecheck.model.SafetyCheck;
import uk.edu.le.co2103.safecheck.model.SafetyCheckWithDefects;

import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class SafetyRepository {

    private final SafetyCheckDao safetyCheckDao;
    private final DefectDao defectDao;
    private final ExecutorService executorService = Executors.newSingleThreadExecutor();

    public SafetyRepository(Application application) {
        SafeCheckDatabase db = SafeCheckDatabase.getInstance(application);
        safetyCheckDao = db.safetyCheckDao();
        defectDao = db.defectDao();
    }

    public void insertCheckWithDefects(SafetyCheck check, List<Defect> defects) {
        executorService.execute(() -> {
            long newCheckId = safetyCheckDao.insert(check);
            for (Defect d : defects) {
                d.checkId = (int) newCheckId;
            }
            defectDao.insertAll(defects);
        });
    }

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
