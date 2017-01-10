/**
 * experiment to print a triangle like shape with *s
 * in many ways
 * @Author Nzar Tofiq
 * @version 03-01-2014
 */
class Triangle
{
    public Triangle(){
    }
    
    public Triangle(int size){
        createTriangleSize(size);
    }
    
    public void createTriangle(){
        for(int i = 0;i<5;i++){
            for(int j = 0;j<i;j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
    
    public void createTriangleSize(int size){
        for(int i = 0;i<size;i++){
            for(int j = 0;j<i;j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
    
    public void createUpsideDownTriangle(){
        for(int i = 0;i<5;i++){
            int j = 5-i;
            while(j>0){
                System.out.print("*");
                j--;
            }
            System.out.println();
        }
    }
    
    public void createUpsideDownTriangleSize(int size){
        for(int i = 0;i<size;i++){
            int j = size-i;
            while(j>0){
                System.out.print("*");
                j--;
            }
            System.out.println();
        }
    }
    
}