import { AbstractDocument } from "@app/common/database/abstract.schema";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({versionKey: false})
export class CategoryDocument extends AbstractDocument {
    @Prop()
    name: string;

    @Prop()
    description: string;
}

export const CategorySchema = SchemaFactory.createForClass(CategoryDocument);

