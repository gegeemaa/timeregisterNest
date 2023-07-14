import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Book } from "./book.model";
import { BookService } from "./book.service";

@Controller('api/v1/book')
export class BookController{
    constructor(private readonly bookService: BookService){}

    @Get()
    async getAllBook():Promise<Book[]>{
        return this.bookService.getAllBook()
    }
    @Post()
    async postBook(@Body() postData: Book):Promise<Book>{
        return this.bookService.createBook(postData)
    }
    @Get(':id')
    async getBook(@Param('id') id: number):Promise<Book | null>{
        return this.bookService.getBook(id)
    }
    @Delete(':id')
    async deleteBook(@Param('id') id: number):Promise<Book >{
        return this.bookService.deleteBook(id)
    }
    @Put(':id')
    async updateBook(@Param('id') id: number, @Body() postData: Book):Promise<Book >{
        return this.bookService.updateBook(id,postData)
    }

}