import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { Auth } from 'src/auth/decorators';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  @Auth()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  @Auth()
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }
}
