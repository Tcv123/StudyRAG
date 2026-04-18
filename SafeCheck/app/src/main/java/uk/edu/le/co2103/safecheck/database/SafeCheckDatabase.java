package uk.edu.le.co2103.safecheck.database;

import android.content.Context;

import androidx.room.Database;
import androidx.room.Room;
import androidx.room.RoomDatabase;

import uk.edu.le.co2103.safecheck.model.Defect;
import uk.edu.le.co2103.safecheck.model.SafetyCheck;

@Database(entities = {SafetyCheck.class, Defect.class}, version = 1, exportSchema = false)
public abstract class SafeCheckDatabase extends RoomDatabase {

    private static SafeCheckDatabase instance;

    public abstract SafetyCheckDao safetyCheckDao();
    public abstract DefectDao defectDao();

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
