package com.pab.controller;

import com.pab.entity.Pet;
import com.pab.entity.User;
import com.pab.service.PetService;
import com.pab.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;

@RestController
@RequestMapping("/api/pets")
public class PetController {

    @Autowired
    private PetService petService;

    @Autowired
    private UserService userService;

    // Everyone can view pets
    @GetMapping
    public List<Pet> listAll() {
        return petService.getAllPets();
    }

    // Only Shelter owners can add pets
    @PostMapping
    public ResponseEntity<?> addPet(@RequestBody Pet pet, @AuthenticationPrincipal UserDetails userDetails) {
        String email = userDetails.getUsername();
        User shelter = userService.findByEmail(email).orElse(null);

        if (shelter == null || shelter.getRole() != User.Role.SHELTER) {
            return ResponseEntity.status(403).body("Only shelter owners can add pets");
        }

        pet.setShelter(shelter);
        Pet saved = petService.addPet(pet);
        return ResponseEntity.ok(saved);
    }
}
