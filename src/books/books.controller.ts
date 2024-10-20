import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { Auth } from 'src/auth/decorators';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Book } from './entities/book.entity';

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  @Auth()
  @ApiResponse({
    status: 200,
    description: 'Get all books',
    type: [Book],
  })
  @ApiResponse({
    status: 401,
    description: 'User is not logged in',
  })
  @ApiResponse({
    status: 403,
    description: 'User does not have permission',
  })
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  @Auth()
  @ApiResponse({
    status: 200,
    description: 'Get all books',
    type: Book,
  })
  @ApiResponse({
    status: 401,
    description: 'User is not logged in',
  })
  @ApiResponse({
    status: 403,
    description: 'User does not have permission',
  })
  @ApiResponse({
    status: 404,
    description: 'Book not found',
  })
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }
}
