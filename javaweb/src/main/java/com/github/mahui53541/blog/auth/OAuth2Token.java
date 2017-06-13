package com.github.mahui53541.blog.auth;

import org.apache.shiro.authc.AuthenticationToken;

/**
 * @author mahui
 * @create 2017-06-13 16:27
 **/
public class OAuth2Token implements AuthenticationToken {

    public OAuth2Token(String authCode) {
        this.authCode = authCode;
    }

    private String authCode;
    private String principal;

    public String getAuthCode() {
        return authCode;
    }

    public void setAuthCode(String authCode) {
        this.authCode = authCode;
    }

    public void setPrincipal(String principal) {
        this.principal = principal;
    }

    public String getPrincipal() {
        return principal;
    }

    @Override
    public Object getCredentials() {
        return authCode;
    }
}
