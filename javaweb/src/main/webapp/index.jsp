<%--
  Created by IntelliJ IDEA.
  User: chenkaihua
  Date: 15-8-16
  Time: 下午10:19
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<html>
<head>
    <script src="//cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    <script>

        function login() {

            <%--$.ajax({--%>

                <%--// The 'type' property sets the HTTP method.--%>
                <%--// A value of 'PUT' or 'DELETE' will trigger a preflight request.--%>
                <%--type: 'GET',--%>

                <%--// The URL to make the request to.--%>
                <%--url: "${pageContext.request.contextPath}/oauth2-login",--%>

                <%--// The 'contentType' property sets the 'Content-Type' header.--%>
                <%--// The JQuery default for this property is--%>
                <%--// 'application/x-www-form-urlencoded; charset=UTF-8', which does not trigger--%>
                <%--// a preflight. If you set this value to anything other than--%>
                <%--// application/x-www-form-urlencoded, multipart/form-data, or text/plain,--%>
                <%--// you will trigger a preflight request.--%>
                <%--contentType: 'text/plain',--%>

                <%--xhrFields: {--%>
                    <%--// The 'xhrFields' property sets additional fields on the XMLHttpRequest.--%>
                    <%--// This can be used to set the 'withCredentials' property.--%>
                    <%--// Set the value to 'true' if you'd like to pass cookies to the server.--%>
                    <%--// If this is enabled, your server must respond with the header--%>
                    <%--// 'Access-Control-Allow-Credentials: true'.--%>
                    <%--withCredentials: true--%>
                <%--},--%>

                <%--headers: {--%>
                    <%--// Set any custom headers here.--%>
                    <%--// If you set any non-simple headers, your server must include these--%>
                    <%--// headers in the 'Access-Control-Allow-Headers' response header.--%>
                <%--},--%>

                <%--success: function() {--%>
                    <%--// Here's where you handle a successful response.--%>
                <%--},--%>

                <%--error: function() {--%>
                    <%--// Here's where you handle an error response.--%>
                    <%--// Note that if the error was due to a CORS issue,--%>
                    <%--// this function will still fire, but there won't be any additional--%>
                    <%--// information about the error.--%>
                <%--}--%>
            <%--});--%>
            <%--$.ajax({--%>
                <%--url:"${pageContext.request.contextPath}/oauth2-login",--%>
                <%--data:{},--%>
                <%--method:"POST",--%>
                <%--dataType:'jsonp',--%>
                <%--jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)--%>
                <%--jsonpCallback:"callback",//自定义的jsonp回调函数名，默认未jquery自动生成的随机函数名，也可以写“?”jquery会自动处理--%>
                <%--success: function(o){--%>
                    <%--alert("success");--%>
                    <%--console.log(o);--%>
                <%--}--%>
            <%--})--%>
        }
    </script>
</head>
<body>
<shiro:guest>
    欢迎游客访问，<a href="${pageContext.request.contextPath}/oauth2-login" >点击登录</a><br/>
</shiro:guest>
<shiro:user>
    欢迎[<shiro:principal/>]登录<br/>
</shiro:user>
<shiro:hasRole name="admin">
    您有角色admin
</shiro:hasRole>
</body>
</html>