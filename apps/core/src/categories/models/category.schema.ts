import { AbstractDocument } from "@app/common/database/abstract.schema";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({versionKey: false})
export class CategoryDocument extends AbstractDocument {
    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop({default: true})
    active: boolean;

    @Prop({default: Date.now})
    created_at: Date;

    @Prop({default: Date.now})
    updated_at: Date;
}

export const CategorySchema = SchemaFactory.createForClass(CategoryDocument);

