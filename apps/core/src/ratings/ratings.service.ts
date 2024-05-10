import { Injectable } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { RatingsRepository } from './ratings.respository';

@Injectable()
export class RatingsService {
  constructor(
    private readonly ratingsRepository: RatingsRepository
  ) {}

  create(createRatingDto: CreateRatingDto) {
    return this.ratingsRepository.create({...createRatingDto});
  }

  findAll() {
    return this.ratingsRepository.find({});
  }

  findOne(_id: number) {
    return this.ratingsRepository.findOne({ _id}) 
  }

  update(_id: number, updateRatingDto: UpdateRatingDto) {
    return this.ratingsRepository.findOneAndUpdate({
      _id,
    }, {
      $set: updateRatingDto,
    });
  }

  remove(_id: number) {
    return this.ratingsRepository.findOneAndDelete({_id});
  }
}
