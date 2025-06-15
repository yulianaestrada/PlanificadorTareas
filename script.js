/*
  --- Estados de una Promesa ---

  Una Promesa puede estar en uno de tres estados:

  - pending (Pendiente): Es el estado inicial. La operación asíncrona está en curso, todavía no sabemos si tendrá éxito o fallará.
  - fulfilled (Cumplida / Resuelta): La operación asíncrona se completó exitosamente y la Promesa tiene un valor resultante.
  - rejected (Rechazada): La operación asíncrona falló y la Promesa tiene una razón del fallo (un error).

  Una vez que una Promesa pasa de pending a fulfilled o rejected, se dice que está settled (establecida) y ya no puede cambiar de estado.

###########################################################################################

  --- Manejo de Estados con then(), catch() y finally() ---
  
  Para trabajar con el resultado de una Promesa, usamos métodos especiales:

  - .then(): Este método se encadena a la Promesa y se ejecuta cuando la Promesa se fulfilled (cumple exitosamente). Recibe como argumento una función que se ejecutará con el valor resultante de la Promesa.

  ## Ejemplo: miPromesa.then(function(valor) { Haz algo con el valor }); ##

  - .catch(): Este método también se encadena y se ejecuta cuando la Promesa se rejected (es rechazada, es decir, ocurre un error). Recibe una función que se ejecuta con la razón del error.

  ## Ejemplo: miPromesa.catch(function(error) { Maneja el error }); ##


  - .finally(): Este método se ejecuta siempre, sin importar si la Promesa se fulfilled o se rejected. Es útil para realizar limpieza o acciones que deben suceder de todas formas, como ocultar un indicador de carga.

  ## Ejemplo: miPromesa.finally(function() { Se ejecuta siempre }); ##

*/

// Función que simula una operación asíncrona (como obtener datos) y DEVUELVE una Promesa
function obtenerDatosDelServidor() {
  return new Promise((resolve, reject) => {
    // Simulamos un retraso de 2 segundos (como si fuera una petición a internet)
    setTimeout(() => {
      const exito = true; // Cambia a 'false' para simular un error

      if (exito) {
        // Si todo sale bien, resolvemos la promesa con algunos datos
        resolve("¡Datos obtenidos exitosamente!");
      } else {
        // Si algo sale mal, rechazamos la promesa con un mensaje de error
        reject("Error al obtener los datos del servidor.");
      }
    }, 2000); // 2000 milisegundos = 2 segundos
  });
}

console.log("Iniciando la solicitud de datos...");

// Usamos la Promesa
obtenerDatosDelServidor()
  .then((mensaje) => {
    // Esto se ejecuta si la Promesa se resuelve (exitoso)
    console.log("Operación exitosa:", mensaje);
  })
  .catch((error) => {
    // Esto se ejecuta si la Promesa se rechaza (error)
    console.error("Operación fallida:", error);
  })
  .finally(() => {
    // Esto se ejecuta siempre, haya éxito o error
    console.log("Proceso de obtención de datos finalizado.");
  });

console.log("La aplicación sigue ejecutándose mientras esperamos los datos...");

