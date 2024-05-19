package com.lsm;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import com.lsm.service.AdminService;

@SpringBootApplication
@EnableJpaAuditing
public class Library_Management_System_Application {

	public static void main(String[] args) {
		SpringApplication.run(Library_Management_System_Application.class, args);
	}
	
	@Bean
	public CommandLineRunner createadmin(AdminService aserv) {
		return args -> {
			if (aserv.count() == 0) {
				aserv.createadmin();		
			}
		};
	}
}
