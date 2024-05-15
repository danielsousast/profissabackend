import { Injectable } from '@nestjs/common';
import { CreateAdressDto } from './dto/create-adress.dto';
import { UpdateAdressDto } from './dto/update-adress.dto';
import { AdressesRepository } from './adresses.respository';

@Injectable()
export class AdressesService {
  constructor(
    private readonly adressesRepository: AdressesRepository  
  ) {}

  create(createServiceDto: CreateAdressDto) {
    return this.adressesRepository.create(createServiceDto);
  }

  findAll() {
    return this.adressesRepository.find({});
  }

  findOne(_id: string) {
    return this.adressesRepository.findOne({_id});
  }

  update(_id: string, updateServiceDto: UpdateAdressDto) {
    return this.adressesRepository.findOneAndUpdate({
      _id,
    }, {
      $set: updateServiceDto,
    });
  }

  remove(_id: string) {
    return this.adressesRepository.findOneAndDelete({_id});
  }
}
