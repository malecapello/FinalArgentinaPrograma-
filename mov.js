const movPag = document.querySelector(".movPag");
const botonAdelante2 = document.querySelector(".sigPag");
const botonAtras1 = document.querySelector(".volver-p1");
const botonAdelante3 = document.querySelector(".adelante-p3");
const botonAtras2 = document.querySelector(".volver-p2");
const botonFin = document.querySelector(".fin");

const progressText = document.querySelectorAll(".paso p")
const progressCheck = document.querySelectorAll(".paso .check")
const progressNum = document.querySelectorAll(".paso .numPaso")

let max =3;
let cont= 1;


botonAdelante2.addEventListener("click",function(e){
    e.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var direccion = document.getElementById("direccion").value;

    if(nombre == ""&& apellido == "" && direccion == ""){
        alert("ES NECESARIO LLENAR EL FORMULARIO")
    }else if(nombre == ""){
        document.getElementById("error-nombre").innerHTML = "* !COMPLETAR!";
    }else if (apellido == ""){
        document.getElementById("error-apellido").innerHTML = "* !COMPLETAR!";
    }
    else if(direccion == "") {
        document.getElementById("error-direccion").innerHTML = "* !COMPLETAR!";
    }
    else{
    document.getElementById("error-nombre").innerHTML = "";
    document.getElementById("error-apellido").innerHTML = "";
    document.getElementById("error-direccion").innerHTML = "";
    movPag.style.marginLeft= "-37%";
    progressCheck[cont - 1].classList.add("active");
    cont += 1;}
})

botonAtras1.addEventListener("click",function(e){
    e.preventDefault();
    movPag.style.marginLeft= "0%";
    progressCheck[cont -2].classList.remove("active");
    cont -= 1;
})


botonAdelante3.addEventListener("click",function(e){
    e.preventDefault();

    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var correo = document.getElementById("correo").value;
    var correoC = document.getElementById("correoConf").value;
    var telefono = document.getElementById("telefono").value;
    var esVal = expReg.test(correo);

    if(correo == "" && correoC == "" && telefono == ""){
        alert("ES NECESARIO LLENAR EL FORMULARIO")
    }else if (correo == ""){
        document.getElementById("error-correo").innerHTML = "!COMPLETAR!"
    }else if(esVal == false){document.getElementById("error-correo").innerHTML = "!EL CORREO INGRESADO NO ES VALIDO!"} else if(correoC !== correo){
        document.getElementById("error-correoConf").innerHTML = "!EL CORREO INGRESADO ES DIFERENTE!"
    }else if (telefono == ""){
        document.getElementById("error-telefono").innerHTML = "!COMPLETAR!"
    }else{
        document.getElementById("error-correo").innerHTML = "";
        document.getElementById("error-correoConf").innerHTML = "";
        document.getElementById("error-telefono").innerHTML = "";
        movPag.style.marginLeft= "-74%";
        progressCheck[cont - 1].classList.add("active");
        cont += 1;}
})

botonAtras2.addEventListener("click",function(e){
    e.preventDefault();
    movPag.style.marginLeft= "-37%";
    progressCheck[cont - 2].classList.remove("active");
    cont -= 1; 
})

botonFin.addEventListener("click",function(e){
    e.preventDefault();
    var problema = document.getElementById("problema").value;
    var descripcion = document.getElementById("descripcion").value
    if(problema=="" && descripcion == ""){
        alert("ES NECESARIO LLENAR EL FORMULARIO")
    }else if( problema == ""){
        document.getElementById("error-problema").innerHTML = "!COMPLETAR"
    }else if (descripcion == ""){
        document.getElementById("error-descripcion").innerHTML = "!COMPLETAR"
    }else{
    alert("Solicitud de reclamo enviada");
    progressCheck[cont - 1].classList.add("active");
    /*cont += 1;*/
}
})

