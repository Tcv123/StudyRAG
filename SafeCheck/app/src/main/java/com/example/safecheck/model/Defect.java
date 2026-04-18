package com.example.safecheck.model;

import androidx.room.Entity;
import androidx.room.ForeignKey;
import androidx.room.PrimaryKey;

// Child entity – belongs to a SafetyCheck
// onDelete = CASCADE means deleting a SafetyCheck auto-deletes its Defects
@Entity(
    tableName = "defects",
    foreignKeys = @ForeignKey(
        entity = SafetyCheck.class,
        parentColumns = "checkId",
        childColumns = "checkId",
        onDelete = ForeignKey.CASCADE
    )
)
public class Defect {

    @PrimaryKey(autoGenerate = true)
    public int defectId;

    public int checkId; // foreign key linking to SafetyCheck

    public String description; // e.g. "Cracked Mirror"
    public String severity;   // "Low" or "High"

    public Defect(int checkId, String description, String severity) {
        this.checkId = checkId;
        this.description = description;
        this.severity = severity;
    }
}
