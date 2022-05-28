// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.

const fetchApi = async () =>{
    const datos = await fetch(`https://api.agify.io?name=michael`);
    const datosParseados = await datos.json();
    print(datosParseados);
}

const print = (datosParseados) =>{
    console.log(datosParseados);
}
fetchApi();

// 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.
const baseUrl = 'https://api.nationalize.io';

const fetch2 = async () =>{
    const input$$ = document.querySelector('input');
    const datos = await fetch(`${baseUrl}?name=${input$$.value}`);
    const datosParseados = await datos.json();
    print2(datosParseados);
    fetch3();
}

const print2 = (datosParseados) =>{

        console.log(datosParseados);
}

// 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
// de MZ.

const fetch3 = async () =>{
    const input$$ = document.querySelector('input');
    const datos = await fetch(`${baseUrl}?name=${input$$.value}`);
    const datosParseados = await datos.json();
    print3(datosParseados);
}

const print3 = (datosParseados) =>{
    let contador = 0
    datosParseados.country.forEach(element => {
        div = document.createElement('div');
        parrafo = document.createElement('p');
        button = document.createElement('button');
        parrafo.innerText = `El nombre ${datosParseados.name} tiene un ${element.probability} porciento de ser de ${element.country_id}`
        console.log(contador);
        const aBorrar = contador
        div.classList.add(contador);
        button.onclick = () => remove(aBorrar);
        button.innerText = "remove"
        div.appendChild(parrafo);
        div.appendChild(button);
        document.body.appendChild(div);
        ++contador
        // console.log(`El nombre ${datosParseados.name} tiene un ${element.probability} porciento de ser de ${element.country_id}`);
    });
}


// 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
// de los p que hayas insertado y que si el usuario hace click en este botón 
// eliminemos el parrafo asociado.

const remove = (elementoBorrar) =>{
    const listaDiv = document.querySelector(`div[class="${elementoBorrar}"]`)
    document.body.removeChild(listaDiv);
}

