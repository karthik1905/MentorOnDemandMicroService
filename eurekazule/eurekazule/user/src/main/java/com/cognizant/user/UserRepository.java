package com.cognizant.user;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,String>{
    @Query(value="select * from user u where u.email =?1 ",nativeQuery = true)
    User searchEmail(String email);
}
