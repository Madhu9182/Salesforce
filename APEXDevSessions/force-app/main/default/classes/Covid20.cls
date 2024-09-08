public class Covid20{
    
    public Integer recoveredInArea = 0;  // Global variable
    public static Integer recoveredInCountry = 0;
    
    //contructor example
    //blank constructor
    public Covid20(){
        system.debug('constructor being called');
    }
    //parameterized constructor to set class variables value
    public Covid20(Integer recoveredInArea){
        this();   //calling default or blank constructor
        this.recoveredInArea = recoveredInArea; // Initilizing local variable value to global variable
        recoveredInCountry = recoveredInArea;
    }
    
    public static void printTreated(){
        system.debug(recoveredInCountry);
    }
}