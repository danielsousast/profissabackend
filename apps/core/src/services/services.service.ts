import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ServiceRepository } from './services.respository';

@Injectable()
export class ServicesService {
  constructor(
    private readonly serviceRepository: ServiceRepository  
  ) {}

  create(createServiceDto: CreateServiceDto) {
    return this.serviceRepository.create(createServiceDto);
  }

  findAll() {
    return this.serviceRepository.find({});
  }

  findOne(_id: string) {
    return this.serviceRepository.findOne({_id});
  }

  update(_id: string, updateServiceDto: UpdateServiceDto) {
    return this.serviceRepository.findOneAndUpdate({
      _id,
    }, {
      $set: updateServiceDto,
    });
  }

  remove(_id: string) {
    return this.serviceRepository.findOneAndDelete({_id});
  }
}
