import { AbstractDocument } from "@app/common/database/abstract.schema";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema({versionKey: false})
export class ContactDocument extends AbstractDocument {
    @Prop()
    value: string;

    @Prop({ enum: ['email', 'phone', 'whatsapp'] }) 
    type: string;

    @Prop({type: Types.ObjectId, ref: 'ProviderDocument'})
    provider_id: Types.ObjectId;
}

export const ContactSchema = SchemaFactory.createForClass(ContactDocument);