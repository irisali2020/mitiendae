// Capturar las palabras que viene despues de npm run start

const metodo = process.argv[2];
const recurso = process.argv[3];

const config = {
    headers: {
        'Content-Type': 'application/json',
    }
}

//    ---REQ I:GET con FETCH con la API fakestoreapi

function productosTodos () {
    fetch('https://fakestoreapi.com/products', {...config, method: 'GET'})
    .then((response) => response.json())
    .then((data) => {
         
        console.log(data);
    })
    .catch(error => console.error('Error: ', error));
}
  
//---REQ II:buscando un id especifico utilizando destructuring y process.argv


function unProducto(id) {
    fetch(`https://fakestoreapi.com/products/${id}`, {...config, method: 'GET' })
    .then((response) => response.json())
    .then((data) => {
         
        console.log(data);
    })
    .catch(error => console.error('Error: ', error));

}

// --- REQ III: Agregrando un producto. 
    
async function agregarProducto(product) {
        const response = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {"Content-Type": "application/json" },
    body: JSON.stringify(product),
});

    const data = await response.json();

    console.log(data);

    }
       
 /// INTERPRETADOR
   
 function interpretador() {

    const[tipoRecurso, id] = recurso.split('/');

    if (metodo === 'GET' && tipoRecurso === 'products') {
        if (id) {
            unProducto(id);
        } else {
            productosTodos();
        }
    } 

 else if (metodo === 'POST' && tipoRecurso === 'products') {
    const nuevoProducto = { title: "T-Shirt-Rex", price: 30.50, category: "300 remeras" };  
    agregarProducto(nuevoProducto);
} 
else {
        console.log("Comando no reconocido. Verifica la instrucción.");
    }
}

// Ejecutamos el programa
interpretador();

 