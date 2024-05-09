import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { DatabaseModule } from '@app/common';
import { CategoryDocument, CategorySchema } from './models/category.schema';
import { CategoriesRepository } from './categories.respository';

@Module({
  imports:[DatabaseModule,DatabaseModule.forFeature([{
    name: CategoryDocument.name,
    schema: CategorySchema,
  }])],
  controllers: [CategoriesController],
  providers: [CategoriesService, CategoriesRepository],
})
export class CategoriesModule {}
