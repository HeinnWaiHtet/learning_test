/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.javase;

/**
 *
 * @author ayechanmay
 */
public class Scope {
    public static void main(String[] args) {
        int num = 10;
        {
            int num1 = 20;
            System.out.println(num1);
            System.out.println(num);
        }
        
        int num1 = 30;
        System.out.println(num1);
        
        // System.out.println(num1); Scope cannot access
        System.out.println(num);
    }
}
