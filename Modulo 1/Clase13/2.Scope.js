//Scope local y global

//1.Variables con scope global
//Las varisbles fuera de cualquier funcion son accesibles en todo el programa
let mensajeGlobal = "Estoy en el Scope Global";

function mostrarMensaje(){
    //2.Variable con Scope Local
    //Solo existen dentro de esa funcion
    let mensajeLocal = "Estoy en el Scope Local";
    console.log(mensajeGlobal);
    console.log(mensajeLocal);
    
    
}

mostrarMensaje();
//console.log(mensajeLocal); Error por llamar a la variable local por fuera de la funcion

