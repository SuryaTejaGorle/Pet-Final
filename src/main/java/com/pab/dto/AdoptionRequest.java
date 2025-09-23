package com.pab.dto;

import lombok.Data;

@Data
public class AdoptionRequest {
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
}
