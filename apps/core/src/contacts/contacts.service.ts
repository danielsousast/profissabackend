import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './contacts.respository';

@Injectable()
export class ContactsService {
  constructor(
    private readonly contactRepository: ContactsRepository
  ) {}
  create(createContactDto: CreateContactDto) {
    return  this.contactRepository.create(createContactDto);
  }

  findAll() {
    return this.contactRepository.find({});
  }

  findOne(_id: string) {
    return this.contactRepository.findOne({_id});
  }

  update(_id: string, updateContactDto: UpdateContactDto) {
    return this.contactRepository.findOneAndUpdate({
      _id,
    }, {
      $set: updateContactDto,
    });
  }

  remove(_id: string) {
    return this.contactRepository.findOneAndDelete({_id});
  }
}
