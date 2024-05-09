import { AbstractDocument } from "@app/common/database/abstract.schema";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({versionKey: false})
export class ContactDocument extends AbstractDocument {
    @Prop()
    value: string;

    @Prop({ enum: ['email', 'phone', 'whatsapp'] }) 
    type: string;
}

export const ContactSchema = SchemaFactory.createForClass(ContactDocument);