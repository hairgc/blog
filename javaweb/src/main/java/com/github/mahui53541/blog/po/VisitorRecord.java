package com.github.mahui53541.blog.po;

import java.io.Serializable;
import java.util.Date;

/**
 * Created by mahui on 2017/6/21.
 */
public class VisitorRecord implements Serializable {

    private Integer id;
    private Date visitDate;
    private Date outDate;
    private String nickName;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getVisitDate() {
        return visitDate;
    }

    public void setVisitDate(Date visitDate) {
        this.visitDate = visitDate;
    }

    public Date getOutDate() {
        return outDate;
    }

    public void setOutDate(Date outDate) {
        this.outDate = outDate;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }
}
