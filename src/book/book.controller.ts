import { Body, Controller, Delete, Get, Param, Post,Put, Req, UseGuards  } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { createBookDto } from './dto/create-book.dto';
import { updateBookDto } from './dto/update-book.dto';
import { AuthGuard } from '@nestjs/passport';
import { log } from 'console';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  @Get()
  async getAllBooks() : Promise <Book[]>{ 
    return this.bookService.findAll()

  }

  @Post()
  @UseGuards(AuthGuard())
  async createBook(@Body() book:createBookDto, @Req() req): Promise <Book> {
    console.log(req.user);
    
    return this.bookService.create(book, req.user)
  }

  @Get(':id')
  async getBook(@Param('id') id:string) : Promise <Book>{
    return this.bookService.findById(id)
  }

  @Put(':id')
  async updateBook(@Param('id') id:string , @Body() book:updateBookDto) : Promise<Book>{
    return this.bookService.updateById(id , book)
  }

  @Delete(':id')
  async deleteBook(@Param('id') id:string): Promise<Book>{
    return this.bookService.deleteById(id)
  }

}