/*

  --- LIBRERÍAS ---

  Las librerías en JavaScript son colecciones de código preescrito que otros programadores han creado para resolver problemas comunes. Piensa en ellas como cajas de herramientas especializadas: en lugar de fabricar cada herramienta desde cero para cada proyecto, simplemente tomas la que necesitas de la caja. Esto nos ahorra tiempo, reduce errores y nos permite enfocarnos en las partes únicas de nuestro proyecto.

  Imaginen que son constructores y en cada casa que construyen necesitan poner puertas y ventanas. ¿Sería eficiente que cada vez que empiecen un proyecto, tengan que fabricar desde cero cada bisagra, cada manija, cada panel de vidrio? Lo normal es ir al lugar donde venden esos componentes, y comprar las puertas y ventanas ya hechas, y simplemente instalarlas.

  En JavaScript, las librerías son ese lugar donde se venden los componentes que necesitamos. Son colecciones de funciones, objetos o clases que ya están programadas para realizar tareas específicas que son comunes en muchos proyectos. En lugar de escribir el código desde cero para, por ejemplo, hacer una animación compleja, manejar fechas, o realizar peticiones a un servidor de forma más sencilla, podemos usar una librería que ya lo haga por nosotros.

  ## Ejemplos de tareas comunes que resuelven las librerías: ##

  - Manipulación del DOM (Document Object Model): Cambiar el contenido de una página web, añadir o quitar elementos.
  - Peticiones HTTP: Obtener datos de servidores.
  - Animaciones: Crear efectos visuales.
  - Validación de formularios: Asegurarse de que el usuario ingrese datos correctos.
  - Manejo de fechas y horas.

  ## ¿Cómo funcionan? ##

  Las librerías funcionan proporcionando una API (Application Programming Interface), que es un conjunto de reglas y herramientas para interactuar con el código de la librería. Es como el manual de instrucciones de una herramienta: te dice qué puedes hacer con ella y cómo usarla.



*/

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnMostrarToast");

  btn.addEventListener("click", () => {
    Toastify({
      text: "¡Hola! Esta es una notificación de Toastify.",
      duration: 3000, // Duración en milisegundos (3 segundos)
      newWindow: true, // Abre en una nueva ventana si se clickea (opcional)
      close: true, // Permite cerrar la notificación manualmente
      gravity: "top", // `top` o `bottom`
      position: "right", // `left`, `center` o `right`
      stopOnFocus: true, // Detiene el temporizador si el usuario interactúa
      onClick: function () { }, // Callback después de hacer clic
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)", // Degradado verde
        color: "#ffffff", // Texto blanco
        borderRadius: "5px", // Bordes redondeados
      },
    }).showToast();

    // Notificación de error (fondo rojo)
    // Toastify({
    //   text: "¡Error al procesar la solicitud!",
    //   duration: 5000,
    //   close: true,
    //   style: {
    //     background: "linear-gradient(to right, #e00000, #ff4d4d)", // Degradado rojo
    //     color: "#ffffff",
    //   },
    // }).showToast();
  });
});



// --- CÓDIGO ECOMMERCE ---

// === Variables Globales y Selectores del DOM ===
const productsContainer = document.getElementById("products-container");
const loadingSpinner = document.getElementById("loading-spinner");
const errorMessage = document.getElementById("error-message");
const errorText = document.getElementById("error-text");

const cartButton = document.getElementById("cart-button");
const cartDropdown = document.getElementById("cart-dropdown");
const cartCount = document.getElementById("cart-count");
const cartItemsList = document.getElementById("cart-items-list");
const cartTotal = document.getElementById("cart-total");
const emptyCartMessage = document.getElementById("empty-cart-message");
const clearCartButton = document.getElementById("clear-cart-button");
const checkoutButton = document.getElementById("checkout-button");

const API_URL = "https://jsonplaceholder.typicode.com/todos";

// El carrito de compras se almacenará aquí. Inicialmente, intentamos cargarlo desde localStorage.
let cart = JSON.parse(localStorage.getItem("fakeStoreCart")) || [];

// === Funciones Principales ===

// 1. Cargar productos desde la API

async function fetchProducts() {
  try {
    const response = await fetch(API_URL)

    if (!response.ok) {
      throw new error(`Error HTTP: ${response.status} - ${response.statusText}`);
    }
    products = await response.json();
    displayProducts(products);

  } catch (error) {
    console.error("Error al cargar los productos: ", error);
    errorText.textContent("Error al cargar los productos: ", error);
    errorMessage.classList.remove("hidden");
    productsContainer.innerHTML = "";
  } finally {
    loadingSpinner.classList.add("hidden")
  }
}

// *ASYNC-AWAIT - VER TEORÍA


