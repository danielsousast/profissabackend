import { AbstractDocument } from "@app/common/database/abstract.schema";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema({versionKey: false})
export class ProviderDocument extends AbstractDocument {
    @Prop({required: true})
    name: string;

    @Prop({default: true})
    active: boolean;

    @Prop({required: true})
    user_id: string;

    @Prop()
    created_at: Date;

    @Prop()
    updated_at: Date;

    @Prop({type: Types.ObjectId, ref: 'ServicesDocument', required: true})
    services: Types.ObjectId[];

    @Prop({type: Types.ObjectId, ref: 'RatingsDocument'})
    ratings: Types.ObjectId[];
}

export const ProviderSchema = SchemaFactory.createForClass(ProviderDocument);
