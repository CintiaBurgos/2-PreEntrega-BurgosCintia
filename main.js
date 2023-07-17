
 // Declaración de clases

class Servicio {
    constructor(nombre, email) {
      this.nombre = nombre;
      this.email = email;
    }
  }
  
  class Marketing extends Servicio {
    constructor(nombre, email) {
      super(nombre, email);
      this.tipoPublicidad = "";
      this.plataformaPago = "";
      this.redesSociales = [];
    }
  
    seleccionarTipoPublicidad(tipo) {
      this.tipoPublicidad = tipo;
    }
  
    seleccionarPlataformaPago(plataforma) {
      this.plataformaPago = plataforma;
    }
  
    agregarRedSocial(redSocial) {
      this.redesSociales.push(redSocial);
    }
  
    obtenerPresupuesto() {
      // Lógica para obtener el presupuesto según el tipo de publicidad y plataforma de pago
      // ...
      return "Presupuesto obtenido";
    }
  }
  
  class Curso {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  class Pedido {
    constructor(producto, precio, cantidad) {
      this.producto = producto;
      this.precio = precio;
      this.cantidad = cantidad;
      this.subTotal = 0;
      this.total = 0;
    }
  
    calcularSubTotal() {
      this.subTotal = this.precio * this.cantidad;
    }
  
    calcularTotal() {
      this.total = this.subTotal;
    }
  }
  
  // Declaración de funciones
  
  // Función saludar
  const saludar = () => {
    return "Bienvenido a CB Marketing Digital";
  };
  
  console.log(saludar()); // => "Bienvenido a CB Marketing Digital"
  
  // Función para mostrar un mensaje en la consola
  const decirMensaje = (mensaje) => {
    alert(mensaje);
  };
  
  // Función para mostrar un mensaje en un prompt
  const mostrarMensaje = (mensaje) => {
    return prompt(mensaje);
  };
  
  // Función para validar el formato de un email
  const validarEmailFormato = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  // Función para validar un email
  const validarEmail = () => {
    let email;
    let emailValido;
  
    do {
      email = mostrarMensaje(
        "Por favor, ingresa tu dirección de correo electrónico para enviarte la información"
      );
      emailValido = validarEmailFormato(email);
  
      if (!emailValido) {
        mostrarMensaje("Email inválido. Por favor, ingresa un email válido.");
      }
    } while (!emailValido);
  
    return email;
  };
  
  //Función para validar las redes sociales para la publicidad paga
  const validarRedesSociales = (redesSociales) => {
    const opcionesValidas = [
      "instagram",
      "facebook",
      "tiktok",
      "twitter",
      "whatsapp",
    ];
    const redesElegidas = redesSociales
      .toLowerCase()
      .split(",")
      .map((r) => r.trim());
  
    const redesInvalidas = redesElegidas.filter(
      (redSocial) => !opcionesValidas.includes(redSocial)
    );
    if (redesInvalidas.length > 0) {
      mostrarMensaje(`Redes sociales inválidas: ${redesInvalidas.join(", ")}`);
      return false;
    }
  
    return true;
  };
  
  // Función para mostrar opciones de servicios
  const mostrarOpcionesServicios = () => {
    mostrarMensaje(
      "Por favor, elige el servicio sobre el que deseas consultar: auditoría, marketing, desarrollo web, cursos"
    );
  };
  
  // Función para mostrar opciones de publicidad paga
  const mostrarOpcionesPublicidadPaga = () => {
    mostrarMensaje(
      "Por favor, elige la plataforma para la publicidad paga: Google, redes sociales"
    );
  };
  
  // Función para mostrar opciones de redes sociales
  const mostrarOpcionesRedesSociales = () => {
    mostrarMensaje(
      "Por favor, elige las redes sociales para la publicidad paga: instagram, facebook, tik tok, twitter, whatsapp (separadas por comas)"
    );
  };
  
  // Función para obtener el presupuesto según los servicios seleccionados
  const obtenerPresupuesto = (servicio) => {
    if (servicio instanceof Marketing) {
      if (servicio.tipoPublicidad === "organica") {
        // Lógica para obtener presupuesto de publicidad orgánica
        decirMensaje(
          "Te enviaremos un presupuesto sobre las opciones de publicidad orgánica que tenemos. ¡Gracias!"
        );
      } else if (servicio.tipoPublicidad === "paga") {
        if (servicio.plataformaPago === "google") {
          mostrarMensaje("Has elegido publicidad paga en Google");
        } else if (servicio.plataformaPago === "redes sociales") {
          mostrarMensaje(
            `Redes sociales elegidas: ${servicio.redesSociales.join(", ")}`
          );
          decirMensaje(
            "Te enviaremos un presupuesto sobre tu elección. ¡Gracias!"
          );
        }
      }
    } else if (servicio instanceof Servicio) {
      // Lógica para obtener presupuesto según el servicio seleccionado
      decirMensaje(
        `Te enviaremos un presupuesto sobre el servicio de ${servicio.nombre}. ¡Gracias!`
      );
    }
  };
  


// Simulación de precios para los cursos 
const cursos = [
    new Curso("Facebook Ads", 2000),
    new Curso("Instagram Ads", 1800),
    new Curso("TikTok Ads", 1500),
    new Curso("Google Ads", 2500),
    new Curso("Generación de Contenido", 1200),
  ];
  
  // Función para mostrar los cursos disponibles con sus precios 
  const mostrarCursosDisponibles = () => {
    let cursosDisponibles = "Los cursos disponibles son:\n";
    cursos.forEach((curso, index) => {
      cursosDisponibles += `${index + 1}: ${curso.nombre} ($${curso.precio})\n`;
    });
    decirMensaje(cursosDisponibles);
  };
  
  // Función para comprar cursos 
  const comprarCursos = () => {
    mostrarCursosDisponibles();
  
    let cursoSeleccionado = [];
    let cursosElegidos;
    do {
      cursosElegidos = prompt(
        "Ingresa el número de los cursos que deseas comprar (separados por coma)"
      );
  
      if (cursosElegidos === null) {
        // El usuario cancela la compra
        decirMensaje("Compra cancelada.");
        return;
      }
  
      cursoSeleccionado = cursosElegidos
        .split(",")
        .map((cursoId) => parseInt(cursoId.trim()))
        .filter((id) => id >= 1 && id <= cursos.length);
      
      if (cursoSeleccionado.length === 0) {
        decirMensaje("Selección inválida. Por favor, ingresa números válidos de cursos.");
      }
    } while (cursoSeleccionado.length === 0);
  
    let confirmacion = confirm(
      "Los cursos que elegiste son:\n" +
        cursoSeleccionado.map((id) => cursos[id - 1].nombre).join(", ") +
        "\n¿Confirmar la compra?"
    );
  
    if (confirmacion) {
      let metodoPago;
      do {
        metodoPago = prompt(
          "Elige el método de pago:\n1. Efectivo\n2. Tarjeta"
        );
      } while (metodoPago !== "1" && metodoPago !== "2");
  
      let totalAPagar = cursoSeleccionado.reduce(
        (total, id) => total + cursos[id - 1].precio,
        0
      );
  
      if (metodoPago === "1") {
        // Efectivo (descuento del 5%)
        totalAPagar *= 0.95;
      } else {
        // Tarjeta (recargo del 5%)
        totalAPagar *= 1.05;
      }
  
      decirMensaje(
        `El total a pagar es: $${totalAPagar.toFixed(2)}.\nGracias por tu compra.`
      );
    }
  };
  
  // Empieza el programa con un saludo
  decirMensaje(saludar());
  
  let opcion;
  do {
    opcion = mostrarMensaje(
      "¿Qué deseas hacer?\n1. Obtener información general sobre nuestros servicios\n2. Solicitar un presupuesto detallado\n3. Comprar un curso"
    );
  } while (!["1", "2", "3"].includes(opcion));
  
  if (opcion === "1") {
    decirMensaje(
      "¡Gracias por tu interés! Te enviaremos información general a tu correo electrónico."
    );
    validarEmail();
  } else if (opcion === "2") {
    const servicio = new Servicio(
      mostrarMensaje(
        "Por favor, elige el servicio sobre el que deseas recibir un presupuesto: auditoría, marketing, desarrollo web"
      ),
      validarEmail()
    );
    obtenerPresupuesto(servicio);
  } else if (opcion === "3") {
    comprarCursos();
  }

