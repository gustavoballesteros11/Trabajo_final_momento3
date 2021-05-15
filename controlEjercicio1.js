let etiquetaNombre=document.getElementById("nombreEmpleado");
let etiquetaHorasLaboradas=document.getElementById("horasLaboradas");
let botonCalcular=document.getElementById("botonCalcular");
let salarioNeto=document.getElementById("salarioNeto");
const SALARIOBASICO = 40 * 20000;

botonCalcular.addEventListener("click",validarFormulario);

function validarFormulario(){

    let nombre=etiquetaNombre.value;
    let horasLaboradas=Number(etiquetaHorasLaboradas.value);

    if(nombre=="" && horasLaboradas==""){
        etiquetaNombre.classList.add("is-invalid");
        etiquetaHorasLaboradas.classList.add("is-invalid");
    }else if(nombre==""){
        etiquetaNombre.classList.add("is-invalid");
        etiquetaHorasLaboradas.remove("is-invalid");
    }else if(horasLaboradas==""){
        etiquetaHorasLaboradas.classList.add("is-invalid");
        etiquetaNombre.classList.remove("is-invalid");
    }else{
        etiquetaNombre.classList.remove("is-invalid");
        etiquetaHorasLaboradas.classList.remove("is-invalid");
        procesarDatos(horasLaboradas, nombre);
    }

}

function procesarDatos(horasLaboradas, nombre){
    let horasExtra = 0;
    let valorExtras = 0;
    let salarioN = 0;
     if(horasLaboradas > 40){
        horasExtra = horasLaboradas - 40;
        valorExtras = horasExtra * 25000;
        salarioN = SALARIOBASICO + valorExtras;
    }else{
        salarioN = horasLaboradas * 20000;
    }
    return salarioNeto.textContent = `El salario neto del empleado ${nombre} es de $ ${salarioN} pesos` 
}
   