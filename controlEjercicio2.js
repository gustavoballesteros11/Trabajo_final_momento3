let etiquetaPeso = document.getElementById("pesoUsuario");
let etiquetaAltura = document.getElementById("alturaUsuario");
let boton = document.getElementById("botonCalcular");
let respuesta = document.getElementById("respuesta");

function validarDatos(){
    let valorPeso = etiquetaPeso.value;
    let valorAltura = etiquetaAltura.value;

    if(valorPeso==0 && valorAltura==0){
        etiquetaPeso.classList.add("is-invalid");
        etiquetaAltura.classList.add("is-invalid");
    }else if(valorPeso==0){
        etiquetaPeso.classList.add("is-invalid");
        etiquetaAltura.remove("is-invalid");
    }else if(valorAltura==0){
        etiquetaPeso.classList.remove("is-invalid");
        etiquetaAltura.classList.add("is-invalid");
    }else{
        etiquetaPeso.classList.remove("is-invalid");
        etiquetaAltura.classList.remove("is-invalid");
        procesarDatos(valorPeso, valorAltura);
    }

}

function procesarDatos(valorPeso, valorAltura){
    imc=(valorPeso/ (valorAltura*valorAltura)).toFixed(2);
        if(imc< 18.5){

            respuesta.textContent=("Su indice de masa corporal es de: " + imc +" Y Su Peso Es Insuficiente");
        
        }else if(imc >= 18.5 && imc <= 24.9){

            respuesta.textContent=("Su indice de masa corporal es de: " + imc + " Y Su Peso Es Normal");
        
        
        }else if(imc >= 25 && imc <= 26.9){

            respuesta.textContent=("Su indice de masa corporal es de: " + imc + " Y Tiene Sobrepeso Grado 1");

        }else if(imc >= 27 && imc <= 29.9){
            respuesta.textContent=("Su indice de masa corporal es de: " + imc + " Y Tiene Sobrepeso Grado 2 (Preobesidad)");
        
        
        }else if(imc >= 30 && imc <= 34.9){

            respuesta.textContent=("Su indice de masa corporal es de: " + imc + " Y Tiene Obesidad Grado 1");
        
        }else if(imc >= 35 && imc <= 39.9){

            respuesta.textContent=("Su indice de masa corporal es de: " + imc + " Y Tiene Obesidad Grado 2");
        
        
        }else if(imc >= 40 && imc <= 49.9){

            respuesta.textContent=("Su indice de masa corporal es de: " + imc + " Y Tiene Obesidad Morbida Grado 3");
        
        
        }if(imc>= 50){

            respuesta.textContent=("Su indice de masa corporal es de: " + imc + " Y Tiene Obesidad Extrema Grado 4");
        }
}

boton.addEventListener("click",validarDatos);