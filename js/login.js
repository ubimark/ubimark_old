/**
 * Función para realizar petición de inicio de sesión
 *  
 * @author Luis Sanchez
 */

function login() {
    $.ajax({
        url: "../php/login.php",
        dataType: "json",
        type: "post",
        data: {
            email: $("#inputEmail").val(),
            password: $("#inputPassword").val()
        }

    }).done(function (result) {
        switch (result.status_code) {
            case 103:
                addAlert("login_fail","Usuario o contraseña incorrecta","alert-danger","","fa fa-times","",true);
                break;
            case 200:
                //Redireccionar a la página anterior
                if (document.referrer != 'undefined' && document.referrer.indexOf("login.html") == -1 && document.referrer.indexOf("sign-up.html") == -1) {
                    console.log(document.referrer);
                    window.location = document.referrer;
                } else {
                    window.location.replace("../index.html");
                }
                break;
        }
    });
}

$(document).ready(function (e) {
    //Petición a php para iniciar sesión
    $("form").submit(function (e) {
        e.preventDefault();
        login();
    });

});