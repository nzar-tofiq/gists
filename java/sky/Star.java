import java.util.ArrayList;
public class Star
{
    private String starString;
    private ArrayList<String> starList = new ArrayList<String>();
   
    public Star(int x){
        createStarArray(x);
    }
    
    public void createStarArray(int x){
        int i = 0;
        while(i < x){
           if(Math.random()*30 < 1)
                starList.add("*");
           else
                starList.add(" ");
           i++;
        }
    }
    
    public String getStar(int index){
        return starList.get(index);
    }
    
    public int starListSize(){
        return starList.size();
    }
    
    public void display(String s){
        System.out.println(s);
    }
}
