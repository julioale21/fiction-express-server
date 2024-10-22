import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './entities/book.entity';
import { books } from './mocks/books.mock';

@Injectable()
export class BooksService {
  findAll(): Promise<Book[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(books);
      }, 1000);
    });
  }

  findOne(id: number): Book {
    const book = books.find((book) => book.id === id);

    if (!book) {
      throw new NotFoundException();
    }

    return book;
  }
}
