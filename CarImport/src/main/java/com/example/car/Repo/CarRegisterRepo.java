package com.example.car.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.car.Model.CarRegister;

public interface CarRegisterRepo extends JpaRepository<CarRegister, Integer> {

}
