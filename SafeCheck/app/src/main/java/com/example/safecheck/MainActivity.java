package com.example.safecheck;

import android.content.Intent;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.ViewModelProvider;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.safecheck.adapter.SafetyCheckAdapter;
import com.example.safecheck.model.SafetyCheckWithDefects;
import com.example.safecheck.viewmodel.MainViewModel;
import com.google.android.material.floatingactionbutton.FloatingActionButton;

public class MainActivity extends AppCompatActivity {

    private MainViewModel viewModel;
    private SafetyCheckAdapter adapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        RecyclerView recyclerView = findViewById(R.id.recyclerView);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));

        adapter = new SafetyCheckAdapter(new SafetyCheckAdapter.OnItemClickListener() {
            @Override
            public void onItemClick(SafetyCheckWithDefects item) {
                // Open detail screen with the selected check's ID
                Intent intent = new Intent(MainActivity.this, DetailActivity.class);
                intent.putExtra("CHECK_ID", item.safetyCheck.checkId);
                startActivity(intent);
            }

            @Override
            public void onDeleteClick(SafetyCheckWithDefects item) {
                // Cascade delete handled by @ForeignKey(onDelete = CASCADE) in Defect entity
                viewModel.deleteCheck(item.safetyCheck);
            }
        });

        recyclerView.setAdapter(adapter);

        viewModel = new ViewModelProvider(this).get(MainViewModel.class);
        viewModel.getAllChecks().observe(this, checks -> adapter.setItems(checks));

        FloatingActionButton fab = findViewById(R.id.fab);
        fab.setOnClickListener(v -> startActivity(new Intent(this, AddCheckActivity.class)));
    }
}
