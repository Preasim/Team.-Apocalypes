package com.apocalypse.demuu;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class DemuuApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemuuApplication.class, args);
	}

}
