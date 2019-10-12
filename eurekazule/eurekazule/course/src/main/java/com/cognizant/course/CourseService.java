package com.cognizant.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class CourseService {
    @Autowired
    private CourseRepository cr;

    ArrayList<Course> CourseList = new ArrayList<Course>();

    public ArrayList<Course> getCourse(){
        ArrayList<Course> CourseList = new ArrayList<Course>();
        cr.findAll().forEach(CourseList::add);
        return CourseList;
    }

    public void setCourseDetails(Course course) {
        cr.save(course);
    }
    public void deleteCourse(String course){
//        Optional<Course> c = cr.findById(course);
        cr.deleteById(course);
    }
}
