function load_and_compare_Json(user,password) {

   $.getJSON( "base_datos/user.json", function( data ) {
    
      $.each( data, function( key, val ) {
        //addNew(val.titulo, val.descripcion)

        if((val.usuario == user) & (val.password == password)){
               alert('login succefull');
            } else {
               alert('Error en usuario o contraseña')
            };
      });
    
  });
}
$(document).ready(function(){
    $('#submit-btn').click(function(){
        var username = $('#username').val();
        var password = $('#myInput').val();
        var error =false;
        alert(username);
        $.ajax({type: "POST",
                url: "base_datos/user.json",
                dataType:"json",
                success : function(data){
                  $.each(data,funtion(key,value){
                    if( username == value.usuario && password == value.password){
                        alert("hey");
                        error=true;
                        return false;
                    }
                    if(error == false){
                        alert("ops");
                        return false;
                    }  
                });
        }});
    });
});
