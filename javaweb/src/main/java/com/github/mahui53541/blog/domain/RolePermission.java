package com.github.mahui53541.blog.domain;

import java.io.Serializable;

/**
 * Created by mahui on 2017/5/29.
 */
public class RolePermission implements Serializable {
    /**
     * 序列号
     */
    private static final long serialVersionUID = -4152278657626480897L;

    private String id;

    private String permissionId;

    private String roleId;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getPermissionId() {
        return permissionId;
    }

    public void setPermissionId(String permissionId) {
        this.permissionId = permissionId == null ? null : permissionId.trim();
    }

    public String getRoleId() {
        return roleId;
    }

    public void setRoleId(String roleId) {
        this.roleId = roleId == null ? null : roleId.trim();
    }
}
