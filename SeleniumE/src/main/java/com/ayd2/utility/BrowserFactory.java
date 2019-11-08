/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ayd2.utility;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

/**
 *
 * @author bj
 */
public class BrowserFactory {
    public static WebDriver startApplication(WebDriver driver,String name){
        /*
        if(name.equals(("Chrome"))){
            /usr/chromedriver
            /home/bj/Escritorio/chromedriver_linux64/chromedriver
        }
        */
         System.setProperty("webdriver.chrome.driver","/usr/chromedriver");
         //
        ChromeOptions options = new ChromeOptions();
        options.addArguments("headless");
        options.addArguments("window-size=1200x600");   
        driver = new ChromeDriver(options);
        //driver = new ChromeDriver();
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        return driver;
    }
    
    public static void quitBrowser(WebDriver d){
        
        d.quit();
    }
    
}
