//Example for initialization block
public class Cars{
    
    public Integer numberOfCars=0;
    public Integer costOfCars=0;
    
    //initialization block
    {
        numberOfCars=20;
        costOfCars=20;
        system.debug('initialization block');
    }
    
    static{
        system.debug('static Initialization block');
    }
    //blank constructor
    public Cars(){
        system.debug('blank constructor');
    }
    
    //parameterized constructor
    public Cars(Integer numberOfCars){
        this();
        system.debug('parameterized constructor');
    }
    
    //method
    public void cars(){
        system.debug('method');
    }
    
}