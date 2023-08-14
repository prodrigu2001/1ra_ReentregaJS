let nombre = prompt("Ingresá tu nombre");

if (nombre == "") {
    alert("No ingresaste tu nombre");
    prompt("Ingresá tu nombre")
} else {
    alert("Bienvenido! " + nombre)
}

let respuesta = "1";
let comenzar = false;
function ingreso() {
    for (let i = 2; i >= 0; i--) {
        let ingresoRespuesta = prompt("Vamos a hacerte algunas preguntas. Respondé solo por SI o NO. Comenzamos? \n1 - SI \n2 - NO")
        if (ingresoRespuesta == respuesta) {
            alert("Bienvenido Nuevamente!")
            comenzar = true;
            break;
        } else {
            alert("Gracias por participar! Una gran propuesta requiere de un SI.")
        }
    }
}

ingreso()

if (comenzar) {
    let inicioCuestionario = prompt("Alguna vez te invitaron a un babyshower? \n1 - SI \n2 - NO \nx - SALIR");
    let respuesta1 = 1
    if(inicioCuestionario == "1") {
        while (inicioCuestionario != "x") {
            let pregunta1 = prompt("Viste al futuro padre celebrar solo con familiares y amigas de tu esposa/pareja, rodeado de globos y tonos pastel? \n1 - SI \n2 - NO")
            if (pregunta1 == respuesta1) {
                alert("Estás empatizando con su dolor...")
            } else {
                alert("Tal vez no seas digno de tus amigos")
            }
            let pregunta2 = prompt("Lo viste poner cara de sorpresa cada cinco minutos al recibir el ajuar, las mamaderas y los peluches del bebé? \n1 - SI \n2 - NO")
            if (pregunta2 == respuesta1) {
                alert("Estás viendo el futuro...")
            } else {
                alert("No tenés sensibilidad!")
            }
            let pregunta3 = prompt("Notaste que sólo le permitian participar para asegurarse que los invitados hayan probado los bocaditos veggie o el último cocktail de pera, sandía y mango? (sin alcohol por supuesto...) \n1 - SI \n2 - NO")
            if (pregunta3 == respuesta1) {
                alert("Cuanto talento desperdiciado...")
            } else {
                alert("Cuanta dominación...")
            }
            let pregunta4 = prompt("Te horrorizaste al ver que las opciones del menú eran: Cupcakes de Arándanos, Huevos Rellenos, Cakepops, Mini Vasos de Yoghurt y Fruta, Brochettes de Pepino y Manzana Verde... y Limonada de Jengibre con Edulcorante? \n1 - SI \n2 - NO")
            if (pregunta4 == respuesta1) {
                alert("Tranquilo, no todo es color de rosa. Te acercamos una propuesta diferente para que festejes con TUS AMIGOS...")
                alert("Desde hoy, vas a festejar la paternidad con BIRRASHOWER!!!")
            } else {
                alert("Tranquilo igual. Todo el mundo merece una 2da oportunidad. Incluso vos...")
            }
    
    
            inicioCuestionario = prompt("Ya conociste nuestra propuesta. Podés salir si queres... \n1 - SI \n2 - NO \nx - SALIR");
        }
    } else {
        alert("Seguro?? Tal vez no lo recuerdes... Tal vez algún amigo fue y te conto. Poné a prueba tu memoria!")
    }
   
}