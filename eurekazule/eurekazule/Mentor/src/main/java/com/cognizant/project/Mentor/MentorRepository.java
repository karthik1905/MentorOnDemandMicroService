package com.cognizant.project.Mentor;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MentorRepository extends CrudRepository<Mentor,String> {
    @Query(value="select * from mentor m where m.email=?1",nativeQuery = true)
    Mentor  searchEmail(String email);

    @Query(value="select * from mentor m where m.course=?1",nativeQuery = true)
    List<Mentor> searchCourse(String course);
}
