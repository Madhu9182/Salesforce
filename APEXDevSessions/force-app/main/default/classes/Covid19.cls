//static key word example 

public class Covid19{

    public Integer recoveredInArea=0;
    //static variable
    public static Integer recoveredInCountry=0;
    
    public Covid19(Integer recoveredInArea){
        if(recoveredInArea < 0){
            this.recoveredInArea=0;
        }else{
            this.recoveredInArea = recoveredInArea;
            recoveredInCountry = recoveredInCountry + recoveredInArea;
            //recoveredInCountry += recoveredInArea;
        }
    }
    
    public void treatPatient(){
        recoveredInArea++;
        recoveredInCountry++;
    }
    
    public Integer getTreated(){
        return recoveredInArea;
    }
    //static method
   /* public static void printTreated(){
        system.debug('recovered in country: ' + recoveredInCountry);
    }
	*/
}