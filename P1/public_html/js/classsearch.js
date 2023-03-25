const urlPrefix= "http://34.74.227.117/";


function queryObjectToString(query) {
    // get the properties in the query object
    // for {message:"Hi I am sending an AJAX request", name: "Sahar"};
    // properties will be ["message", "name" ]
    let properties = Object.keys(query);
    // create a string int the format "propert=value" for each property in query
    // arrOfQuesryStrings will be ["message=Hi I am sending an AJAX request", "name=Sahar"]
    let arrOfQuesryStrings = properties.map(prop => prop+"="+query[prop]);
    //combine the strings in arrOfQuesryStrings wuth &
    // return value will be "message=Hi I am sending an AJAX request&name=Sahar"
    return(arrOfQuesryStrings.join('&'));
 }

var button1 = document.getElementById("button1");

button1.addEventListener("click",function() {
    
    let    qObj = {reqUser: document.getElementById("text").value};
    console.log(qObj);


    let Ajax = new XMLHttpRequest();
    Ajax.onerror = function (){
        alert("error wrong login");
    }
    Ajax.onload = function () {

        console.log("HEY");
        console.log(this.responseText);
        responseObj = JSON.parse(this.responseText);
        console.log(responseObj);
	document.getElementById("textarea1").innerHTML="CLASS NAME: "+ responseObj.Class_name +"<br />"+  "Building Name: " +responseObj.B_name +"<br />" +  "Room No: " +responseObj.room_num +"<br />" + "Class Timming" + responseObj.Time +"<br />" + "Days: " + responseObj.Days +"<br />" + "Professor Name : " + responseObj.prof_name  ;
        
    
    
            //loginres = JSON.parse(this.responseText);
            //console.log(login);
    
        }
        //var l = document.getElementById("username").value;
        //var p = document.getElementById("password").value;
        Ajax.open("GET","classearch?"+queryObjectToString(qObj));
        Ajax.send();
   
        

});