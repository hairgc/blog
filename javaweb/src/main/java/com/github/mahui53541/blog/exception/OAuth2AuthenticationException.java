package com.github.mahui53541.blog.exception;

import org.apache.shiro.authc.AuthenticationException;

/**
 * @author mahui
 * @create 2017-06-13 16:41
 **/
public class OAuth2AuthenticationException extends AuthenticationException {
    public OAuth2AuthenticationException(Throwable cause) {
        super(cause);
    }
}
