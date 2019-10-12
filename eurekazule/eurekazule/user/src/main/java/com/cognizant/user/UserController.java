package com.cognizant.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.w3c.dom.css.CSSPageRule;

import java.util.ArrayList;

@CrossOrigin
@RestController
public class UserController {
    @Autowired
    private UserService userService;
    @RequestMapping("/user")
    @GetMapping
    public ArrayList<User> getList(){
        return userService.getUserList();
    }

    @PutMapping("/user/{email}")
    public void updateUser(@PathVariable String email){
        userService.updateUser(email);
    }

    @RequestMapping(method= RequestMethod.POST,value = "/user")
    public void addUsers(@RequestBody User s) {
        userService.setUserDetails(s);
    }

    @RequestMapping("/user/{email}")
    public User userLogin(@PathVariable String email){
        return userService.userLogin(email);
    }
}