// 2. Mostrar productos en la interfaz
function displayProducts(products) {
  productsContainer.innerHTML = ""; // Limpiar el contenedor antes de añadir nuevos productos

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className =
      "product-card bg-white rounded-lg shadow-md p-6 flex flex-col justify-between transform transition-transform hover:scale-105"; // Clase para efecto hover

    // Limita la longitud de la descripción
    const shortDescription =
      product.title.length > 100
        ? product.title.substring(0, 97) + "..."
        : product.title;

    productCard.innerHTML = `
      <img src= "img/portapapeles.png" width="50px" height="10px">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">${product.userId
      }</h3>
            <p class="text-gray-600 text-sm mb-4 flex-grow">${shortDescription}</p>
            <div class="flex justify-between items-center mt-auto">
                <span class="text-2xl font-bold text-gray-600">Duración ${Number(product.id)
      }:00 Min</span>
${product.completed
        ? `
          <button
            class="add-to-cart-btn bg-green-500 text-white px-5 py-2 rounded-md transition duration-300" 
            data-product-id="${product.id}"
            data-product-title="${product.title}"
            data-product-price="${product.userId}"  disabled>
            Realizada✅
          </button>`
        : `
          <button 
            class="add-to-cart-btn bg-gray-500 text-white px-3 py-2 rounded-md hover:bg-gray-600 transition duration-300" 
            data-product-id="${product.id}"
            data-product-title="${product.title}"
            data-product-price="${product.userId}">
            Programar
          </button>`
      }
            <button onclick="eliminarTarea('${product.title}')"
            class="add-to-cart-btn bg-red-500 text-white px-1 py-2 rounded-md transition duration-300" 
            >
            🗑️
          </button>
      </div>
    </div>
  `;
    productsContainer.appendChild(productCard);
  });

  // Añadir event listeners a los botones "Agregar al Carrito"
  document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const productId = parseInt(event.target.dataset.productId);
      const productTitle = event.target.dataset.productTitle;
      const productPrice = parseFloat(event.target.dataset.productPrice);
      const productImage = event.target.dataset.productImage;

      addProductToCart({
        id: productId,
        title: productTitle,
        userId: productPrice,
        completed: productImage,
      });
    });
  });
}

// 3. Agregar un producto al carrito
function addProductToCart(product) {
  const existingProductIndex = cart.findIndex((item) => item.id === product.id);

  if (existingProductIndex !== -1) {
    // Si el producto ya está en el carrito, incrementa la cantidad
    cart[existingProductIndex].quantity++;
  } else {
    // Si no está, añádelo con cantidad 1
    product.quantity = 1;
    cart.push(product);
  }
  saveCartToLocalStorage();
  updateCartUI();
}

// 4. Guardar el carrito en localStorage
function saveCartToLocalStorage() {
  localStorage.setItem("fakeStoreCart", JSON.stringify(cart));
}

// 5. Actualizar la interfaz del carrito
function updateCartUI() {
  cartItemsList.innerHTML = ""; // Limpiar lista de items del carrito
  let total = 0;

  if (cart.length === 0) {
    emptyCartMessage.classList.remove("hidden");
    cartCount.textContent = "0";
  } else {
    emptyCartMessage.classList.add("hidden");
    cart.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.className =
        "flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0";
      itemElement.innerHTML = `
                <div class="flex items-center">
      <img src= "img/portapapeles.png" width="50px" height="10px">
                    <div>
                        <p class="font-medium text-gray-800">${item.title}</p>
                        <p class="text-sm text-gray-500">${item.id} x ${item.quantity}</p>
                    </div>
                </div>
                <div class="flex items-center">
                    <button class="remove-from-cart-btn bg-red-400 text-white w-6 h-6 rounded-full flex items-center justify-center hover:bg-red-500 mr-2" data-product-id="${item.id
        }">-</button>
                    <span class="font-bold text-gray-800">${(
          item.id * item.quantity
        ).toFixed(2)}</span>
                </div>
            `;
      cartItemsList.appendChild(itemElement);
      total += item.id * item.quantity;
    });
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  }
  cartTotal.textContent = `${total.toFixed(2)}`;

  // Añadir event listeners a los botones de eliminar del carrito
  document.querySelectorAll(".remove-from-cart-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const productId = parseInt(event.target.dataset.productId);
      removeProductFromCart(productId);
    });
  });
}

// 6. Eliminar un producto (o reducir cantidad) del carrito
function removeProductFromCart(productId) {
  const existingProductIndex = cart.findIndex((item) => item.id === productId);

  if (existingProductIndex !== -1) {
    if (cart[existingProductIndex].quantity > 1) {
      cart[existingProductIndex].quantity--;
    } else {
      // Si la cantidad es 1, lo eliminamos completamente del carrito
      cart.splice(existingProductIndex, 1);
    }
  }
  saveCartToLocalStorage();
  updateCartUI();
}

// 7. Vaciar completamente el carrito
function clearCart() {
  cart = []; // Reinicia el array del carrito
  saveCartToLocalStorage(); // Guarda el carrito vacío en localStorage
  updateCartUI(); // Actualiza la interfaz
  alert("No hay tareas");
  cartDropdown.classList.add("hidden"); // Ocultar carrito después de vaciar
}

