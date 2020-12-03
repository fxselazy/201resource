<%--
    Document   : ProductInfoTag
    Created on : Nov 27, 2020, 2:20:10 PM
    Author     : Quirky
--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@tag description="Product Info Tag" pageEncoding="UTF-8"%>
<%-- The list of normal or fragment attributes can be specified here: --%>
<%@attribute name="product" required="true" rtexprvalue="true" type="sit.int202.classicmodel.entity.Products"%>
<%@attribute name="format" required="true" rtexprvalue="true" type="java.lang.String" %>
<%@tag body-content="empty"%>
<%-- any content can be specified here e.g.: --%>
<c:set var="p" value="${product}" />
<c:choose>
    <c:when test="${format=='gallery'}">
        <div class="col-2 border border-primary rounded mx-2 my-3">
            <div class="img-thumbnail border-0">
                <img src="model-images/${p.productLine.productLine}/${p.productCode}.jpg" height="120" width="180"/>
            </div>
            <div style="font-size: 0.7em; white-space: nowrap; text-overflow: ellipsis; overflow: hidden;width: 200px;">
                <span style="font-size: 1.5em">
                    <button class="btn btn-outline-primary border-0" onclick="addItemToCart('${p.productCode}')"><i class="fa fa-cart-plus"></i></button>
                </span>
                ${p.productName}
            </div>
        </div>
    </c:when>
    <c:when test="${format=='list'}">
        <tr>
            <td>
                <img src="model-images/${p.productLine.productLine}/${p.productCode}.jpg"
                     height="40" width="60" class="rounded-circle"/>
                <span style="margin-left: -50px;">
                    <button class="btn mt-5 btn-outline-primary border-0" onclick="addItemToCart('${p.productCode}')">
                        <i class="fa fa-cart-plus"></i>
                    </button>
                </span>
            </td>
            <td>${p.productCode}</td>
            <td>${p.productName}</td>
            <td>${p.productLine.productLine}</td>
            <td>${p.productScale}</td>
            <td>${p.msrp}</td>
            <td style="width: 40%">${p.productDescription}</td>
        </tr>
    </c:when>
    <c:when test="${format=='full'}">
    </c:when>
    <c:otherwise>
        <p style="red">Invalid format</p>
    </c:otherwise>
</c:choose>