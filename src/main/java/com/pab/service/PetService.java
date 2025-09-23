package com.pab.service;

import com.pab.entity.Pet;
import com.pab.entity.User;
import com.pab.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PetService {

    @Autowired
    private PetRepository petRepository;

    public Pet addPet(Pet pet) {
        return petRepository.save(pet);
    }

    public List<Pet> getAllPets() {
        return petRepository.findAll();
    }

    public Optional<Pet> getById(Long id) {
        return petRepository.findById(id);
    }

    public List<Pet> getByShelter(User shelter) {
        return petRepository.findByShelter(shelter);
    }
}
