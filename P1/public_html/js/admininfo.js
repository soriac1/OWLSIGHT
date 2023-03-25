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


var add = document.getElementById("add"); 
add.addEventListener("click",function() {
        let qObj = {reqBuild: document.getElementById("buildingname").value,
              	reqClass: document.getElementById("classname").value,
              	reqPro: document.getElementById("professor").value,
		reqRoom: document.getElementById("roomnumber").value,
		reqDay: document.getElementById("day").value,
		reqTime: document.getElementById("time").value};
    let Ajax = new XMLHttpRequest();
    Ajax.onerror = function (){
        alert("error wrong login");
    }
    Ajax.onload = function () {
        responseObj = JSON.parse(this.responseText);

        if (responseObj == "Success"){
                location.href="./owlsightadmin.html";
        }
        else {
        alert("Info not completed");
        }
        //loginres = JSON.parse(this.responseText);
        //console.log(login);
    }
        //var l = document.getElementById("username").value;
        //var p = document.getElementById("password").value;
        Ajax.open("GET",urlPrefix+"AdminInfo?"+queryObjectToString(qObj));
        Ajax.send();
});