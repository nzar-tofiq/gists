import java.util.Scanner;
/**
 * coffee machine experiment in this version coffee can be bought and change given back
 * 
 * @author Nzar Tofiq 
 * @version: 07-06-2014
 */
public class CoffeeMachine
{
    private Coffee capacino = new Coffee("capacino", 1.60); 
    private Coffee americano = new Coffee("americano", 1.20); 
    private Coffee latte = new Coffee("latte",2.00); 
    private Coffee cortado = new Coffee("cortado",1.80); 
    private Coffee esprosso = new Coffee("esprosso", 1.40);
    private Coffee current;
    private int type;
    
    public CoffeeMachine(){
        printPrices();
        buyCoffee();
        insertMoney();
    }
    
    public String cup(){
       return "Getting a cup";
    }
    
    public void buyCoffee()
    {
        System.out.println("Select a coffee by typing a number (1 to 5)");
        Scanner input = new Scanner(System.in);
        int selected = input.nextInt();
        if(selected > 0 && selected < 6){
            System.out.println(cup());
            switch(selected){
               case 1: System.out.println("Type of coffee: \t"+capacino.getName()+"\n Price: \t\t£"+capacino.getPrice());
               current = capacino;
               break;
               case 2: System.out.println("Type of coffee: \t"+americano.getName()+"\n Price: \t\t£"+americano.getPrice());
               current = americano;
               break;
               case 3: System.out.println("Type of coffee: \t"+latte.getName()+"\n Price: \t\t£"+latte.getPrice());
               current = latte;
               break;
               case 4: System.out.println("Type of coffee: \t"+cortado.getName()+"\n Price: \t\t£"+cortado.getPrice());
               current = cortado;
               break;
               case 5: System.out.println("Type of coffee: \t"+esprosso.getName()+"\n Price: \t\t£"+esprosso.getPrice());
               current = esprosso;
               break;
               default : System.out.println("We do not have this type of coffee");
               break;
            }
        }else{
            System.out.println("Type a Number (1 to 5)");
            buyCoffee();
        }
    }
    
    public void insertMoney(){
        System.out.println("Insert money");
        Scanner input = new Scanner(System.in);
        double inserted = input.nextDouble();
        //current is the coffee that has been bought currently
        double change = inserted - current.getPrice();//current.getPrice means get the price for the current coffee
        if(inserted > 0 ){
                if(change == 0){
                    System.out.println("Don't wait for change cos u aint getting any");
                }else{
                System.out.println("Your change: £" + change);
            }
        }else{
            System.out.println("Please insert the correct amount or more");
            insertMoney();
        }
    }
    
    public void printPrices(){
       System.out.println("These are the types of coffee this machine does");
       for(int i=1;i<6;i++){
            switch(i){
               case 1: System.out.println("Number to press\t"+i+"\nType of coffee:\t"+capacino.getName()+"\nPrice:\t£"+capacino.getPrice()+"\n");
               break;
               case 2: System.out.println("Number to press\t"+i+"\nType of coffee:\t"+americano.getName()+"\nPrice:\t£"+americano.getPrice()+"\n");
               break;
               case 3: System.out.println("Number to press\t"+i+"\nType of coffee:\t"+latte.getName()+"\nPrice:\t£"+latte.getPrice()+"\n");
               break;
               case 4: System.out.println("Number to press\t"+i+"\nType of coffee:\t"+cortado.getName()+"\nPrice:\t£"+cortado.getPrice()+"\n");
               break;
               case 5: System.out.println("Number to press\t"+i+"\nType of coffee:\t"+esprosso.getName()+"\nPrice:\t£"+esprosso.getPrice()+"\n");
               break;
            }
       }
    }

}