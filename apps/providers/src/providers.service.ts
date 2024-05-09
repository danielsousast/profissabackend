import { Injectable } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { ProvidersRepository } from './providers.respository';

@Injectable()
export class ProvidersService {
  constructor(private readonly providersRepository: ProvidersRepository) { }

  create(createProviderDto: CreateProviderDto) {
    return this.providersRepository.create({
      ...createProviderDto,
      status: 'active',
    });
  }

  findAll() {
    return this.providersRepository.find({});
  }

  findOne(_id: string) {
    return this.providersRepository.findOne({ _id });
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
}
