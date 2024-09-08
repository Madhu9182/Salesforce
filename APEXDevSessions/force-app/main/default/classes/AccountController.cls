public class AccountController {
	//insert list of Accounts
    public static List<Account> insertAccounts(List<Account> accountToInsert){
        insert accountToInsert;
        return accountToInsert;
    }
    
    //insert an account record
    public static Account insertAccount(Account accountToInsert){
        insert accountToInsert;
        return accountToInsert;
    }
    
    //Get all Accounts
    public static List<Account> getAllAccounts(){
        //Retreive all accounts & assign it to list collection
        List<Account> accounts = [SELECT Name, Phone FROM Account];
        return accounts;
    }
    
    //Print all Accounts
    public static void printAllAccounts(){
        //Retreive all accounts using getAllAccounts method
        List<Account> accounts = getAllAccounts();
        //iterate over all accounts and print account infromation
        for(Account acc : accounts){
            System.debug('Name: '+acc.Name+', '+'Phone: '+acc.phone);
        }
    }
    
    //Size of Accounts
    public static Integer getAccountSize(){
        //Retreive all accounts using getAllAccounts method
        List<Account> acc = getAllAccounts();
        return acc.size();
    }

}