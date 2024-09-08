public with sharing class accountManageImperativeCall {
    
    @AuraEnabled
    public static List<Account> getAccount(Integer numberOfRecords){
        
        return [SELECT Id, Name, Phone FROM Account LIMIT: numberOfRecords];
    }
}