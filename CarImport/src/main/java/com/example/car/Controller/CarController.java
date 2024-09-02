package com.example.car.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

//import com.example.car.Model.CarLogin;
import com.example.car.Model.CarRegister;
import com.example.car.Service.CarService;

@CrossOrigin
@RestController
public class CarController {
	@Autowired
public CarService cserv;
	
	//Register
	
		@GetMapping("/getCar")
		public List<CarRegister> getAdmin()
		{
			return cserv.getAdminInfo();
		}
		
		@GetMapping("/getRepoId/{id}")
		public Optional<CarRegister> byId(@PathVariable("id")int id)
		{
			return cserv.getAdmin(id);
		}
		
		@PostMapping("/saveCar")
		public CarRegister signUp(@RequestBody CarRegister um)
		{
			return cserv.saveAdmin(um);
		}
		
		@PutMapping("/updateCar")
		public CarRegister updateAdmin (@RequestBody CarRegister um)
		{
			return cserv.updateAdmin(um);
		}
		
		@DeleteMapping("/deleteCar/{id}")
		public String deleteAdmin(@PathVariable("id") int id)
		{
			cserv.deleteAdmin(id);
			return "Deleted";
		}
}
