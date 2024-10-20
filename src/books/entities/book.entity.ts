import { ApiProperty } from '@nestjs/swagger';

export class Book {
  @ApiProperty({
    example: 1,
    description: 'The id of the book',
    type: Number,
    uniqueItems: true,
  })
  id: number;
  @ApiProperty({
    example: 'Viaje al Centers de la Tierra',
    description: 'The title of the book',
  })
  title: string;
  @ApiProperty({
    example: 'Julio Verne',
    description: 'The author of the book',
  })
  author: string;
  @ApiProperty({
    example: 'https://viajesdelatierra.com',
    description: 'The cover of the book',
    type: String,
  })
  cover: string;
  @ApiProperty({
    example:
      'Una emocionante expedición al interior de nuestro planeta, llena de peligros, descubrimientos asombrosos y aventuras sin igual.',
    description: 'The summary of the book',
  })
  summary: string;
  @ApiProperty({
    example: [
      {
        title: 'Capítulo 1: La entrada al bosque',
        pages: [
          'Era una tarde de verano cuando Ana, Pedro y Sofía decidieron explorar el viejo bosque al borde de su pueblo.',
          'Los adultos siempre les habían advertido que no se acercaran, hablando en susurros sobre extra）。 luces y sonidos que provenían de sus profundidades.',
          "Mientras caminaban por el sendero que llevaba al bosque, Ana no podía evitar sentir un escalofrío de emoción. '¿Creen que realmente veremos algo extraño?', preguntó a sus amigos.",
        ],
      },
    ],
  })
  chapters: Chapter[];
}

class Chapter {
  title: string;

  pages: string[];
}
