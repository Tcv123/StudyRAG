package uk.edu.le.co2103.safecheck;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.ViewModelProvider;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import uk.edu.le.co2103.safecheck.adapter.DefectAdapter;
import uk.edu.le.co2103.safecheck.model.Defect;
import uk.edu.le.co2103.safecheck.viewmodel.DetailViewModel;

public class DetailActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_detail);

        int checkId = getIntent().getIntExtra("CHECK_ID", -1);

        TextView tvDate   = findViewById(R.id.tvDetailDate);
        TextView tvVehicle = findViewById(R.id.tvDetailVehicle);
        TextView tvDriver  = findViewById(R.id.tvDetailDriver);
        TextView tvStatus  = findViewById(R.id.tvDetailStatus);
        Button btnEmail    = findViewById(R.id.btnEmailReport);

        RecyclerView recyclerView = findViewById(R.id.rvDefects);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        DefectAdapter defectAdapter = new DefectAdapter();
        recyclerView.setAdapter(defectAdapter);

        DetailViewModel viewModel = new ViewModelProvider(this).get(DetailViewModel.class);
        viewModel.getCheckWithDefects(checkId).observe(this, data -> {
            if (data == null) return;

            tvDate.setText("Date: " + data.safetyCheck.date);
            tvVehicle.setText("Vehicle: " + data.safetyCheck.vehicleRegistration);
            tvDriver.setText("Driver: " + data.safetyCheck.driverName);
            tvStatus.setText("Status: " + data.safetyCheck.overallStatus);

            defectAdapter.setDefects(data.defects);

            btnEmail.setOnClickListener(v -> {
                StringBuilder body = new StringBuilder();
                if (data.defects != null) {
                    for (Defect d : data.defects) {
                        body.append("- ").append(d.description)
                            .append(" [").append(d.severity).append("]\n");
                    }
                }
                Intent emailIntent = new Intent(Intent.ACTION_SEND);
                emailIntent.setType("message/rfc822");
                emailIntent.putExtra(Intent.EXTRA_SUBJECT,
                        "Safety Defect Report: " + data.safetyCheck.vehicleRegistration);
                emailIntent.putExtra(Intent.EXTRA_TEXT, body.toString());
                startActivity(Intent.createChooser(emailIntent, "Send report via..."));
            });
        });
    }
}
