public class Fitness {
    public static Decimal calculateBMI(Decimal height, Decimal weight){
        if(height <= 0 || weight < 0){
            return -1;  //for test cases purpose
        }else{
            Decimal BMI = weight/(height*height);
                return BMI;
        }
    }
    
    public static Decimal calculatePace(Decimal distance, Decimal minutes){
        if(distance <= 0 || minutes <= 0){
            return -1;
        }else{
            Decimal hr = minutes/60;
            Decimal pace = distance/hr;
            return pace;
        }
    }
}