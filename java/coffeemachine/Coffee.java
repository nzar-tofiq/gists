public class Coffee
{
    // instance variables - replace the example below with your own
    private double price;
    private String name;

    /**
     * Constructor for objects of class Cofee
     */
    public Coffee(String name,double price)
    {
        this.name =name;
        this.price =price;
    }
    public String getName(){
        return name;
    }
    
    public double getPrice(){
        return price;
    }
    
    public void setPrice(double newPrice){
        price = newPrice;
    }
    
    public void setName(String newName){
        name = newName;
    }

}
