package com.example.safecheck;

import android.os.Bundle;
import android.text.TextUtils;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Spinner;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.ViewModelProvider;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.safecheck.adapter.DefectAdapter;
import com.example.safecheck.model.SafetyCheck;
import com.example.safecheck.viewmodel.AddCheckViewModel;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public class AddCheckActivity extends AppCompatActivity {

    private AddCheckViewModel viewModel;
    private DefectAdapter defectAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_check);

        viewModel = new ViewModelProvider(this).get(AddCheckViewModel.class);

        EditText etVehicle = findViewById(R.id.etVehicleReg);
        EditText etDriver = findViewById(R.id.etDriverName);
        RadioGroup rgStatus = findViewById(R.id.rgStatus);
        EditText etDefectDesc = findViewById(R.id.etDefectDescription);
        Spinner spinnerSeverity = findViewById(R.id.spinnerSeverity);
        Button btnAddDefect = findViewById(R.id.btnAddDefect);
        Button btnSaveCheck = findViewById(R.id.btnSaveCheck);

        RecyclerView rvPendingDefects = findViewById(R.id.rvPendingDefects);
        rvPendingDefects.setLayoutManager(new LinearLayoutManager(this));
        defectAdapter = new DefectAdapter();
        rvPendingDefects.setAdapter(defectAdapter);

        // Severity spinner options
        ArrayAdapter<CharSequence> spinnerAdapter = ArrayAdapter.createFromResource(
                this, R.array.severity_options, android.R.layout.simple_spinner_item);
        spinnerAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinnerSeverity.setAdapter(spinnerAdapter);

        // Restore defect text from ViewModel (survives rotation)
        viewModel.currentDefectText.observe(this, text -> {
            if (!etDefectDesc.getText().toString().equals(text)) {
                etDefectDesc.setText(text);
                etDefectDesc.setSelection(text.length());
            }
        });

        // Keep ViewModel in sync as user types (so text survives rotation)
        etDefectDesc.addTextChangedListener(new android.text.TextWatcher() {
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                viewModel.currentDefectText.setValue(s.toString());
            }
            public void afterTextChanged(android.text.Editable s) {}
        });

        // Show already-added defects
        viewModel.pendingDefects.observe(this, defects -> defectAdapter.setDefects(defects));

        btnAddDefect.setOnClickListener(v -> {
            String desc = etDefectDesc.getText().toString().trim();
            String sev = spinnerSeverity.getSelectedItem().toString();
            if (!TextUtils.isEmpty(desc)) {
                viewModel.addDefect(desc, sev);
                etDefectDesc.setText("");
                viewModel.currentDefectText.setValue("");
            } else {
                Toast.makeText(this, "Please enter a defect description", Toast.LENGTH_SHORT).show();
            }
        });

        btnSaveCheck.setOnClickListener(v -> {
            String vehicle = etVehicle.getText().toString().trim();
            String driver = etDriver.getText().toString().trim();

            // Input validation – spec requires a Toast/Snackbar if vehicle reg is missing
            if (TextUtils.isEmpty(vehicle)) {
                Toast.makeText(this, "Please enter vehicle details", Toast.LENGTH_SHORT).show();
                return;
            }
            if (TextUtils.isEmpty(driver)) {
                Toast.makeText(this, "Please enter driver name", Toast.LENGTH_SHORT).show();
                return;
            }

            int selectedId = rgStatus.getCheckedRadioButtonId();
            String status = "Pass";
            if (selectedId != -1) {
                RadioButton rb = findViewById(selectedId);
                status = rb.getText().toString();
            }

            String date = new SimpleDateFormat("dd/MM/yyyy", Locale.getDefault()).format(new Date());
            SafetyCheck check = new SafetyCheck(date, vehicle, driver, status);
            viewModel.saveCheck(check);

            Toast.makeText(this, "Safety check saved!", Toast.LENGTH_SHORT).show();
            finish();
        });
    }
}
