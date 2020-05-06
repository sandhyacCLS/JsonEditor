Global class JSONController {
    public List<String> listOfObjects {get;set;}
    public static List<String> listOfFileds {get;set;}
    public Boolean displayPopup {get;set;}
     public Boolean flag {get;set;}
     public ApexPages.StandardController stdCntrlr {get; set;} 
     public static string highlight{get;set;}
    public static List<String> additionalKeywords {get;set;}
    
 public static KeyWord__c high12{get;set;}
   
    public JSONController(){
       listOfObjects= new List <String>();
        
       for ( Schema.SObjectType o : Schema.getGlobalDescribe().values() ){
           Schema.DescribeSObjectResult objResult = o.getDescribe();
           listOfObjects.add(((String)objResult.getName()).toLowerCase());
       }
    }
   
 public void closePopup() {        
        displayPopup = false; 
     System.debug('inside close');
       
    }     
    public void showPopup() {        
        displayPopup = true;  
        flag=true;
        System.debug('displayPopup is set to true');
      
    }
    
    public void showPopup1() {        
        displayPopup = true;  
        flag=false;
      
    }
    public JSONController(ApexPages.StandardController controller){
     stdCntrlr=controller;
      }
   
    webService static List<String> sample(String objectName){
        listOfFileds= new List <String>();
       
        listOfFileds.clear();
        Map<String, Schema.SObjectType> schemaMap = Schema.getGlobalDescribe();
        Schema.SObjectType ObjSchema = schemaMap.get(objectName);
        for(Schema.SobjectField strFld : ObjSchema.getDescribe().fields.getMap().Values())
           {
                if(strFld.getDescribe().getType() == Schema.DisplayType.REFERENCE)
                {
                  listOfFileds.add((String.valueOf(strFld.getDescribe().getReferenceTo().get(0))).toLowerCase());
                }
        }
        Map<String, Schema.SObjectField> fieldMap = ObjSchema.getDescribe().fields.getMap();
        for (String fieldName: fieldMap.keySet()){
                    listOfFileds.add(fieldName.toLowerCase());
        }
        return listOfFileds;
    }
    webService static List<String> getKeyword (String editorName){
   
        List<String> val = new List<String>();
        additionalKeywords = new List<String>();
        List<Grammar__c> high1=new List<Grammar__c>([SELECT keywords__c FROM Grammar__c where name=:editorName]);
        for(Grammar__c ho:high1)
        {
            highlight=(String)ho.get('keywords__c');
        }
        additionalKeywords = highlight.split(',');
        val.addAll(additionalKeywords);
        return val;
    }
    
     webService static String getSnippet (String editorName){
   
       String val ;
        List<Grammar__c> high1=new List<Grammar__c>([SELECT Snippet__c FROM Grammar__c where name=:editorName]);
        for(Grammar__c ho:high1)
        {
            highlight=(String)ho.get('Snippet__c');
        }
       	val=highlight;
        System.debug('snippet'+val);
        return val;
    }
}