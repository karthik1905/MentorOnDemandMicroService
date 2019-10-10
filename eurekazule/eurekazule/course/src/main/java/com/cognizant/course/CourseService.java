package com.cognizant.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

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
    public Course deleteCourse(String course){
        return cr.deleteCourse(course);
    }
}
