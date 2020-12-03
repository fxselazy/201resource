<%-- 
    Document   : ProductGalleryView
    Created on : Oct 30, 2020, 3:54:26 PM
    Author     : INT202
--%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="bootstrap-4.5.0-dist/css/bootstrap.min.css" rel="stylesheet" type="text/css">
        <script src="bootstrap-4.5.0-dist/js/bootstrap.min.js" type="text/javascript"></script>
        <title>JSP Page</title>
    </head>
    <body>
         <div class="container-fluid">
            <div class="row rounded border badge-secondary p-4 pt-2 pb-2">
                <label class="h5">Product Gallery ::</label>
            </div>
            <div class="row ml-3">
                
                <c:forEach items="${products}" var="p" varStatus="vs">
                    <div class="col-2 border border-primary rounded mx-2 my-3">
                        <div class="img-thumbnail border-0">
                            <img src="model-images/${p.productLine.productLine}/${p.productCode}.jpg" height="120" width="180"/>
                        </div>
                        <div style="font-size: 0.7em; white-space: nowrap; text-overflow: ellipsis; overflow: hidden;width: 200px;">${p.productName}</div>
                    </div>
                </c:forEach>
            </div>
        </div>

 

    </body>
</html