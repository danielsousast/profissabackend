import { AbstractDocument } from "@app/common/database/abstract.schema";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema({versionKey: false})
export class AddressDocument extends AbstractDocument {
    @Prop()
    street: string;

    @Prop()
    number: string;

    @Prop()
    complement?: string;

    @Prop()
    neighborhood: string;

    @Prop()
    city: string;

    @Prop()
    state: string;

    @Prop({type: Types.ObjectId, ref: 'ProviderDocument'})
    provider_id: Types.ObjectId;

    @Prop()
    default: boolean;
}

export const AddressSchema = SchemaFactory.createForClass(AddressDocument);

