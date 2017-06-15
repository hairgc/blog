package com.github.mahui53541.blog.auth;

import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.filter.authc.AuthenticatingFilter;
import org.apache.shiro.web.util.WebUtils;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

/**
 * @author mahui
 * @create 2017-06-13 16:45
 **/
public class OAuth2AuthenticationFilter extends AuthenticatingFilter {
    //oauth2 authc code参数名
    private String authcCodeParam = "code";

    private String failureUrl;

    public static final String DEFAULT_ERROR_KEY_ATTRIBUTE_NAME = "shiroLoginFailure";

    private String failureKeyAttribute = DEFAULT_ERROR_KEY_ATTRIBUTE_NAME;

    public String getFailureKeyAttribute() {
        return failureKeyAttribute;
    }

    public void setFailureKeyAttribute(String failureKeyAttribute) {
        this.failureKeyAttribute = failureKeyAttribute;
    }

    public void setAuthcCodeParam(String authcCodeParam) {
        this.authcCodeParam = authcCodeParam;
    }

    public void setFailureUrl(String failureUrl) {
        this.failureUrl = failureUrl;
    }


    @Override
    protected AuthenticationToken createToken(ServletRequest request, ServletResponse response) throws Exception {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        String code = httpRequest.getParameter(authcCodeParam);
        return new OAuth2Token(code);
    }

    @Override
    protected boolean isAccessAllowed(ServletRequest request, ServletResponse response, Object mappedValue) {
        return false;
    }

    @Override
    protected boolean onAccessDenied(ServletRequest request, ServletResponse response) throws Exception {
        String error = request.getParameter("error");
        String errorDescription = request.getParameter("error_description");
        if(!StringUtils.isEmpty(error)) {//如果服务端返回了错误
            WebUtils.issueRedirect(request, response, failureUrl + "?error=" + error + "error_description=" + errorDescription);
            return false;
        }

        Subject subject = getSubject(request, response);
        if(!subject.isAuthenticated()) {
            if(StringUtils.isEmpty(request.getParameter(authcCodeParam))) {
                //如果用户没有身份验证，且没有auth code，则重定向到服务端授权
                saveRequestAndRedirectToLogin(request, response);
                return false;
            }
        }else{
            return true;
        }

        return executeLogin(request, response);
    }

    @Override
    protected boolean onLoginSuccess(AuthenticationToken token, Subject subject, ServletRequest request,
                                     ServletResponse response) throws Exception {
        issueSuccessRedirect(request, response);
        return false;
    }

    @Override
    protected boolean onLoginFailure(AuthenticationToken token, AuthenticationException e, ServletRequest request,
                                     ServletResponse response) {
        setFailureAttribute(request, e);
        //login failed, let request continue back to the login page:
        return true;
    }

    protected void setFailureAttribute(ServletRequest request, AuthenticationException ae) {
        String className = ae.getClass().getName();
        request.setAttribute(getFailureKeyAttribute(), className);
    }
}
