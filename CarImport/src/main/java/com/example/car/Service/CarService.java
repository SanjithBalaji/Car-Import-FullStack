package com.example.car.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.example.car.Model.CarLogin;
import com.example.car.Model.CarRegister;
//import com.example.car.Repo.CarLoginRepo;
import com.example.car.Repo.CarRegisterRepo;



@Service
public class CarService {

	// Register Model
	@Autowired
	public CarRegisterRepo arepo;
	
	public List<CarRegister> getAdminInfo()
	{
		return arepo.findAll();
	}
	
	public Optional<CarRegister> getAdmin(int id) 
	{
        return arepo.findById(id);
    }
	public CarRegister saveAdmin(CarRegister am)
	{
		return arepo.save(am);
	}
	
	public CarRegister updateAdmin(CarRegister am)
	{
		return arepo.saveAndFlush(am);
	}
	
	public String deleteAdmin(int id)
	{
		arepo.deleteById(id);
		return "Deleted";
	}
}
