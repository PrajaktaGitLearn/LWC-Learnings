public with sharing class FiftyCom_Class_getAccountList {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        
        return [SELECT Id, Name, Type, Industry from Account LIMIT 5];

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> filteredAccountList(String type) {
        
        return [SELECT Id, Name, Type, Industry from Account Where Type =: type LIMIT 5];

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> searchAccountList(String searchkey) {
        
        String searchText = '%'+searchkey+'%';
        return [SELECT Id, Name, Type, Industry from Account Where Name LIKE : searchText LIMIT 5];

    }
}