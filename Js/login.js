function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
$(document).ready(function(){
    $('#submit-btn').click(function(){
        var username = $('input#username').val();
        var password = $('input#myInput').val();
        var error =false;
        //alert(username);
        $.getJSON("../base_datos/user.json", function(result){
                $.each(result, function(i, field){
                    alert(field.usuario);
                    if( username == field.usuario && password == field.password){
                        alert("Login success");
                        error=true;
                    }
                    if(error == false){
                        alert("ops, error user or password");
                    }
                });
            });
        /*$.getJSON("../base_datos/user.json", function( data ) {
    
            $.each( data, function( key, val ) {
            //addNew(val.titulo, val.descripcion)
                alert(val+" ";
            if( username == val.usuario && password == value.password){
                        alert("Login success");
                        error=true;
                    }
                    if(error == false){
                        alert("ops, error user or password");
            }
                });
    
            });*/
        /*
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
        }});*/
    });
});
