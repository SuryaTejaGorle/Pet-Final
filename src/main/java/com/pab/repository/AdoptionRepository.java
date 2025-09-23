package com.pab.repository;

import com.pab.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.List;

public interface AdoptionRepository extends JpaRepository<AdoptionApplication, Long> {
    List<AdoptionApplication> findByPet(Pet pet);
    List<AdoptionApplication> findByAdopter(User adopter);
}