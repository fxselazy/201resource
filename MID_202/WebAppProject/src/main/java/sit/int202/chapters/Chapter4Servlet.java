/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sit.int202.chapters;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Quirky
 */
public class Chapter4Servlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Chapter4Servlet</title>");           
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet Chapter4Servlet</h1>");
            ServletContext sc = getServletContext();
            out.printf("<ul><li> %s </li>", sc.getContextPath());
            out.printf("<li> %s </li>", sc.getServerInfo());
            out.printf("<li> %s </li>", sc.getServletContextName());
            Enumeration<String> params = sc.getInitParameterNames();
            while (params.hasMoreElements()) {
                String name = params.nextElement();
            out.printf("<li>Servlet's Init Parameter Name: '%s', Value: '%s'</li>", name, sc.getInitParameter(name));
            }
            out.println("</ul></body>");
            out.println("</html>");
        }
    }
}
