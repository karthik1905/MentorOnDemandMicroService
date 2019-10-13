package com.cognizant.project.Mentor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
public class MentorController {
    @Autowired
    private MentorService mentorService;

    @RequestMapping("/mentor")
    public ArrayList<Mentor> getMentorList() {
        return mentorService.getMentorDetail();
    }

    @RequestMapping(method= RequestMethod.POST,value = "/mentor")
    public void addUsers(@RequestBody Mentor s) {
        mentorService.setMentorDetails(s);
    }

    @RequestMapping("/mentor/{email}")
    public Mentor mentorLogin(@PathVariable String email){
        return mentorService.mentorLogin(email);
    }

    @PutMapping("/mentor/{email}")
    public void updateMentor(@PathVariable String email){
        mentorService.updateMentor(email);
    }

    @RequestMapping("/mentor/course/{course}")
    public List<Mentor> mentorCourse(@PathVariable String course){
        return mentorService.mentorCourse(course);
    }
}
