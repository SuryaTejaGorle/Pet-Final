package com.pab.service;

import com.pab.entity.AdoptionApplication;
import com.pab.entity.Pet;
import com.pab.entity.User;
import com.pab.repository.AdoptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdoptionService {

    @Autowired
    private AdoptionRepository adoptionRepository;

    // Apply for adoption
    public AdoptionApplication apply(AdoptionApplication application) {
        // Ensure status is always set to PENDING on apply
        application.setStatus(AdoptionApplication.Status.PENDING);
        return adoptionRepository.save(application);
    }

    // Find by application ID
    public Optional<AdoptionApplication> findById(Long id) {
        return adoptionRepository.findById(id);
    }

    // Find all applications for a specific pet
    public List<AdoptionApplication> findByPet(Pet pet) {
        return adoptionRepository.findByPet(pet);
    }

    // Find all applications submitted by a specific adopter
    public List<AdoptionApplication> findByAdopter(User adopter) {
        return adoptionRepository.findByAdopter(adopter);
    }

    // Save or update an application
    public AdoptionApplication save(AdoptionApplication application) {
        return adoptionRepository.save(application);
    }
}
