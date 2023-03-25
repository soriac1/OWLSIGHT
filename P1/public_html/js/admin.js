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



var admin = document.getElementById("adminpage"); 
admin.addEventListener("click",function() {
    let Ajax = new XMLHttpRequest();
    Ajax.onerror = function (){
        alert("error wrong login");
    }
    Ajax.onload = function (){
	responseObj = JSON.parse(this.responseText);

	if (responseObj == "Success"){
		location.href="./admininfo.html";
	}
    }
	Ajax.open("GET",urlPrefix+"Admin");
	Ajax.send();
});
var button1 = document.getElementById("button1");
console.log("js is working");

button1.addEventListener("click",function() {

let Ajax = new XMLHttpRequest();
Ajax.onerror = function (){
alert("error");
}
console.log("working")
location.href="./classearch.html";
});


var logout = document.getElementById("logout");
logout.addEventListener("click",function() {
    let Ajax = new XMLHttpRequest();
    Ajax.onerror = function (){
        alert("error wrong login");
    }
    location.href="./index.html";
});