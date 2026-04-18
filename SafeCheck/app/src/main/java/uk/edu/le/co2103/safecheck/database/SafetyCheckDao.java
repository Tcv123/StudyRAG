package uk.edu.le.co2103.safecheck.database;

import androidx.lifecycle.LiveData;
import androidx.room.Dao;
import androidx.room.Delete;
import androidx.room.Insert;
import androidx.room.Query;
import androidx.room.Transaction;

import uk.edu.le.co2103.safecheck.model.SafetyCheck;
import uk.edu.le.co2103.safecheck.model.SafetyCheckWithDefects;

import java.util.List;

@Dao
public interface SafetyCheckDao {

    @Insert
    long insert(SafetyCheck safetyCheck);

    @Delete
    void delete(SafetyCheck safetyCheck);

    @Transaction
    @Query("SELECT * FROM safety_checks ORDER BY checkId DESC")
    LiveData<List<SafetyCheckWithDefects>> getAllChecksWithDefects();

    @Transaction
    @Query("SELECT * FROM safety_checks WHERE checkId = :checkId")
    LiveData<SafetyCheckWithDefects> getCheckWithDefects(int checkId);
}
