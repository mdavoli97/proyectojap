//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

function onSignIn(googleUser) {
     var profile=googleUser.getBasicProfile();
    $(".g-signin2").css("display","none");
    $(".data").css("display","block");
    $("#pic").attr('src',profile.getImageUrl());
    $("#email").text(profile.getEmail());
 }

 function signOut() {
     var auth2 = gapi.auth2.getAuthInstance();
     auth2.signOut().then(function(){
         alert("signed out");
         $(".data").css("disokay","none");
         $(".data").css("display","block");
     });
 }