/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.funwithcode.chapter3;

/**
 *
 * @author ayechanmay
 */
public class NumberDemo {
    public static void main(String[] args) {
        byte data = -128;
        byte another = 127;
        another++;
        data--;
        System.out.println(data);
        System.out.println(another);
        
        float f = 3.21f;
        float f1 = 23.23F;
        double pi = 3.14;
        
        char ch = 65;
        System.out.println(ch);
        
        boolean found = true;
        
        int hex = 0xFF;
        System.out.println(hex);
        
        int binary = 0b101;
        System.out.println(binary);
        
        int oct = 0105;
        System.out.println(oct);
        
        int bigNum = 123_456_789;
        System.out.println(bigNum);
        
    }
}
