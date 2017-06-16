package com.github.mahui53541.blog.controller;

import com.github.mahui53541.blog.po.Category;
import com.github.mahui53541.blog.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @author mahui
 * @create 2017-06-16 19:15
 **/
@Controller
@RequestMapping("/category")
public class CategoryContrller extends BaseController {

    @Autowired
    private CategoryService categoryService;

    @RequestMapping(value = "/query",method = RequestMethod.GET)
    @ResponseBody
    public List<Category> queryCategory(){
        return categoryService.findAll();
    }
}
