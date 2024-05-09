import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { DatabaseModule } from '@app/common';
import { ServiceDocument, ServiceSchema } from './models/service.model';
import { ServiceRepository } from './services.respository';

@Module({
  imports:[DatabaseModule,DatabaseModule.forFeature([{
    name: ServiceDocument.name,
    schema: ServiceSchema,
  }])],
  controllers: [ServicesController],
  providers: [ServicesService, ServiceRepository],
})
export class ServicesModule {}
