import { AbstractDocument } from "@app/common/database/abstract.schema";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema({versionKey: false})
export class RatingDocument extends AbstractDocument {
    @Prop()
    comment: string;

    @Prop()
    score: string;

    @Prop({default: Date.now})
    created_at?: Date;

    @Prop({default: Date.now})
    updated_at?: Date;

    @Prop({type: Types.ObjectId, ref: 'ProviderDocument'})
    providerId: Types.ObjectId;

    @Prop({type: Types.ObjectId, ref: 'UserDocument'})
    userId: Types.ObjectId;
}

export const RatingSchema = SchemaFactory.createForClass(RatingDocument);

