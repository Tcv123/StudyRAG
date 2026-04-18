package com.example.safecheck.model;

import androidx.room.Embedded;
import androidx.room.Relation;

import java.util.List;

// Helper POJO used by Room to load a SafetyCheck together with all its Defects
public class SafetyCheckWithDefects {

    @Embedded
    public SafetyCheck safetyCheck;

    @Relation(
        parentColumn = "checkId",
        entityColumn = "checkId"
    )
    public List<Defect> defects;
}
