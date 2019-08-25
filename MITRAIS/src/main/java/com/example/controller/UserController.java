package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.User;
import com.example.repository.UserRepository;

@RestController
@CrossOrigin
@RequestMapping("user")
public class UserController {
	
	@Autowired
	UserRepository userRepo;
	
	@PostMapping("insert")
	public User insert(@RequestBody User user) {
		if(userRepo.existsByMobileNo(user.getMobileNo()))
			return new User();
		else
			return userRepo.save(user);
	}

}
