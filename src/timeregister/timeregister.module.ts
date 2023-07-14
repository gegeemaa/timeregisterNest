import { Module } from "@nestjs/common";
import { TimeregisterController } from "./timeregister.controller";
import { TimeregisterService } from "./timeregister.service";
import { PrismaService } from "src/prisma.service";


@Module({
    controllers: [TimeregisterController],
    providers:[TimeregisterService, PrismaService]
})
export class TimeregisterModule{}