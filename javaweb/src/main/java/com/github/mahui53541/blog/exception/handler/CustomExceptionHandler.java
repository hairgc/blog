package com.github.mahui53541.blog.exception.handler;

import com.github.mahui53541.blog.controller.BaseController;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authz.AuthorizationException;
import org.apache.shiro.authz.UnauthorizedException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * Created by mahui on 2017/6/15.
 */
@RestControllerAdvice
public class CustomExceptionHandler extends BaseController{

    @ExceptionHandler(LockedAccountException.class)
    public Object handlerLockedAccountException(){
        return this.ajaxFailureResponse("该账户已经被锁定");
    }

    @ExceptionHandler(UnauthorizedException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public Object handlerUnauthorizedException(UnauthorizedException e){
        return this.ajaxFailureResponse("没有访问权限");
    }

    @ExceptionHandler(AuthorizationException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public Object handlerAuthorizationException(AuthorizationException e){
        return this.ajaxFailureResponse("没有访问权限,请登录或换号登录后重试！");
    }

    @ExceptionHandler(Exception.class)
    public Object handlerException(Exception e){
        return this.ajaxFailureResponse("服务器错误。");
    }
}
