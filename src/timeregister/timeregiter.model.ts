import { Prisma } from "@prisma/client";

export class Timeregister implements Prisma.TimeregisterUncheckedCreateInput{
    id: number;
    period: number;
    date: Date;
    description?: string; 
    userId: number;
}