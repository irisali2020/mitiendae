//--Prueba del FakeStore

// fetch('https://fakestoreapi.com/products')
//   .then(response => response.json())
//   .then(data => console.log(data));

//     ---FETCH para obteneer listado de productos con la API fakestoreapi

// const config = {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         // 'Authorization': 'Bearer token' ,
//         },
// };

// fetch('https://fakestoreapi.com/products', config)
// .then((response) => response.json())
// .then((data) => {   

//     data.forEach(producto => {
//         console.log(`Id: ${producto.id} -- Nombre: ${producto.title} -- Precio: ${producto.price} -- Categoria: ${producto.category} -- Imagen: ${producto.image}`);
//     });
// })

// .catch(error => console.error('Error: ', error));



// //---Buscando un id especifico utilizando destructuring y process.argv


const argumentoRuta = process.argv[3]; 

// Extraemos el ID
const idBuscado = argumentoRuta ? argumentoRuta.split('/')[1] : undefined;

if (!idBuscado) {
    console.error("Error: Debes ingresar una ruta válida. Ejemplo: npm start -- GET products/15");
    process.exit(1); 
}

const config = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
};

fetch(`https://fakestoreapi.com/products/${idBuscado}`, config)
    .then((response) => response.json())
    .then(({ id, title }) => {
        console.log(`Producto encontrado -> Id: ${id} -- Nombre: ${title}`);
    })
    .catch(error => console.error('Error: ', error));

