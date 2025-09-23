package com.pab.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AdoptionApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "pet_id")
    private Pet pet;

    @ManyToOne
    @JoinColumn(name = "adopter_id")
    private User adopter;

    // Existing
    @Enumerated(EnumType.STRING)
    private Status status;

    // New fields from the form
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String dateOfBirth;

    private String address;
    private String city;
    private String state;
    private String zipCode;
    private String housingType;
    private String ownRent;

    private String previousPets;
    private String experience;
    private String familyMembers;
    private String allergies;
    private String workSchedule;

    private String veterinarian;
    private String exerciseTime;
    private String petBudget;
    private String travelPlans;

    public enum Status {
        PENDING, APPROVED, REJECTED
    }
}
