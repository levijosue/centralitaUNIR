// Clase de técnicos

let lisTecnicos = [
    {
        nombre: 'nom1',
        apellido: 'ap1',
        login: 'log1',
        tlfCorto: 'tlf1',
        tlfLargo: 'telf1',

    },

    {
        nombre: 'nom2',
        apellido: 'ap2',
        login: 'log2',
        tlfCorto: 'tlf2',
        tlfLargo: 'telf2',

    },

    {
        nombre: 'nom3',
        apellido: 'ap3',
        login: 'log3',
        tlfCorto: 'tlf3',
        tlfLargo: 'telf3',

    },

];





const tablaGen = document.querySelector('#tablaGen');

tablaGen.innerHTML = ``;

for (let i = 0; i < lisTecnicos.length; i++) {

    let nombre = lisTecnicos[i].nombre,
        apellido = lisTecnicos[i].apellido,
        login = lisTecnicos[i].login,
        tlfCorto = lisTecnicos[i].tlfCorto,
        tlfLargo = lisTecnicos[i].tlfLargo;


    tablaGen.innerHTML += `<tr class='tr'>
                            <td id="nombre">${nombre}</td>
                            <td id="apellido">${apellido}</td>
                            <td id="login">${login}</td>
                            <td id="tlfCorto">${tlfCorto}</td>
                            <td id="tlfLargo">${tlfLargo}</td>
                          </tr>`;
    
    console.log(nombre, apellido, login, tlfCorto, tlfLargo);

}


let tablaP = document.querySelector('#tablaP tbody'),
    tabla1 = document.querySelector('#tabla1 tbody'),
    tabla2 = document.querySelector('#tabla2 tbody'),
    tabla3 = document.querySelector('#tabla3 tbody'),
    btnInsertar1 = document.querySelector('#btnInsertar1'),
    btnInsertar2 = document.querySelector('#btnInsertar2'),
    btnInsertar3 = document.querySelector('#btnInsertar3');

let seleccion = []; //Arreglo para almacenar los técnicos seleccionados.

const seleccionar = (event)=>{

    if( event.target.tagName == "TD"){
        

        let fila = event.target.parentNode;

        if (fila.dataset.selected < 1) {
            
            fila.style.background = "#E1F0FF";
            fila.style.color = "black"; 
            fila.dataset.selected = 1;
            seleccion.push(fila); 
        }
        else{
            fila.style.backgroundColor = "";
            fila.style.color = "";
            fila.dataset.selected = 0;
            seleccion.splice(seleccion.indexOf(fila), 1);
        }
    }
}

const copiar1 = ()=>{

    if (seleccion.length){

        for (let i = 0, j = seleccion.length; i < j; i++) {
            
            let tr = tabla1.insertRow(),
                celdas = seleccion[i].querySelectorAll("td");

            for (var k = 0, m = celdas.length; k < m; k++){ //Se recorre a dicho conjunto de celdas
                    var td = tr.insertCell(); //Se añade una nueva celda en la nueva fila de la segunda tabla
                    td.innerHTML = celdas[k].innerHTML; //Se copia el texto de la celda de la fila seleccionada a la nueva celda
            }
            
            seleccion[i].style.backgroundColor = "";
            seleccion[i].style.color = "";
            seleccion[i].dataset.selected = 0;
        }

        //Se eliminan a las filas seleccionadas del arreglo
        seleccion.length = 0;
    }

}

const copiar2 = ()=>{

    if (seleccion.length){

        for (let i = 0, j = seleccion.length; i < j; i++) {
            
            let tr = tabla2.insertRow(),
                celdas = seleccion[i].querySelectorAll("td");

            for (var k = 0, m = celdas.length; k < m; k++){ //Se recorre a dicho conjunto de celdas
                    var td = tr.insertCell(); //Se añade una nueva celda en la nueva fila de la segunda tabla
                    td.innerHTML = celdas[k].innerHTML; //Se copia el texto de la celda de la fila seleccionada a la nueva celda
            }
            
            seleccion[i].style.backgroundColor = "";
            seleccion[i].style.color = "";
            seleccion[i].dataset.selected = 0;
        }

        //Se eliminan a las filas seleccionadas del arreglo
        seleccion.length = 0;
    }

}

const copiar3 = ()=>{

    if (seleccion.length){

        for (let i = 0, j = seleccion.length; i < j; i++) {
            
            let tr = tabla3.insertRow(),
                celdas = seleccion[i].querySelectorAll("td");

            for (var k = 0, m = celdas.length; k < m; k++){ //Se recorre a dicho conjunto de celdas
                    var td = tr.insertCell(); //Se añade una nueva celda en la nueva fila de la segunda tabla
                    td.innerHTML = celdas[k].innerHTML; //Se copia el texto de la celda de la fila seleccionada a la nueva celda
            }
            
            seleccion[i].style.backgroundColor = "";
            seleccion[i].style.color = "";
            seleccion[i].dataset.selected = 0;
        }

        //Se eliminan a las filas seleccionadas del arreglo
        seleccion.length = 0;
    }

}

tablaP.addEventListener('click', seleccionar, false );
btnInsertar1.addEventListener('click', copiar1, false);
btnInsertar2.addEventListener('click', copiar2, false);
btnInsertar3.addEventListener('click', copiar3, false);





// const seleccion = document.querySelector('.tr'),
//     btnInsertar1 = document.querySelector("#btnInsertar1");


// seleccion.addEventListener('click', function(){

//     seleccion.style.background = '#C8E2FD';

// })



// nombre = document.getElementById("nombre");
// apellido = document.getElementById("apellido");
// login = document.getElementById("login");
// tlfCorto = document.getElementById("tlfCorto");
// tlfLargo = document.getElementById("tlfLargo");














// class tecnico{
//     nombre;
//     apellido;
//     login;
//     tlfCorto;
//     tlfLargo;
//     email;

//     constructor(nombre, apellido, login, tlfCorto, tlfLargo, email){

//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.login = login;
//         this.tlfCorto = tlfCorto;
//         this.tlfLargo = tlfLargo;
//     }

// }

// console.log(lisTecnicos);


