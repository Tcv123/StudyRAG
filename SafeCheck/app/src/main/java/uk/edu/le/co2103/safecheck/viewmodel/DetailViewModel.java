package uk.edu.le.co2103.safecheck.viewmodel;

import android.app.Application;

import androidx.annotation.NonNull;
import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.LiveData;

import uk.edu.le.co2103.safecheck.model.SafetyCheckWithDefects;
import uk.edu.le.co2103.safecheck.repository.SafetyRepository;

public class DetailViewModel extends AndroidViewModel {

    private final SafetyRepository repository;

    public DetailViewModel(@NonNull Application application) {
        super(application);
        repository = new SafetyRepository(application);
    }

    public LiveData<SafetyCheckWithDefects> getCheckWithDefects(int checkId) {
        return repository.getCheckWithDefects(checkId);
    }
}
