package com.cognizant.course;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface CourseRepository extends CrudRepository<Course,String> {
    @Query(value="delete course where course_name =?1",nativeQuery = true)
    Course deleteCourse(String course);
}
