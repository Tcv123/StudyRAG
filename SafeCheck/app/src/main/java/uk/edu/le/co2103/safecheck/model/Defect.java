package uk.edu.le.co2103.safecheck.model;

import androidx.room.Entity;
import androidx.room.ForeignKey;
import androidx.room.PrimaryKey;

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

    public int checkId;
    public String description;
    public String severity; // "Low" or "High"

    public Defect(int checkId, String description, String severity) {
        this.checkId = checkId;
        this.description = description;
        this.severity = severity;
    }
}
