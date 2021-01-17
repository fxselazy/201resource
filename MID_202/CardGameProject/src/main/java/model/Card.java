/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

/**
 *
 * @author LENOVO
 */
public class Card {

    String value;
    String suit;

    public Card(String value, String suit) {
        if (value.equalsIgnoreCase("j") || value.equals("11")) {
            value = "J";
        } else if (value.equalsIgnoreCase("q") || value.equals("12")) {
            value = "Q";
        } else if (value.equalsIgnoreCase("k") || value.equals("13")) {
            value = "K";
        } else if (value.equalsIgnoreCase("a") || value.equals("1")) {
            value = "A";
        }

        if (suit.equalsIgnoreCase("spreads") || suit.equalsIgnoreCase("4") || suit.equalsIgnoreCase("spread")) {
            suit = "Spreads";
        } else if (suit.equalsIgnoreCase("diamond") || suit.equals("2")) {
            suit = "Diamond";
        } else if (suit.equalsIgnoreCase("heart") || suit.equals("3")) {
            suit = "heart";
        } else if (suit.equalsIgnoreCase("club") || suit.equals("1")) {
            suit = "Club";
        }

        this.value = value;
        this.suit = suit;
    }

    public Card(int value, int suit) {
        switch (value) {
            case 11:
                this.value = "J";
                break;
            case 12:
                this.value = "Q";
                break;
            case 13:
                this.value = "K";
                break;
            case 1:
                this.value = "A";
                break;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                this.value = Integer.toString(value);
                break;
        }
        switch (suit) {
            case 4:
                this.suit = "Spreads";
                break;
            case 2:
                this.suit = "Diamond";
                break;
            case 3:
                this.suit = "Heart";
                break;
            case 1:
                this.suit = "Club";
                break;
        }
    }

    public String getValue() {
        return value;
    }

    public String getSuit() {
        return suit;
    }

    public int getCardCost() {
        int cost;
        int suit;

        switch (this.value) {
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "10":
                cost = Integer.parseInt(this.value) - 1;
                break;
            case "J":
                cost = 10;
                break;
            case "Q":
                cost = 11;
                break;
            case "K":
                cost = 12;
                break;
            case "A":
                cost = 13;
                break;
            default:
                cost = 0;
        }

        switch (this.suit) {
            case "Spreads":
                suit = 4;
                break;
            case "Diamond":
                suit = 2;
                break;
            case "Heart":
                suit = 3;
                break;
            case "Club":
                suit = 1;
                break;
            default:
                suit = 0;
                break;
        }
        return cost*4-(4-suit);
    }

    @Override
    public String toString() {
        return "Card : " + value + ", " + suit;
    }
}
