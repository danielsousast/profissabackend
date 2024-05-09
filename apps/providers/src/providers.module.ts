import { Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { ProvidersController } from './providers.controller';
import { DatabaseModule } from '@app/common';
import { ProvidersRepository } from './providers.respository';
import { ProviderDocument, ProviderSchema } from './models/provider.schema';

@Module({
  imports:[DatabaseModule,DatabaseModule.forFeature([{
    name: ProviderDocument.name,
    schema: ProviderSchema,
  }])],
  controllers: [ProvidersController],
  providers: [ProvidersService, ProvidersRepository],
})
export class ProvidersModule {}
