package com.example.safecheck.database;

import androidx.room.Dao;
import androidx.room.Insert;

import com.example.safecheck.model.Defect;

@Dao
public interface DefectDao {

    @Insert
    void insert(Defect defect);

    // Bulk insert for when the user adds multiple defects at once
    @Insert
    void insertAll(java.util.List<Defect> defects);
}
