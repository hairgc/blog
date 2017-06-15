package com.github.mahui53541.blog.controller;

import org.apache.commons.lang3.StringUtils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by mahui on 2017/6/15.
 */
public class BaseController {

    private static final String ROWS = "rows";
    private static final String TOTAL = "total";

    protected Map<String,Object> ajaxSuccessResponse(){
        HashMap<String,Object> result=new HashMap<String,Object>();
        result.put("success",true);
        return result;
    }

    protected Map<String,Object> ajaxSuccessResponse(String msg){
        HashMap<String,Object> result=new HashMap<String,Object>();
        result.put("success",true);
        if(StringUtils.isNotBlank(msg)&&StringUtils.isNotEmpty(msg)){
            result.put("msg",msg);
        }
        return result;
    }

    protected Map<String,Object> ajaxFailureResponse(){
        HashMap<String,Object> result=new HashMap<String,Object>();
        result.put("success",false);
        return result;
    }

    protected Map<String,Object> ajaxFailureResponse(String msg){
        HashMap<String,Object> result=new HashMap<String,Object>();
        result.put("success",false);
        result.put("msg", msg);
        return result;
    }

    public Map<String,Object> buildResponse(List rows, long total){
        Map<String,Object> map = new HashMap<>();
        map.put(ROWS,rows);
        map.put(TOTAL,total);
        return map;
    }
}
