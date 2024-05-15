import { Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { ProvidersController } from './providers.controller';
import { DatabaseModule } from '@app/common';
import { ProvidersRepository } from './providers.respository';
import { ProviderDocument, ProviderSchema } from './models/provider.schema';
import { ContactsService } from '../contacts/contacts.service';
import { AdressesService } from '../adresses/adresses.service';
import { ContactsRepository } from '../contacts/contacts.respository';
import { AdressesRepository } from '../adresses/adresses.respository';
import { AddressDocument, AddressSchema } from '../adresses/models/address.schema';
import { ContactDocument, ContactSchema } from '../contacts/models/contact.model';

console.log(ProviderDocument.name)

@Module({
  imports:[DatabaseModule,DatabaseModule.forFeature([{
    name: ProviderDocument.name,
    schema: ProviderSchema,
  }, {
    name: AddressDocument.name,
    schema: AddressSchema,
  }, {
    name: ContactDocument.name,
    schema: ContactSchema,
  
  }])],
  controllers: [ProvidersController],
  providers: [ProvidersService, ContactsService, AdressesService, ProvidersRepository,
    AdressesRepository, ContactsRepository
  ],
})
export class ProvidersModule {}
