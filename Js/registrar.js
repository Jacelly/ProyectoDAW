function isValidBothPassword(str1,str2) { 
  var n = str1.localeCompare(str2);
  return n; 
}

$(document).ready(function(){
  

  $("input[name='submit']").click(function(e){

    var password = $("input[name='password']").val();
    var password1 = $("input[name='password1']").val();
    
    if(isValidBothPassword(email)!=0) {
      alert("Las contraseñas no coinciden");
      return false;
    } 

    return false;
    
  })
});