package com.github.mahui53541.blog.po;

import java.io.Serializable;

/**
 * Created by mahui on 2017/5/29.
 */
public class UserRole implements Serializable{
    private Integer id;

    private String openId;

    private Integer roleId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id ;
    }

    public String getOpenId() {
        return openId;
    }

    public void setOpenId(String openId) {
        this.openId = openId;
    }

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }
}
