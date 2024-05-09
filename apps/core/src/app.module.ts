import { Module } from "@nestjs/common";
import { ProvidersModule } from "./providers/providers.module";
import { CategoriesModule } from './categories/categories.module';

@Module({
    imports: [
        ProvidersModule,
        CategoriesModule
    ],
    controllers: [],
    providers: [],
})

export class AppModule {}
