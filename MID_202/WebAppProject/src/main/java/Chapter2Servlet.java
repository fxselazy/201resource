/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;
import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author LENOVO
 */
public class Chapter2Servlet extends HttpServlet implements ServletContextListener{

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
            out.println("<title>Servlet Chapter2Servlet</title>");
            out.println("</head>");
            out.println("<body>");
            out.printf("<h1>Servlet Chapter 2</h1>");
            out.printf("<h2> Servlet Info </h2>");
            out.printf("<ul><li>Request URL:  %s </li>", request.getRequestURI());
            out.printf("<li>Scheme : %s </li>", request.getScheme());
            out.printf("<li>Server Name : %s </li>", request.getServerName());
            out.printf("<li>Server Port : %s </li>", request.getServerPort());
            out.printf("<li>URI : %s </li>", request.getRequestURI());
            out.printf("<li>Context Path : %s </li>", request.getContextPath());
            out.printf("<li>Servlet Path : %s </li>", request.getServletPath());
            out.printf("<li>Path Info : %s </li>", request.getPathInfo());
            out.printf("<li>Method : %s </li>", request.getMethod());
            out.printf("<li>Query String : %s </li>", request.getQueryString());
            out.printf("</ul>");
            out.printf("<h2>Servlet parameters </h2>");
            out.printf("<ul>");
            
            Enumeration<String> initServletParams = request.getParameterNames();

            if (!(initServletParams.hasMoreElements())) {
                out.printf("<li>Servlet's init have no parameter</li>");
            } else {
                while (initServletParams.hasMoreElements()) {
                    String nextElement = initServletParams.nextElement();
                    for (String parameterValue : request.getParameterValues(nextElement)) {
                        out.printf("<li>Servlet's init Parameter Name: '%s', Value: '%s'</li>", nextElement, parameterValue);
                    }

                }
            }
            out.printf("</ul>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }

    @Override
    public void contextInitialized(ServletContextEvent event){
        ServletContext sc = event.getServletContext();
        
    }
// </editor-fold>

}
