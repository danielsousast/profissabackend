import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { RatingDocument } from "./models/rating.model";

@Injectable()
export class RatingsRepository extends AbstractRepository<RatingDocument> {
    protected logger = new Logger(RatingsRepository.name);

    constructor(
        @InjectModel(RatingDocument.name) ratingsModel: Model<RatingDocument>,
    ) {
        super(ratingsModel);
    }
}