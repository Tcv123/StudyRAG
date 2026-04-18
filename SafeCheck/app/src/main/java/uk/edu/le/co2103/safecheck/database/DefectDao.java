package uk.edu.le.co2103.safecheck.database;

import androidx.room.Dao;
import androidx.room.Insert;

import uk.edu.le.co2103.safecheck.model.Defect;

import java.util.List;

@Dao
public interface DefectDao {

    @Insert
    void insert(Defect defect);

    @Insert
    void insertAll(List<Defect> defects);
}
