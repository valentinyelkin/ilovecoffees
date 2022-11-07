import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { CeffeesService } from './ceffees/ceffees.service';

@Module({
  imports: [],
  controllers: [AppController, CoffeesController],
  providers: [AppService, CeffeesService],
})
export class AppModule {}
