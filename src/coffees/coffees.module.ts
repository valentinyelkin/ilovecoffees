import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';
// import { COFFEE_BRANDS } from './coffees.constants';
// import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    ConfigModule.forFeature(coffeesConfig),
  ],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    // {
    //   provide: ConfigService,
    //   useValue: process.env.NODE_EMV === 'development' ? DevConfigService : ProdConfigService,
    // },
    // {
    //   provide: COFFEE_BRANDS,
    //   useFactory: async (connection: Connection) => {
    //     return await Promise.resolve(['buddy brew', 'nescafe']);
    //   },
    //   inject: [Connection],
    // },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
