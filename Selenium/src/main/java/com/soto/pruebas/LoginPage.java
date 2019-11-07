/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soto.pruebas;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

/**
 *
 * @author bj
 */
public class LoginPage {
    
    WebDriver driver;
    public LoginPage(WebDriver ldriver){
        this.driver = ldriver;
        
    }
    @FindBy(name="username")WebElement username;
    @FindBy(name="password")WebElement pass;
    //@FindBy(xpath="//input[@value='Login']")WebElement btn;
    @FindBy(name="btn")WebElement btn;
    
    
    public void loginTo(String user,String password){
    
        username.sendKeys(user);
        pass.sendKeys(password);
        btn.click();
    }
    
}
