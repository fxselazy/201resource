<%-- 
    Document   : ViewCookies
    Created on : Nov 6, 2020, 2:51:58 PM
    Author     : INT202
--%>

 

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        <c:forEach items="${cookies}" var="c" varStatus="vs">
            ${vs.count} : ${c.name} = ${c.value}<br>
            
            
        </c:forEach>
    </body>
</html>
 