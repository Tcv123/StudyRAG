package com.example.safecheck.database;

import androidx.lifecycle.LiveData;
import androidx.room.Dao;
import androidx.room.Delete;
import androidx.room.Insert;
import androidx.room.Query;
import androidx.room.Transaction;

import com.example.safecheck.model.SafetyCheck;
import com.example.safecheck.model.SafetyCheckWithDefects;

import java.util.List;

@Dao
public interface SafetyCheckDao {

    @Insert
    long insert(SafetyCheck safetyCheck);

    @Delete
    void delete(SafetyCheck safetyCheck);

    // Returns all checks; LiveData automatically notifies the UI when data changes
    @Transaction
    @Query("SELECT * FROM safety_checks ORDER BY checkId DESC")
    LiveData<List<SafetyCheckWithDefects>> getAllChecksWithDefects();

    // Fetch a single check and all its defects by ID
    @Transaction
    @Query("SELECT * FROM safety_checks WHERE checkId = :checkId")
    LiveData<SafetyCheckWithDefects> getCheckWithDefects(int checkId);
}
