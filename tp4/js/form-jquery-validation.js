// count the number of characters in the text field

$("#name").keyup(function () {
     $("#field-1").text($("#name").val().length + " car."); 
    
    });

$("#firstname").keyup(function () { 
    $("#field-2").text($("#firstname").val().length + " car."); 
});

$("#mail").keyup(function () {
     $("#field-3").text($("#mail").val().length + " car."); 
    });


//     Display the list of contacts in an HTML table

$('#valider').click(()=> {
 var fistName = $('#firstName').val();
 var lastName = $('#lastName').val();
 var address  = $('#address').val();
 var birthday = $('#birthday').val();
 var mail     = $('#mail').val();
      
contactStore.add(fistName,lastName,birthday,address,mail);
       
document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
     '<tr><td>'+fistName+'</td><td>'+lastName+'</td><td>'+birthday+'</td><td>'+address+'</td><td>'+mail+'</td><td>';
      
      });
          


        
        
        