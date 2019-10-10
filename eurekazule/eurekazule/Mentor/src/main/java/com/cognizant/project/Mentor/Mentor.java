package com.cognizant.project.Mentor;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.ArrayList;

@Entity
public class Mentor {
    @Id
    private String email;
    private String password;
    private String linkedInUrl;
    private Long contactNumber;
    private String firstName;
    private String lastName;
    private String status;
    private String course;

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public Mentor(){}
    public Mentor(String email, String password, String linkedInUrl, Long contactNumber, String firstName, String lastName, String status, String timeGap, float yearsOfExperience) {
        this.email = email;
        this.password = password;
        this.linkedInUrl = linkedInUrl;
        this.contactNumber = contactNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.status = status;
        this.timeGap = timeGap;
        this.yearsOfExperience = yearsOfExperience;
    }
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getTimeGap() {
        return timeGap;
    }

    public void setTimeGap(String timeGap) {
        this.timeGap = timeGap;
    }
    private String timeGap;
    private float yearsOfExperience;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getLinkedInUrl() {
        return linkedInUrl;
    }

    public void setLinkedInUrl(String linkedInUrl) {
        this.linkedInUrl = linkedInUrl;
    }

    public Long getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(Long contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public float getYearsOfExperience() {
        return yearsOfExperience;
    }

    public void setYearsOfExperience(float yearsOfExperience) {
        this.yearsOfExperience = yearsOfExperience;
    }
}
