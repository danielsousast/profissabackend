import { Module } from "@nestjs/common";
import { ProvidersModule } from "./providers/providers.module";
import { AdressesModule } from './adresses/adresses.module';
import { ServicesModule } from './services/services.module';
import { ContactsModule } from './contacts/contacts.module';
import { RatingsModule } from './ratings/ratings.module';
import { ClientsModule } from './clients/clients.module';

@Module({
    imports: [
        ProvidersModule,
        AdressesModule,
        ServicesModule,
        ContactsModule,
        RatingsModule,
        ClientsModule
    ],
    controllers: [],
    providers: [],
})

export class AppModule {}
