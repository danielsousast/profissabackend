import { AbstractDocument } from "@app/common/database/abstract.schema";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema({versionKey: false})
export class ProviderDocument extends AbstractDocument {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    phone: string;

    @Prop({default: true})
    active: boolean;

    @Prop()
    created_at: Date;

    @Prop()
    updated_at: Date;

    @Prop({type: Types.ObjectId, ref: 'AdressDocument'})
    addresses: Types.ObjectId[];

    @Prop({type: Types.ObjectId, ref: 'CategoryDocument'})
    categories: Types.ObjectId[];

    @Prop({type: Types.ObjectId, ref: 'ContactsDocument'})
    contacts: Types.ObjectId[];

    @Prop({type: Types.ObjectId, ref: 'RatingsDocument'})
    ratings: Types.ObjectId[];
}

export const ProviderSchema = SchemaFactory.createForClass(ProviderDocument);
