package com.cognizant.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.AbstractList;
import java.util.ArrayList;

@RestController
@CrossOrigin
public class CourseController {
    @Autowired
    private CourseService courseService;

    @RequestMapping("/course")
    public ArrayList<Course> getCourse(){
        return courseService.getCourse();
    }

    @RequestMapping(method= RequestMethod.POST,value = "/course")
    public void setCourse(@RequestBody Course s) {
        courseService.setCourseDetails(s);
    }
    @RequestMapping("/course/{course}")
    public Course deleteCourse (@PathVariable String course){
        return courseService.deleteCourse(course);
    }
}
