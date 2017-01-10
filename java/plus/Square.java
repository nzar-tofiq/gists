/**
 * java experiment creating a square of +
 * create a square based on a given number
 * or create a square of 5 wide 5 high
 */
class Square
{
    public Square(){
        createSquare(5);
    }
    
    public Square(int size){
        createSquare(size);
    }
    
    public void createSquare(int size){
        for(int j = 0;j<size;j++){
            for(int i = 0;i<size;i++){
                Plus plus = new Plus();
                System.out.print(plus.createPlus());
            }
            System.out.println();
        }
    }
    
    public void createSquare5(){
        createSquare(5);
    }
}