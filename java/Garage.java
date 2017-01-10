import java.util.ArrayList;
/**
 * simple Arraylist test class
 * adding new objects to an array list
 * and returning or printing them
 * @author Nzar Tofiq 
 * @version 1
 */
public class Garage
{
    // instance variables
    private Car car;
    private ArrayList<Car> cars;

    public Garage(){
        //ArrayList takes objects of type car
        cars = new ArrayList<Car>();
    }
    
    public void makeXAmountofCars(int x){
        for(int i=0;i<x;i++){
               car = new Car();
               //add the new car to the arraylist
               cars.add(car);
               System.out.println(i+ "\t" +car);
        }
    }
    
    public void printArrayList(){
        for (int i = 0;i<cars.size();i++){
            //get an object from index i
            car = cars.get(i);
            System.out.println("\n"+i+"\t"+car);
        }
    }
}
public class Car{}
