function isValidEmail(mail) { 
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail); 
}

$(document).ready(function(){
  

  $("input[name='submit']").click(function(e){

    var email = $("input[name='email']").val();
    
    if(!isValidEmail(email)) {
      alert("hols");
      return false;
    } 

    return false;
    
  })
});