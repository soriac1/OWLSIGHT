const urlPrefix= "http://34.74.227.117/";

var button3 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button1 = document.getElementById("button3");




button3.addEventListener("click",function() {
    
    let Ajax = new XMLHttpRequest();
    Ajax.onerror = function (){
        alert("error");
    }
    console.log("working")
    location.href="./classearch.html";
   
        

});


button2.addEventListener("click",function() {

    let Ajax = new XMLHttpRequest();
    Ajax.onerror = function (){
        alert("error");
    }
    console.log("working")
    location.href="./maps.html";



});


button1.addEventListener("click",function() {

    let Ajax = new XMLHttpRequest();
    Ajax.onerror = function (){
        alert("error");
    }
    console.log("working")
    location.href="./direct.html";



});