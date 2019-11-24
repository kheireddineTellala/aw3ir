    $(function (){
      $("#envoyer").click(function(){
      valid = true;
      if ($("#Nom").val()== "" ||  $("#Prenom").val()== "" || $("#DatedeNaissance").val()== "" || $("#inputEmail4").val()== "" || $("#inputAddress").val()== ""){
        $('#myModal').modal('show');

        valid = false ;
      }
      else  {
        $('#myModal1').modal('show');
      }
      
      return valid;

       });

      });

      $( function() {
        $( "#datepicker" ).datepicker();
      } );
     
