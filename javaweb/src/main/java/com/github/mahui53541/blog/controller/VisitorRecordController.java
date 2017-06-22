package com.github.mahui53541.blog.controller;

import com.github.mahui53541.blog.po.VisitorRecord;
import com.github.mahui53541.blog.service.VisitorRecordService;
import com.github.pagehelper.PageRowBounds;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;

/**
 * @author mahui
 * @create 2017-06-22 12:02
 **/
@Controller
@RequestMapping("/visitor")
public class VisitorRecordController {
    @Autowired
    private VisitorRecordService visitorRecordService;

    @RequestMapping(value = "/queryVisitorListByPage",method = RequestMethod.GET)
    @ResponseBody
    @RequiresPermissions("visitor:manage")
    public HashMap<String,Object> query(
            @RequestParam(required=false,defaultValue = "1")Integer pageNum,
            @RequestParam(required=false,defaultValue = "10")Integer rowNum){
        PageRowBounds pageRowBounds=new PageRowBounds(pageNum,rowNum);
        List<VisitorRecord> visitors=visitorRecordService.findAll(pageRowBounds);
        HashMap<String,Object> map=new HashMap<String,Object>();
        map.put("rows",visitors);
        map.put("total",pageRowBounds.getTotal());
        return map;
    }
}
