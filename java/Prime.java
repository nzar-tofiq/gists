/**
 * Prime numbers experiment
 * checks if the given number is a prime number
 * 
 * @author Nzar Tofiq 
 * @version 1
 */
public class Prime
{
    // instance variables
    private int x;

    /**
     * find the prime numbers between two numbers
     */
    public Prime(int min, int max)
    {
        System.out.print("{");
        //loop through all the numbers from min to max
        for(int i = min ; i<max+1; i++){
            if(i %100 == 0){
                System.out.println();
            }
            //check each number to see if it's a Prime number
            if(isPrime(i)){
                System.out.print(", "+i);
            }
        }
        System.out.println("}");
    }
    
     /**
     * find the prime numbers from 0 to x
     */
    public Prime(int x)
    {
        System.out.print("{");
        //loop through all the numbers from min to max
        for(int i = 0 ; i<x+1; i++){
            if(i %100 == 0){
                System.out.println();
            }
            //check each number to see if it's a Prime number
            if(isPrime(i)){
                System.out.print(", "+i);
            }
        }
        System.out.println("}");
    }
    
    /**
     * find all the prime numbers from 0 to 1000
     */
    public Prime(){
        System.out.println("All the Prime numbers from 0 to 1000");
        System.out.print("{ 1, 2, 3, 5, 7");
        //loop through all the numbers from min to max
        for(int i = 0 ; i<1000; i++){
            if(i %100 == 0){
                System.out.println();
            }
            //check each number to see if it's a Prime number
            if(i<2){
            }else if(isPrime(i)){
                System.out.print(i +", ");
            }
        }
        System.out.println("}");
    }
    
    /*if a number can be divided by 9 then it can also be divided by 3
     * and its the same case for 4, 6 and 8
     * 
     */
    public boolean isPrime(int number){
        //if the numbers mod 2 is 0 then it can be divided by 2 with no remainder
        if(number %2 == 0 || number %3 == 0|| number %5 == 0|| number %7 == 0){
            //return some int, 0 in this case has been put here because the accessor method requires 
            //an int to be returned from this method
            return false;
        }else{
            return true;
        }
    }
}
