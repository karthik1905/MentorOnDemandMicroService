package com.cognizant.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository ur;

    public void setUserDetails(User user) {
        ur.save(user);
    }

    public ArrayList<User> getUserList() {
        ArrayList<User> UserList = new ArrayList<User>();
        ur.findAll().forEach(UserList::add);
        return UserList;
    }

    public void updateUser(String email){
        User u = ur.findById(email).get();
        u.setStatus("blocked");
        ur.save(u);
    }

    public User userLogin(String email){
        return ur.searchEmail(email);
    }


}
