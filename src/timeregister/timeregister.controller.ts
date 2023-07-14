import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Timeregister } from "./timeregiter.model";
import { TimeregisterService } from "./timeregister.service";

@Controller('api/v1/timeregister')
export class TimeregisterController{
    constructor(private readonly timeregisterService: TimeregisterService){}

    @Get()
    async getAllTimeregister():Promise<Timeregister[]>{
        return this.timeregisterService.getAllTimeregister()
    }
    @Post()
    async postTimeregister(@Body() timeregisterData: Timeregister):Promise<Timeregister>{
        return this.timeregisterService.createTimeregister(timeregisterData)
    }
    @Get(':id')
    async getTimeregister(@Param('id') id: number):Promise<Timeregister | null>{
        return this.timeregisterService.getTimeregister(id)
    }
    @Delete(':id')
    async deleteTimeregister(@Param('id') id: number):Promise<Timeregister >{
        return this.timeregisterService.deleteTimeregister(id)
    }
    @Put(':id')
    async updateTimeregister(@Param('id') id: number, @Body() timeregisterData: Timeregister):Promise<Timeregister >{
        return this.timeregisterService.updateTimeregister(id,timeregisterData)
    }

}