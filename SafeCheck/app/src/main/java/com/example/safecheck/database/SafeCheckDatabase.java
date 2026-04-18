package com.example.safecheck.database;

import android.content.Context;

import androidx.room.Database;
import androidx.room.Room;
import androidx.room.RoomDatabase;

import com.example.safecheck.model.Defect;
import com.example.safecheck.model.SafetyCheck;

@Database(entities = {SafetyCheck.class, Defect.class}, version = 1, exportSchema = false)
public abstract class SafeCheckDatabase extends RoomDatabase {

    private static SafeCheckDatabase instance;

    public abstract SafetyCheckDao safetyCheckDao();
    public abstract DefectDao defectDao();

    // Singleton pattern so only one database connection is open at a time
    public static synchronized SafeCheckDatabase getInstance(Context context) {
        if (instance == null) {
            instance = Room.databaseBuilder(
                    context.getApplicationContext(),
                    SafeCheckDatabase.class,
                    "safecheck_database"
            ).build();
        }
        return instance;
    }
}
