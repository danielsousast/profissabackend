import { Module } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { RatingsController } from './ratings.controller';
import { RatingsRepository } from './ratings.respository';
import { DatabaseModule } from '@app/common';
import { RatingDocument, RatingSchema } from './models/rating.model';

@Module({
  imports:[DatabaseModule,DatabaseModule.forFeature([{
    name: RatingDocument.name,
    schema: RatingSchema,
  }])],
  controllers: [RatingsController],
  providers: [RatingsService, RatingsRepository],
})
export class RatingsModule {}
