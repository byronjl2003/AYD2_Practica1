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
public class Twittear {
    
    WebDriver driver;
    public Twittear(WebDriver ldriver){
        this.driver = ldriver;
        
    }
    @FindBy(name="username")WebElement username;
    @FindBy(name="contenido")WebElement pass;
    //@FindBy(xpath="//input[@value='Login']")WebElement btn;
    @FindBy(name="btnpublicar")WebElement btn;
    
    
    public void Twitear(String user,String password){
    
        username.sendKeys(user);
        pass.sendKeys(password);
        btn.click();
    }
    
}
