import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { DatabaseModule } from '@app/common';
import { ContactDocument } from './models/contact.model';

@Module({
  imports:[DatabaseModule,DatabaseModule.forFeature([{
    name: ContactDocument.name,
    schema: ContactDocument,
  }])],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
