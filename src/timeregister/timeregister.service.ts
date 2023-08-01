import { PrismaService } from "src/prisma.service";
import { Timeregister } from "./timeregiter.model"
import { Injectable } from "@nestjs/common";

@Injectable()
export class TimeregisterService {
    constructor(private prisma: PrismaService){}

    async getAllTimeregister(): Promise<Timeregister[]>{
        return this.prisma.timeregister.findMany()
    }
    async getTimeregister(id:number): Promise<Timeregister | null>{
        return this.prisma.timeregister.findUnique({where: {id:Number(id)}})
    }
    async createTimeregister(data:Timeregister): Promise<Timeregister>{
        return this.prisma.timeregister.create({
            data,
        })
    }
    async updateTimeregister(id:number, data:Timeregister): Promise<Timeregister>{
        return this.prisma.timeregister.update({
            where: {id:Number(id)},
            data:{period: data.period, date:data.date, description:data.description, userId:data.userId}
        })
    }
    async deleteTimeregister(id:number): Promise<Timeregister>{
        return this.prisma.timeregister.delete({
            where: {id:Number(id)}
        })
    }
}