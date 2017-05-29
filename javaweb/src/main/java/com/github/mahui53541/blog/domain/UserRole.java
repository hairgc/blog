package com.github.mahui53541.blog.domain;

import java.io.Serializable;

/**
 * Created by mahui on 2017/5/29.
 */
public class UserRole implements Serializable{
    private String id;

    private String openId;

    private String roleId;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getOpenId() {
        return openId;
    }

    public void setOpenId(String openId) {
        this.openId = openId;
    }

    public String getRoleId() {
        return roleId;
    }

    public void setRoleId(String roleId) {
        this.roleId = roleId == null ? null : roleId.trim();
    }
}
