import { Book } from '../entities/book.entity';

export const books: Book[] = [
  {
    id: 1,
    title: 'El Misterio del Bosque Encantado',
    author: 'Lucía Martínez',
    cover: '/book1.jpg',
    summary:
      'Una aventura mágica que sigue a tres amigos mientras descubren los secretos de un antiguo bosque lleno de criaturas fantásticas y misterios por resolver.',
    chapters: [
      {
        title: 'Capítulo 1: La entrada al bosque',
        pages: [
          'Era una tarde de verano cuando Ana, Pedro y Sofía decidieron explorar el viejo bosque al borde de su pueblo. Los adultos siempre les habían advertido que no se acercaran, hablando en susurros sobre extrañas luces y sonidos que provenían de sus profundidades.',
          "Mientras caminaban por el sendero que llevaba al bosque, Ana no podía evitar sentir un escalofrío de emoción. '¿Creen que realmente veremos algo extraño?', preguntó a sus amigos. Pedro, el más escéptico del grupo, se encogió de hombros. 'Probablemente solo sean historias para asustarnos', respondió.",
          "Sofía, siempre la más observadora, señaló hacia adelante. 'Miren, ¿ven cómo los árboles parecen más viejos y retorcidos a medida que avanzamos?' Los tres amigos se detuvieron un momento, contemplando la transformación gradual del paisaje a su alrededor.",
        ],
      },
      {
        title: 'Capítulo 2: El claro misterioso',
        pages: [
          "Mientras se adentraban entre los árboles centenarios, el aire parecía cambiar. Los sonidos del pueblo se desvanecieron, reemplazados por un silencio casi tangible. De repente, un destello azul captó la atención de Ana. '¡Miren!' exclamó, señalando hacia un claro cercano.",
          'Pedro y Sofía siguieron la mirada de Ana, sus ojos abriéndose con asombro. En el centro del claro, un antiguo roble se alzaba majestuoso. Sus ramas parecían moverse suavemente, a pesar de que no soplaba ni una brisa. Al acercarse, los niños notaron una pequeña puerta en la base del tronco, brillando con una luz tenue y misteriosa.',
          "Con el corazón latiendo fuertemente, Pedro extendió su mano hacia la diminuta manija dorada. '¿Deberíamos abrirla?', preguntó, su voz apenas un susurro. Sofía y Ana intercambiaron miradas, una mezcla de miedo y emoción en sus rostros. Finalmente, Ana asintió. 'Vinimos hasta aquí para una aventura, ¿no es así?'",
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Viaje al Centro de la Tierra',
    author: 'Julio Verne',
    cover: '/book2.jpg',
    summary:
      'Una emocionante expedición al interior de nuestro planeta, llena de peligros, descubrimientos asombrosos y aventuras sin igual.',
    chapters: [
      {
        title: 'Capítulo 1: El manuscrito misterioso',
        pages: [
          'El profesor Lidenbrock era conocido en toda Hamburgo por su carácter excéntrico y su pasión por la geología. Aquel día de mayo de 1863, regresó a casa con un antiguo manuscrito bajo el brazo, sus ojos brillando con una emoción apenas contenida.',
          "Axel, su sobrino y asistente, observó con curiosidad cómo el profesor examinaba el pergamino con manos temblorosas. '¡Axel, muchacho, ven a ver esto!', exclamó Lidenbrock. 'Este manuscrito podría ser la clave de uno de los mayores misterios de la Tierra'.",
          'El manuscrito, escrito por un alquimista islandés del siglo XVI, contenía un mensaje cifrado que prometía revelar el camino hacia el centro de la Tierra. Lidenbrock y Axel se sumergieron en la tarea de descifrarlo, trabajando día y noche.',
        ],
      },
      {
        title: 'Capítulo 2: El mensaje descifrado',
        pages: [
          "Tras días de frustración, Axel logró descifrar el mensaje: 'Desciende por el cráter del Yocul de Sneffels que la sombra del Scartaris acaricia antes de las calendas de Julio, audaz viajero, y llegarás al centro de la Tierra'. El profesor no cabía en sí de gozo.",
          "'¡Lo hemos logrado, Axel!', gritó Lidenbrock, dando saltos de alegría por toda la habitación. '¡Tenemos el mapa para llegar al centro de la Tierra!' Axel, sin embargo, no compartía el entusiasmo de su tío. La idea de aventurarse en las profundidades de la Tierra le llenaba de temor.",
          'Sin perder tiempo, Lidenbrock comenzó a hacer preparativos para el viaje. Mapas, instrumentos científicos, provisiones... todo debía ser cuidadosamente seleccionado para la expedición. Axel observaba con una mezcla de fascinación y aprensión, sabiendo que pronto se embarcarían en una aventura que cambiaría sus vidas para siempre.',
        ],
      },
    ],
  },
];
