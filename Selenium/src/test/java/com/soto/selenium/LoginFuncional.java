package com.soto.selenium;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import com.soto.pruebas.LoginPage;
import com.soto.pruebas.Twittear;
import com.soto.utility.BrowserFactory;

import junit.framework.Assert;

public class LoginFuncional {


    WebDriver driver;

	@Test
	public void test() {
		String URL="http://3.133.85.32:4000/login";
		  	driver = BrowserFactory.startApplication(driver, "Chrome");
	        driver.get(URL);
		  	//Procedimiento para ingresar con contraseñas correctas
	        System.out.println("Ingresando a"+URL);
		  	String title = driver.getTitle();
	        System.out.println("Situados en la vista: "+title);	        
	        LoginPage page = PageFactory.initElements(driver, LoginPage.class);
	        System.out.println("Ingresando usuario y contraseña");
	        page.loginTo("brandonsoto3", "admin");
	        String correcto = driver.getTitle();
	        System.out.println("Situados en la vista por credenciales correctas: "+correcto);
	        //driver.findElement(By.linkText("Principal")).click();
	        System.out.println("Publicar tweet");
	        //Procedimiento para crear un tweet
	        
	        Twittear tweet = PageFactory.initElements(driver, Twittear.class);
	        
	        for(int i=0;i<10;i++) {
	        tweet.Twitear("brandonsoto4", "Tweet"+i+" desde selenium , realizando las pruebas unitarias");
	        System.out.println("Ingresando nuevo tweet");
	        }
	        
	        
	        driver.get(URL);
	        System.out.println("Regresando a Login");
	        String titlelogin = driver.getTitle();
	        System.out.println("Situados en la vista: "+titlelogin);	        
	        
	      //Procedimiento para ingresar con contraseñas incorrectas
	        page.loginTo("admin", "admin");
	        System.out.println("Ingresando credenciales incorrectas");
	        String incorrecto = driver.getTitle();
	        System.out.println("Situados en la vista por credenciales incorrectas: "+incorrecto);
	        
	        
	        
	        BrowserFactory.quitBrowser(driver);
		 
	}

}
