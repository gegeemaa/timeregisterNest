import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { TimeregisterModule } from './timeregister/timeregister.module';

@Module({
  imports: [BookModule, TimeregisterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
