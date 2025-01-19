package com.example.backend.projectdemofpt.fptappsbackend.repository;

import com.example.backend.projectdemofpt.fptappsbackend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository  extends JpaRepository<Employee, Long>{
}
