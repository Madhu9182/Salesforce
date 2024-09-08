public class helloWorld{
    private String greetings = 'Hello World';
    
    public String publicGreeting = 'My public variable value';
    
    public void printGreetings(){
        system.debug(greetings);
    }
    
    //get an error about access modifiers
    /*
    global void printPublicGreeting(){
        system.debug(publicGreeting);
    }
    */
    
    public void printMessage(String msg){
        system.debug(msg);
        }
}