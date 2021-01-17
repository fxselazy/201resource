/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sit.int202.chapters;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Quirky
 */
public class Chapter1Servlet extends HttpServlet {

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
            out.print("<title>Servlet Chapter1Servlet</title>");
            out.print("</head><body>");
            out.printf("<h1>%s</h1>", getServletInfo());
            out.printf("<ul><li>Servlet Name : %s</li>", getServletName());
            Enumeration<String> initServletParams = getInitParameterNames();
            while (initServletParams.hasMoreElements()) {
                String name = initServletParams.nextElement();
                out.printf("<li>Servlet's Init Parameter Name: '%s', Value: '%s'</li>", name, getInitParameter(name));
            }
            out.println("</ul></body></html>");
            String msg = getInitParameter("meeting");
            log("Chapter 1 service: " + msg == null ? "" : msg);
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
    public void init() {
        log("Servlet Initialization");
    }

    @Override
    public String getServletInfo() {
        return "This is Chapter 1 Servlet";
    }

}
