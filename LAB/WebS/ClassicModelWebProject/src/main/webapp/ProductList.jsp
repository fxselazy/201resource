<%-- 
    Document   : ProductList
    Created on : Aug 28, 2020, 3:59:48 PM
    Author     : INT202
--%>

<%@page import="sit.int202.classicmodel.entity.Product"%>
<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
     <body>
          <H3>Product List::</H3><hr>
        <div style="margin: 40px; width: 70%">
            <form action="ProductList">
                <div  style="margin-bottom: 8px ">Search product by name/description: </div>
                <div style="margin-bottom: 15px ">
                    <input type="text" name="productDescription"/>
                </div>
                <div><input type="submit"/></div>
            </form>
        </div>
        <h1>Product List ::</h1><hr>
        <%List<Product> products = (List) request.getAttribute("products");%>
        <table>
            <% for (Product product : products) { %>
                    <tr>
                        <td style="vertical-align: top"><%=product.getProductCode() %></td>
                        <td style="vertical-align: top"><%=product.getProductName() %></td>
                        <td style="vertical-align: top"><%=product.getProductLine() %></td>
                        <td style='width:40%'><%=product.getProductDescription() %></td>
                        <td style="vertical-align: top"><%=product.getMsrp() %></td>
                    </tr>
             <% } %>
        </table>
    </body>
</html>
