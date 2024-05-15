import { Injectable } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { ProvidersRepository } from './providers.respository';
import { ContactsService } from '../contacts/contacts.service';
import { AdressesService } from '../adresses/adresses.service';

@Injectable()
export class ProvidersService {
  constructor(private readonly providersRepository: ProvidersRepository,
    private readonly contactsService: ContactsService,
    private readonly adressesService: AdressesService,
  ) { }

  async create(createProviderDto: CreateProviderDto) {

    const provider = await this.providersRepository.create({
      ...createProviderDto,
      active: false,
      user_id: '123',
      created_at: undefined,
      updated_at: undefined,
      ratings: []
    });
    const contacts = createProviderDto.contacts?.map(contact => ({
      ...contact,
      provider_id: provider._id
    }))
    const adresses = createProviderDto.adresses?.map(adress => ({
      ...adress,
      provider_id: provider._id
    }))


    for (const contact of contacts) {
      this.contactsService.create(contact);
    }

    for (const adress of adresses) {
      this.adressesService.create(adress);
    }

    return provider;
  }

  findAll() {
    return this.providersRepository.find({});
  }

  async findOne(_id: string) {
    const [provider, contacts, adresses] = await Promise.all([
      this.providersRepository.findOne({ _id }),
      this.contactsService.findByProvider(_id),
      this.adressesService.findByProvider(_id)
    ]);

    return {
      ...provider,
      contacts,
      adresses
    }
  }

  update(id: string, updateProviderDto: UpdateProviderDto) {
    return this.providersRepository.findOneAndUpdate({
      _id: id,
    }, {
      $set: updateProviderDto,
    });
  }

  remove(_id: string) {
    return this.providersRepository.findOneAndDelete({
      _id
    });
  }

  findByService(service: string) {
    return this.providersRepository.findByServiceId(service);
  }
}
