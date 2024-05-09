import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { DatabaseModule } from '@app/common';
import { ContactDocument, ContactSchema } from './models/contact.model';
import { ContactsRepository } from './contacts.respository';

@Module({
  imports:[DatabaseModule,DatabaseModule.forFeature([{
    name: ContactDocument.name,
    schema: ContactSchema,
  }])],
  controllers: [ContactsController],
  providers: [ContactsService, ContactsRepository],
})
export class ContactsModule {}
