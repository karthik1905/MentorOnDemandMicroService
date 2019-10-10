package com.cognizant.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class AdminController {
    @Autowired
    private AdminService adminService;
    @RequestMapping("/admin")
    public ArrayList<Admin> getList(){
        return adminService.getAdminList();
    }

    @RequestMapping(method= RequestMethod.POST,value = "/admin")
    public void addUsers(@RequestBody Admin s) {

//        System.out.println("at controller"+s.getSkills());
//        userService.addUserDetails(s);
        adminService.setAdminDetails(s);
    }

}
