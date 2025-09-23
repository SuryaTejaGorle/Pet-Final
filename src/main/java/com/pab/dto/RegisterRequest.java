package com.pab.dto;

import com.pab.entity.User;
import lombok.Data;

@Data
public class RegisterRequest {
    private String name;
    private String email;
    private String password;
    private User.Role role; // send ADMIN | SHELTER | ADOPTER
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public User.Role getRole() {
		return role;
	}
	public void setRole(User.Role role) {
		this.role = role;
	}
}
