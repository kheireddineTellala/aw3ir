function myFunction() {
var inputList = document.getElementById("my-form");
  
  var i;
  var text1 ="Bienvenue " + document.getElementById("Nom").value ;
  var text2 ="le nom doit contenir au moins  5 caracteres" ;
  var check = true;
  for (i = 0; i < inputList.length ;i++) {
        var inputElem = inputList[i];
        if (inputElem.value.length < 5 ){     
            console.log("Error");
            
            check = false;
        
        } 
        else {
            console.log("OK");
            check = true ;
            
        }
  }
  if (check){
  document.getElementById("success").innerHTML = text1;
  }
  else {
  document.getElementById("error").innerHTML = text2;
  }
  


 
}