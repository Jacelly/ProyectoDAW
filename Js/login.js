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
 	$.getJSON("../DB/user.json", function(result){
                data = $.parseJSON(data);
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
    });
});
