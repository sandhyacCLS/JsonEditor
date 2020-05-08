function getSnippetsPortal() {
    var snippetText = "snippet BorrowerDetailView \n \"BorrowerDetailView\"\:\{ \n\t\t\"category\": \"${1:component}\",\n\t\t\"type\": \"${2:detail-view}\",\n\t\t\${3:componentActions\}\n\t}\n\
    snippet componentActions \n\t \"componentActions\"\:\{\n\t\"name\":\"${1}\",\n\t\"actionType\":\"${2}\",\n\t\${3:property},\n\t\"confirmation\":\"${4}\",\n\t\${5:popup}\n\t}\n\
    snippet property \n\t \"property\"\:\{\n\t\"uploadType\":\"${1}\",\n\t\"staticResourceName\":\"${2}\",\n\t\"uploadMultiple\":\"${3}\",\n\t\"accept\":\"${4}\"\n\t}\n\
    snippet messages \n\t \"messages\": {\n\t\"showSavingAnimation\":\"${1}\",\n\t\"showSavingSuccess\":\"${2}\",\n\t\"hideSavingError\":${3}\",\n\t\"showSubmitAnimation\":\"${4}\",\n\t\"showSubmitSuccess\":\"${5}\",\n\t\"hideSubmitError\":\"${6}\"\n\t\"savingAnimationText\":\"${7}\",\n\t\"saveSuccessText\":\"${8}\",\n\t\"saveFailureText\":\"${9}\",\n\t\"submitAnimationText\":\"${10}\",\n\t\"submitSuccessText\":\"${11}\",\n\t\"submitFailureText\":\"${12}\",\n\t\"submitExpirationText\":\"${13}\",\n\t\"uploadFailureText\":\"${14}\",\n\t\"uploadFileTooLargeError\":\"${15}\",\n\t\"uploadInvalidFileType\":\"${16}\"\n\t}\n\
    snippet componentActions_save \n\t \"componentActions\"\:\{\n\t\"name\":\"${1}\",\n\t\"actionType\":\"${2:save}\",\n\t\"property\":\"${3}\",\n\t\"confirmation\":\"${4}\",\n\t}\n\
    snippet confirmation \n\t \"confirmation\"\:\{\n\t\"type\":\"${1:prompt}\",\n\t\"title\": \"${2:Are you sure?}\",\n\t\"content\": \"<p>No providing financial information will dramatically decrease the possiblity that you will be offered a loan.</p><p>Are you sure that you want to skip the financial informaiton step?</p>\",\n\t\"showConfirmButtons\": ${3:true},\n\t\"confirmText\": \"${4:Yes}\",\n\t\"cancelText\": \"${5:No}\"\n\t}\n\
    snippet popup \n\t\"popup\": {\n\t\
    \"direction\": \"${1:bottom}\",\n\t\
    \"anchor\": \"${2:cursor}\",\n\t\
    \"width\": ${3:200},\n\t\
    \"height\": ${4:100},\n\t\
    \"margin\": ${5:50},\n\t\
    \"borderColor\": \"${6:#48ce94}\",\n\t\
    \"backgroundColor\": \"${7:#ffffff}\",\n\t\
    \"content\": \"${8:Lorem ipsum dolor sit amet consectetur.}\"\n\t\
    }\n\
    snippet appearance \n\t \"appearance\": {\n\t\
    \"render\":${1},\n\t\
    \"enable\":${2},\n\t\
    \"label\":\"${3}\",\n\t\
    \"style\":\"${4}\",\n\t\
    \"tooltip\":\"${5}\",\n\t\
    \"position\":\"${6}\",\n\t\
    \"belongTo\":[\"${7}\"]\n\t\
    }\n\
    snippet uploadActionArguments \n\t \"uploadActionArguments\": {\n\t\
    \t\"attachmentParentId\": \"${1}\"\n\t\
    }\n\
    ";
    return snippetText;   
    }
        
            
    function getKeywords(){
        
     var keyList=["name",  "actionType",  "property",  "appearance",  "confirmaton",  "popup",  "context",  "automatic",  "remoteActionClassname",  "remoteActionPrefix",  "remoteActionAPIname",  "remoteActionArguments",  "pollingPeriod",  "pollingMexTries",  "uploadActionArguments",  "successHandler",  "failureHandler",  "pendingHandler",  "handler",  "validation",  "disclosureEnable",  "disclosureNames",  "messages",  "ariaLabel",   "direction",  "anchor",  "width",  "height",  "margin",  "borderColor",  "backgroundColor",  "content",  "uploadType",  "staticResourceName",  "uploadMultiple",  "accept" ,  "appearance",  "render",  "enable",  "label",  "style",  "tooltip",  "position",  "belongTo",  "showSavingAnimation",  "showSavingSuccess",  "hideSavingError",  "showSubmitAnimation",  "showSubmitSuccess",  "hideSubmitError",  "savingAnimationText",  "saveSuccessText",  "saveFailureText",  "submitAnimationText",  "submitSuccessText",  "submitFailureText",  "submitExpirationText",  "uploadFailureText","uploadFileTooLargeError","uploadInvalidFileType"];
     //System.debug(keyList.toString());
        return keyList;   
    }
    function getSnippetsIntegration(){
        var snippetText ="snippet objectAPI \n\t \"objectAPI\":\"${1}\", \n\t\
        \"objectAlias\":\"${2}\",\n\t\
        \"fields\": [${3}] \n\
        snippet field \n\t  \{\"externalField\":\"${1}\",\n\t\
        \"fieldAPI\" :\"${2}\" \n\t\
        }\n\
        snippet StorageConfiguration \n\t \"StorageConfiguration\": {\n\t\
        \"storeInDB\": \"${1:True}\",\n\t\
        \"publishAsJson\": \"${2:True}\"\n\t\
        }\n\
        snippet DMLOperations \n\t \"DMLOperations\": [{\n\t\
        \"dmlOperation\":\"${1:Insert}\",\n\t\
        \"objectMappings\":[{${2:objectAPI}}]\n\t\
        \}]\n\
        ";
        return snippetText;;
    }