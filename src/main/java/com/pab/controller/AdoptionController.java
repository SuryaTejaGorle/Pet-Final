package com.pab.controller;

import com.pab.dto.AdoptionRequest;
import com.pab.entity.AdoptionApplication;
import com.pab.entity.Pet;
import com.pab.entity.User;
import com.pab.service.AdoptionService;
import com.pab.service.PetService;
import com.pab.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/adoptions")
public class AdoptionController {

    @Autowired
    private AdoptionService adoptionService;

    @Autowired
    private PetService petService;

    @Autowired
    private UserService userService;

    @PostMapping("/apply/{petId}")
    public ResponseEntity<?> apply(@PathVariable Long petId,
                                   @RequestBody AdoptionRequest request,
                                   Authentication authentication) {

        // Get logged-in adopter
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String email = userDetails.getUsername();
        User adopter = userService.findByEmail(email).orElse(null);

        if (adopter == null || adopter.getRole() != User.Role.ADOPTER) {
            return ResponseEntity.status(403).body("Only adopters can apply.");
        }

        // Check if pet exists
        Optional<Pet> petOpt = petService.getById(petId);
        if (petOpt.isEmpty()) {
            return ResponseEntity.badRequest().body("Pet not found.");
        }

        // Map request to entity
        AdoptionApplication application = new AdoptionApplication();
        application.setPet(petOpt.get());
        application.setAdopter(adopter);
        application.setStatus(AdoptionApplication.Status.PENDING);
        application.setFirstName(request.getFirstName());
        application.setLastName(request.getLastName());
        application.setEmail(request.getEmail());
        application.setPhone(request.getPhone());
        application.setDateOfBirth(request.getDateOfBirth());
        application.setAddress(request.getAddress());
        application.setCity(request.getCity());
        application.setState(request.getState());
        application.setZipCode(request.getZipCode());
        application.setHousingType(request.getHousingType());
        application.setOwnRent(request.getOwnRent());
        application.setPreviousPets(request.getPreviousPets());
        application.setExperience(request.getExperience());
        application.setFamilyMembers(request.getFamilyMembers());
        application.setAllergies(request.getAllergies());
        application.setWorkSchedule(request.getWorkSchedule());
        application.setVeterinarian(request.getVeterinarian());
        application.setExerciseTime(request.getExerciseTime());
        application.setPetBudget(request.getPetBudget());
        application.setTravelPlans(request.getTravelPlans());

        // Save application
        AdoptionApplication saved = adoptionService.apply(application);
        return ResponseEntity.ok(saved);
    }
}
