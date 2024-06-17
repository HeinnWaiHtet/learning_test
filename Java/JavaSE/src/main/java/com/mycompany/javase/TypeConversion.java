/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.javase;

/**
 *
 * @author ayechanmay
 */
public class TypeConversion {
    public static void main(String[] args) {
        char ch = 'A';
        int num = ch;
        
        System.out.println(num); // 65
        short s = num; // cannot assign
        
        // Type Casting
        byte b = (byte)num;
        
    }
}
