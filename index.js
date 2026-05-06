// Capturar las palabras que viene despues de npm run start

const metodo = process.argv[2];
const recurso = process.argv[3];

const config = {
    headers: {
        'Content-Type': 'application/json',
    }
}

//    ---REQ II: CASO GET Consultar todos los productos

function productosTodos () {
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
         
        console.log(data);
    })
    .catch(error => console.error('Error: ', error));
}
  
//---REQ II: CASO GET Buscar un producto por ID


function unProducto(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json())
    .then((data) => {
         
        console.log(data);
    })
    .catch(error => console.error('Error: ', error));

}

// --- REQ II: CASO POST Agregrando un producto. 
    
async function agregarProducto(product) {

    const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(product),
    });

    const data = await response.json();

    console.log(data);

    }

// ---REQ II: Borrar un producto 

function borrarProducto(id) {
    fetch(`https://fakestoreapi.com/products/${id}`, {...config, method: 'DELETE' })
    .then((response) => response.json())
    .then((data) => {
         
        console.log(data);
    })
    .catch(error => console.error('Error: ', error));

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
    const titulo = process.argv[4];
    const precio = process.argv[5]; 
    const categoria = process.argv[6];

    const nuevoProducto = { title: titulo, price: precio, category: categoria };  
    agregarProducto(nuevoProducto);
} 

else if (metodo === 'DELETE' && tipoRecurso === 'products') {
    if (id) {
        borrarProducto(id);
    } 
}

else {
        console.log("Comando no reconocido. Verifica la instrucción.");
    }
}

// Ejecutamos el programa
interpretador();

 