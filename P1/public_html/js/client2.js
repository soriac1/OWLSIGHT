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




var button3 = document.getElementById("button3");
button3.addEventListener("click",function() {
    let    qObj = {reqFirst: document.getElementById("name").value,
                   reqLast: document.getElementById("lastname").value,
                   reqNUser: document.getElementById("nusername").value,
                reqNPass: document.getElementById("npassword").value,
		reqRole: document.getElementById("role").value};

    let Ajax = new XMLHttpRequest();
    Ajax.onerror = function (){
        alert("error wrong login");
    }
    Ajax.onload = function () {
        responseObj = JSON.parse(this.responseText);
        console.log(responseObj);
        if (responseObj == "Success"){
                location.href="./index.html";
        }
	else if (responseObj = "Miss"){
	alert("Fill in all info");
	}

    }
        //var l = document.getElementById("username").value;
        //var p = document.getElementById("password").value;
        Ajax.open("POST",urlPrefix+"signup?"+queryObjectToString(qObj));
        Ajax.send();
});