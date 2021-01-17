/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

import java.util.ArrayList;
import java.util.Random;

/**
 *
 * @author LENOVO
 */
public class Deck {
    
    ArrayList<Card> list = new ArrayList<Card>();

    public Deck() {
        for (int i = 1; i <= 13; i++) {
            for (int j = 1; j <= 4; j++) {
                list.add(new Card(i,j));
            }
        }
    }
    
    public Card call(){
        Card card;
        
        if (list.size() == 0) {
            return null;
        }
        Random rand = new Random();
        int index = rand.nextInt(list.size());
        card = list.get(index);
        list.remove(index);
        return card;
    }
    
    public void reShuffle(){
        list.clear();
        for (int i = 1; i <= 13; i++) {
            for (int j = 1; j <= 4; j++) {
                list.add(new Card(i,j));
            }
        }
    }
    
    public static void main(String[] args) {
        Deck deck = new Deck();
        for (int i = 0; i < 4; i++) {
            System.out.println(deck.call());
        }
    }
}