// === Event Listeners ===

// Evento para cargar los productos cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  fetchProducts(); // Cargar productos al iniciar la página
  updateCartUI(); // Cargar el estado del carrito desde localStorage y actualizar UI
});

// Toggle para mostrar/ocultar el carrito desplegable
cartButton.addEventListener("click", (event) => {
  event.stopPropagation(); // Evita que el clic en el botón se propague y cierre el carrito
  cartDropdown.classList.toggle("hidden");
});

// Cerrar el carrito si se hace clic fuera de él
document.addEventListener("click", (event) => {
  if (
    !cartDropdown.contains(event.target) &&
    !cartButton.contains(event.target)
  ) {
    cartDropdown.classList.add("hidden");
  }
});

// Evento para el botón "Vaciar Carrito"
clearCartButton.addEventListener("click", clearCart);

// Evento para el botón "Finalizar Compra" (puedes añadir lógica más compleja aquí)
checkoutButton.addEventListener("click", () => {
  if (cart.length > 0) {
    // Marcar las tareas como completadas en el array original de productos
    cart.forEach(itemCarrito => {
      const tareaOriginal = products.find(product => product.title === itemCarrito.title);
      if (tareaOriginal) {
        tareaOriginal.completed = true;
      }
    });

    // (Opcional) Guardar en localStorage si lo estás usando
    localStorage.setItem("products", JSON.stringify(products));

    alert("Programación realizada");

    clearCart(); // Vacía el carrito después de marcar como completadas
    displayProducts(products); // Si quieres actualizar la vista
  } else {
    alert("No tienes tareas programadas");
  }
});



/*
  --- ASYNC - AWAIT

  ¿Qué son async y await?

  async y await son una sintaxis especial en JavaScript que nos permite escribir código asíncrono (que usa Promesas) como si fuera síncrono (paso a paso, de arriba a abajo).
  Su objetivo principal es hacer que el código con Promesas sea más legible y fácil de entender.

  1. async:

    - La palabra clave async se coloca antes de la palabra function (o antes de una función flecha) para indicar que esta función siempre va a devolver una Promesa.

    - Esto significa que si la función devuelve un valor normal, JavaScript lo "envuelve" automáticamente en una Promesa que se resuelve con ese valor. Si la función lanza un error, la Promesa se rechaza con ese error.
  
  2. await:

    - La palabra clave await solo puede usarse dentro de una función async.

    - Se coloca antes de una expresión que devuelve una Promesa (como una llamada a fetch() o a una función que tú creaste que retorna una Promesa).

    - Lo que hace await es "pausar" la ejecución de la función async en ese punto hasta que la Promesa se resuelva (o se rechace). Una vez que la Promesa se resuelve, await "desenvuelve" el valor de la Promesa y lo asigna a tu variable.
*/

const iniciarSesions = document.getElementById("nueva");

iniciarSesions.addEventListener("click", () => {
  let id = null;
  let userId = null;
  let completed = null;
  let title = null;

  while (!id || !userId || !completed || !title) {
    if (!userId) {
      userId = prompt("ID de la tarea:");
      if (userId === null) return;
      userId = userId.trim();
      if (userId === "") userId = null;
    }

    if (!id) {
      id = prompt("Duración en minutos:");
      if (id === null) return;
      id = id.trim();
      if (id === "") id = null;
    }

    if (!title) {
      title = prompt("Nombre de la tarea:");
      if (title === null) return;
      title = title.trim();
      if (title === "") title = null;
    }

    if (!completed) {
      completed = prompt("¿Está completado? (true/false):");
      if (completed === null) return;
      completed = completed.trim();
      if (completed === "") completed = null;
    }

  }
  const tarea = {
    id,
    userId,
    completed: completed.toLowerCase() === "true",
    title
  };
  products.push(tarea);
  displayProducts(products);
});

function eliminarTarea(title) {
  const originalLength = products.length;
  products = products.filter(producto => producto.title !== title);

  if (products.length < originalLength) {
    alert("Tarea eliminada correctamente");
    localStorage.setItem("products", JSON.stringify(products));

    displayProducts(products);
  } else {
    alert("Lo siento, no hay tareas registradas con ese título");
  }
}

