import { Module } from "@nestjs/common";
import { ProvidersModule } from "./providers/providers.module";
import { CategoriesModule } from './categories/categories.module';
import { AdressesModule } from './adresses/adresses.module';
import { ServicesModule } from './services/services.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
    imports: [
        ProvidersModule,
        CategoriesModule,
        AdressesModule,
        ServicesModule,
        ContactsModule
    ],
    controllers: [],
    providers: [],
})

export class AppModule {}
