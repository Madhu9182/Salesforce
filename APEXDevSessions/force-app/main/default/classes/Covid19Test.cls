@isTest
public class Covid19Test {
	
    @isTest
    public static void treatPatientTest(){
        //create instance of that class
        Covid19 jaipur = new Covid19(10);
        //check if the count is 10 or not
        Integer treated = jaipur.getTreated();
        System.assertEquals(10,treated,'Treated count does not match');
        
        Covid19 hyd = new Covid19(112);
        treated = hyd.getTreated();
        System.assertEquals(112, treated, 'Treated count does not match');
        System.assert(Covid19.recoveredInCountry == 122 , 'Treated count does not match');
            
        hyd.treatPatient();//checking for increment
        treated = hyd.getTreated();
        System.assertEquals(123, Covid19.recoveredInCountry, 'Treated count does not match');
        System.assert(treated == 113, 'Treated count does not match');
    }
    
    @isTest
    public static void treatPatientTestNegative(){
        //create instance of the class 
        Covid19 x = new Covid19(-10);
        System.assertEquals(0, x.getTreated(), 'Treated count does not match');
    }
}