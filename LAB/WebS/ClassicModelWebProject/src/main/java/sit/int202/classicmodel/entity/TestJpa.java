/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sit.int202.classicmodel.entity;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

 

/**
 *
 * @author INT202
 */
public class TestJpa {
    public static void main(String[] args) {
        EntityManagerFactory emf = 
                 Persistence.createEntityManagerFactory("sit.int202_ClassicModelWebProjecct_war_1.0-SNAPSHOTPU");
        //System.out.println(emf);
        EntityManager em = emf.createEntityManager();
        System.out.println("------------------\n");
        Products p = em.find(Products.class, "S12_1109");
        System.out.println(p);
        Customers c = em.find(Customers.class, 119);
        System.out.println(c);
        //System.out.println(em);
        System.out.println("\n-----------------");
        em.close();
        emf.close();
    }
    
}