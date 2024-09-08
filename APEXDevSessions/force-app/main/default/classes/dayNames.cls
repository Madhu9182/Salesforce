public class dayNames{
    
    
    public String getDay(Integer dayNumber){
        String dayString;
        
        Switch on dayNumber{
            when 0 {
                dayString = 'Sunday';
                }
            when 1 {
                dayString = 'Monday';
               }
            when 2 {
                dayString = 'Tuesday';
               }
            when 3 {
                dayString = 'Wednesday';
               }
            when 4 {
                dayString = 'Thursday';
               }
            when 5 {
                dayString = 'Friday';
               }
            when 6 {
                dayString = 'Saturday';
               }
            when else {
                dayString = 'Number is invalid';
               }   
        }
    return dayString;
  }
  
  //polymorphism having multiple methods with same name with different parameters
  public String getDay(String dayAbbrevation){
      String dayString;
      
      Switch on dayAbbrevation{
          when 'Sun'{
              dayString = 'Sunday';
          }
          when 'Mon'{
              dayString = 'Monday';
          }
          when 'Tue'{
              dayString = 'Tuesday';
          }
          when 'Wed'{
              dayString = 'Wednesday';
          }
          when 'Thur'{
              dayString = 'Thursday';
          }
          when 'Fri'{
              dayString = 'Friday';
          }
          when 'Sat'{
              dayString = 'Saturday';
          }
          when else {
              dayString = 'invalid Abbrevation';
          }
      }
      return dayString;
  }
}