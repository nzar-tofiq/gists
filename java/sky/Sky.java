import java.util.ArrayList;
/**
 * random places experiment
 * /*s printed at random places on the output window
 * spread over, x characters wide, y lines
 * @author  Nzar Tofiq
 * @version 28-12-2013
 */
public class Sky
{
    private Star star1;
    private ArrayList<Star> starLineList;
    public Sky(int x, int y){
        for(int i = 0; i<y;i++){
            createStarLine(x);
        }
    }
    
    public void createStarLine(int x){
        star1 = new Star(x);
        for(int i = 0;i<star1.starListSize();i++){
            System.out.print(star1.getStar(i));
        }
        System.out.println();
    }
}
