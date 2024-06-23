/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package ga7.aa2.ev01;

/**
 *
 * @author bonni
 */
import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;
public class GA7AA2EV01 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        String usuario="root";
        String password="";
        String url="jdbc:mysql://localhost:3306/ufollow";
        Connection conexion;
        Statement statement;
        ResultSet rs;
        
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(GA7AA2EV01.class.getName()).log(Level.SEVERE, null, ex);
        }
        
       
        try {
            conexion=DriverManager.getConnection(url,usuario,password);
            statement=conexion.createStatement();
            rs=statement.executeQuery("SELECT * FROM `users`");
            rs.next();
            do{
                System.out.println(rs.getInt("id") + ":" + rs.getString("first_name"));
            }while (rs.next());
            
            //Insert
            statement.executeUpdate("INSERT INTO `users`(`dni_number`, `cellphone`, `first_name`, `last_name`, `role`, `birth_date`) VALUES ('12345678','3014151782','Leandro','Panesso','admin','2000-04-11')");
            System.out.println("");
            rs=statement.executeQuery("SELECT * FROM `users`");
            rs.next();
            do{
                System.out.println(rs.getInt("id") + ":" + rs.getString("first_name") + ":" + rs.getString("dni_number"));
            }while (rs.next());
            
           //Update
           statement.executeUpdate("UPDATE `users` SET `dni_number`='1007232074',`first_name`='Leonardo' WHERE id=2");
            System.out.println("");
            rs=statement.executeQuery("SELECT * FROM `users`");
            rs.next();
            do{
                System.out.println(rs.getInt("id") + ":" + rs.getString("first_name") + ":" + rs.getString("dni_number"));
            }while (rs.next());
            
           //Delete
           statement.executeUpdate("DELETE FROM `users` WHERE id=8");
            System.out.println("");
            rs=statement.executeQuery("SELECT * FROM `users`");
            rs.next();
            do{
                System.out.println(rs.getInt("id") + ":" + rs.getString("first_name") + ":" + rs.getString("dni_number"));
            }while (rs.next());
            
        } catch (SQLException ex) {
            Logger.getLogger(GA7AA2EV01.class.getName()).log(Level.SEVERE, null, ex);
        }
       
    }
    
}