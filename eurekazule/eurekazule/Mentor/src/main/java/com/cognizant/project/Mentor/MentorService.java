package com.cognizant.project.Mentor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MentorService {
    @Autowired
    private MentorRepository mr;

    public ArrayList<Mentor> getMentorDetail(){
        ArrayList<Mentor> mentorList = new ArrayList<Mentor>();
        mr.findAll().forEach(mentorList::add);
        return mentorList;
    }

    public void setMentorDetails(Mentor mentor) {
        mr.save(mentor);
    }

    public Mentor mentorLogin(String email){
        return mr.searchEmail(email);
    }
    public List<Mentor> mentorCourse(String course){
        return mr.searchCourse(course);
    }
}
