@isTest
public class FitnessTest {
	
    @isTest
    public static void calculateBMITest1(){
        Decimal weight = 60;
        Decimal height = 1.2;
        Decimal result = Fitness.calculateBMI(height, weight);
        result = result.setScale(2); //This setScale() method sets the decimal values to 2
        System.assertEquals(41.67, result, 'BMI Should be 41.67KG if weight 60KG and height 1.2 meters');
    }
    
    @isTest
    public static void caculcateBMITest2(){
        Decimal weight = 0;
        Decimal height = 1.2;
        Decimal result = Fitness.calculateBMI(height, weight);
        System.assertEquals(0, result,'BMI Should be 0KG if weight 0KG and height 1.2 meters');
    }
    @isTest
    public static void calculateBMITest3(){
        Decimal weight = 60;
        Decimal height = 0;
        Decimal result = Fitness.calculateBMI(height, weight);
        System.assertEquals(-1, result, 'invalid input');
    }
    
    @isTest
    public static void calculateBMITest4(){
        Decimal weight = -60;
        Decimal height = 1.2;
        Decimal result = Fitness.calculateBMI(height, weight);
        System.assertEquals(-1, result, 'invalid input');
    }
    
    @isTest
    public static void calculateBMITest5(){
        Decimal weight = 60;
        Decimal height = -1.2;
        Decimal result = Fitness.calculateBMI(height, weight);
        System.assertEquals(-1, result, 'invalid input');
    }
    
    @isTest
    public static void calculatePaceTest1(){
        Decimal distance = 10;
        Decimal minutes = 60;
        Decimal result = Fitness.calculatePace(distance, minutes);  
        System.assertEquals(10, result, 'Pace should 10km/hr for 10km in 60 min');
    }
    
    @isTest
    public static void calculatePaceTest2(){
        Decimal distance = 0;
        Decimal minutes = 60;
        Decimal result = Fitness.calculatePace(distance, minutes);
        System.assertEquals(-1, result, 'invalid input');
    }
    
    @isTest
    public static void calculatePaceTest3(){
        Decimal distance = 10;
        Decimal minutes = 0;
        Decimal result = Fitness.calculatePace(distance, minutes);
        System.assertEquals(-1, result, 'invalid input');
    }
    
    @isTest
    public static void calculatePaceTest4(){
        Decimal distance = -10;
        Decimal minutes = 60;
        Decimal result = Fitness.calculatePace(distance, minutes);
        System.assertEquals(-1, result, 'invalid input');
    }
    
    @isTest
    public static void calculatePaceTest5(){
        Decimal distance = 10;
        Decimal minutes = -60;
        Decimal result = Fitness.calculatePace(distance, minutes);
        System.assertEquals(-1, result, 'invalid input');
    }
}