import { Module } from '@nestjs/common';
import { AdressesService } from './adresses.service';
import { AdressesController } from './adresses.controller';
import { AddressDocument, AddressSchema } from './models/address.schema';
import { DatabaseModule } from '@app/common';
import { AdressesRepository } from './adresses.respository';

@Module({
  imports:[DatabaseModule,DatabaseModule.forFeature([{
    name: AddressDocument.name,
    schema: AddressSchema,
  }])],
  controllers: [AdressesController],
  providers: [AdressesService, AdressesRepository],
})
export class AdressesModule {}
