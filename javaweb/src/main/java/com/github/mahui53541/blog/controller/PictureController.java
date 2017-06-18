package com.github.mahui53541.blog.controller;


import com.github.mahui53541.blog.util.FileUpload;
import org.apache.commons.io.FilenameUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.UUID;

/**
 * @author mahui
 * @create 2017-06-18 21:33
 **/
@Controller
@RequestMapping("/picture")
public class PictureController {
    @RequestMapping(value = "/upload", method = RequestMethod.POST)
    @ResponseBody
    @RequiresPermissions("picture:upload")
    public HashMap<String,Object> uploadMultipleFileHandler(@RequestParam("imagefile") MultipartFile imagefile) {
        HashMap<String,Object> result=new HashMap<String,Object>();
        String origFileName=imagefile.getOriginalFilename();

        String ext=FilenameUtils.getExtension(origFileName);

        String newFileName= UUID.randomUUID().toString()+"."+ext;

        if(FileUpload.upload(newFileName,imagefile)){
            result.put("success",1);
            result.put("message","上传成功");
            result.put("url","http://images.mahui53541.com/"+newFileName);
        }else{
            result.put("success",0);
            result.put("message","上传失败");
        }
        return result;
    }
}
