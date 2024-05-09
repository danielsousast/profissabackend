import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoriesRepository } from './categories.respository';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepository: CategoriesRepository) { }

  create(createCategoryDto: CreateCategoryDto) {
    return this.categoriesRepository.create(createCategoryDto)
  }

  findAll() {
    return this.categoriesRepository.find({})
  }

  findOne(_id: string) {
    return this.categoriesRepository.findOne({ _id })
  }

  update(_id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesRepository.findOneAndUpdate({
      _id,
    }, {
      $set: updateCategoryDto,
    });
  }

  remove(_id: string) {
    return this.categoriesRepository.findOneAndDelete({ _id })
  }
}
