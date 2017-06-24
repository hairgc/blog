package com.github.mahui53541.blog.controller;

import com.github.mahui53541.blog.po.Category;
import com.github.mahui53541.blog.service.CategoryService;
import com.github.pagehelper.PageRowBounds;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author mahui
 * @create 2017-06-16 19:15
 **/
@Controller
@RequestMapping("/category")
public class CategoryContrller extends BaseController {

    @Autowired
    private CategoryService categoryService;

    /**
     * 列表查询
     * @return
     */
    @RequestMapping(value = "/query",method = RequestMethod.GET)
    @ResponseBody
    public List<Category> queryCategory(){
        List<Category> list=categoryService.findAll();

        return categoryService.findAll();
    }

    /**
     * 分页查询
     * @param pageNum
     * @param rowNum
     * @return
     */
    @RequestMapping(value = "/queryByPage",method = RequestMethod.GET)
    @ResponseBody
    @RequiresPermissions("category:manage")
    public HashMap<String,Object> queryByPage(
            @RequestParam(required=false,defaultValue = "1")Integer pageNum,
            @RequestParam(required=false,defaultValue = "10")Integer rowNum){
        PageRowBounds pageRowBounds=new PageRowBounds(pageNum,rowNum);
        List<Category> categories=categoryService.findAll(pageRowBounds);
        HashMap<String,Object> map=new HashMap<String,Object>();
        map.put("rows",categories);
        map.put("total",pageRowBounds.getTotal());
        return map;
    }

    /**
     * 新增分类
     * @param category
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/newCategory", method = RequestMethod.POST)
    @ResponseBody
    @RequiresPermissions("category:add")
    public Map<String,Object> newCategory(@RequestBody Category category) throws Exception {
        categoryService.insertSelective(category);
        return this.ajaxSuccessResponse();
    }

    /**
     * 更新分类
     * @param category
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/editCategory", method = RequestMethod.POST)
    @ResponseBody
    @RequiresPermissions("category:update")
    public Map<String,Object> editCategory(@RequestBody Category category) throws Exception {
        categoryService.updateByPrimaryKeySelective(category);
        return this.ajaxSuccessResponse();
    }

    /**
     * 删除分类
     * @param categoryId
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/deleteCategory/{categoryId}", method = RequestMethod.POST)
    @ResponseBody
    @RequiresPermissions("category:delete")
    public Map<String,Object> editCategory(@PathVariable Integer categoryId) throws Exception {
        try {
            categoryService.deleteByPrimaryKey(categoryId);
        }catch (Exception e){
            return this.ajaxFailureResponse("删除失败");
        }
        return this.ajaxSuccessResponse();
    }
}
