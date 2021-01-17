/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sit.int202.chapters;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.Enumeration;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Quirky
 */
public class Chapter2Servlet extends HttpServlet {

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
            out.print("<!DOCTYPE html><html><head>");
            out.print("<title>Servlet Chapter2Servlet</title>");
            out.print("</head><body>");
            out.printf("<h1>%s</h1>", getServletInfo());
            out.printf("<ul><li>Servlet Name : %s</li>", getServletName());
            out.printf("<li>Request URL : %s</li>", request.getRequestURI());
            out.printf("<li>Server Name : %s</li>", request.getServerName());
            out.printf("<li>Request URI : %s</li>", request.getServerPort());
            out.printf("<li>ServerPort : %s</li>", request.getRequestURI());
            out.printf("<li>ContextPath : %s</li>", request.getContextPath());
            out.printf("<li>ContextPath : %s</li>", request.getServletPath());
            out.printf("<li>PathInfo : %s</li>", request.getPathInfo());
            out.printf("<li>Method : %s</li>", request.getMethod());
            out.printf("<li>QueryString : %s</li>", request.getQueryString());
            out.printf("<li>ParameterValues : %s</li>", Arrays.toString(request.getParameterValues("p1")));
            out.printf("<li>Parameter : %s</li>", request.getParameter("p1"));
            Enumeration<String> formParams = request.getParameterNames();
            while (formParams.hasMoreElements()) {
                String name = formParams.nextElement();
                for (String parameterValue : request.getParameterValues(name)) {
                    out.printf("<li>Form Parameter Name: '%s', Value: '%s'</li>",
                            name, parameterValue);
                }
                log("serve");
            }
            out.println("</ul></body></html>");
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
        protected void doGet
        (HttpServletRequest request, HttpServletResponse response)
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
        protected void doPost
        (HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
            processRequest(request, response);
        }

        /**
         * Returns a short description of the servlet.
         *
         * @return a String containing servlet description
         */
        @Override
        public void init
        
            () {
        log("Servlet Initialization");
        }

        @Override
        public String getServletInfo () {
            return "This is Chapter 2 Servlet";
        }// </editor-fold>// <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
//    @Override
//    protected void doGet(HttpServletRequest request, HttpServletResponse response)
//            throws ServletException, IOException {
//        processRequest(request, response);
//    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
//    @Override
//    protected void doPost(HttpServletRequest request, HttpServletResponse response)
//            throws ServletException, IOException {
//        processRequest(request, response);
//    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
//    @Override
//    public String getServletInfo() {
//        return "Short description";
//    }// </editor-fold>

}
