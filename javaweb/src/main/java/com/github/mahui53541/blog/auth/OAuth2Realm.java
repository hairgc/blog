package com.github.mahui53541.blog.auth;

import com.github.mahui53541.blog.exception.OAuth2AuthenticationException;
import com.qq.connect.api.OpenID;
import com.qq.connect.api.qzone.UserInfo;
import com.qq.connect.javabeans.AccessToken;
import com.qq.connect.javabeans.qzone.UserInfoBean;
import com.qq.connect.oauth.Oauth;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;

/**
 * @author mahui
 * @create 2017-06-13 16:17
 **/
public class OAuth2Realm extends AuthorizingRealm {

    @Override
    public boolean supports(AuthenticationToken token) {
        return token != null && token instanceof OAuth2Token;//表示此Realm只支持OAuth2Token类型
    }

    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
        SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();

        return authorizationInfo;
    }

    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
        OAuth2Token oAuth2Token = (OAuth2Token) token;
        String code = oAuth2Token.getAuthCode();
        String username = extractUsername(code);

        SimpleAuthenticationInfo authenticationInfo =
                new SimpleAuthenticationInfo(username, code, getName());
        return authenticationInfo;
    }

    private String extractUsername(String code) {

        try {
            String queryString="code="+code+"&state=blog";
            AccessToken accessTokenObj = (new Oauth()).getAccessTokenByQueryString(queryString,"blog");
            String accessToken = accessTokenObj.getAccessToken();
            Long expiresIn = accessTokenObj.getExpireIn();
            OpenID openIDObj =  new OpenID(accessToken);
            String openID = openIDObj.getUserOpenID();
            UserInfo qzoneUserInfo = new UserInfo(accessToken, openID);
            UserInfoBean userInfoBean = qzoneUserInfo.getUserInfo();
            return openID;
        } catch (Exception e) {
            e.printStackTrace();
            throw new OAuth2AuthenticationException(e);
        }
    }
}
