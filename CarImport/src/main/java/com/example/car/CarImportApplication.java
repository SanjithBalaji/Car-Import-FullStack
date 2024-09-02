package com.example.car;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
@OpenAPIDefinition(
		info=@Info(
				title="Car Import Database",
				version="1.1.2",
				description="Car Import Registration",
				contact=@Contact(
						name="Sanjith Balaji",
						email="s.sanjithbalaji@gmail.com"
						)
				)	
		)
@SpringBootApplication
public class CarImportApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarImportApplication.class, args);
	}

}
