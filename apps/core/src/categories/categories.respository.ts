import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CategoryDocument } from "./models/category.schema";

@Injectable()
export class CategoriesRepository extends AbstractRepository<CategoryDocument> {
    protected logger = new Logger(CategoriesRepository.name);

    constructor(
        @InjectModel(CategoryDocument.name) categoryModel: Model<CategoryDocument>,
    ) {
        super(categoryModel);
    }
}