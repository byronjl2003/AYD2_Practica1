package resources;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import com.ayd2.pages.LoginPage;
import com.ayd2.utility.BrowserFactory;
import com.ayd2.pages.Twittear;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.Test;

/**
 *
 * @author bj
 */
public class TestCase {
    
    WebDriver driver;
    @Test
    public void loginApp(){
        
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
        tweet.Twitear("brandonsoto4", "Tweet"+i+" desde selenium pc , realizando las pruebas unitarias");
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
