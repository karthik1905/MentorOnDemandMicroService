package com.cognizant.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class AdminService {

    @Autowired
    private AdminRepository ar;

    public void setAdminDetails(Admin admin) {
        ar.save(admin);
    }

    public ArrayList<Admin> getAdminList() {

        ArrayList<Admin> adminList = new ArrayList<Admin>();
        ar.findAll().forEach(adminList::add);
//		System.out.println("get request"+userList);
		return adminList;
    }


}
