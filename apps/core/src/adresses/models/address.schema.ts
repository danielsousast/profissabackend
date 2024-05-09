import { AbstractDocument } from "@app/common/database/abstract.schema";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

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

    @Prop()
    default: boolean;
}

export const AddressSchema = SchemaFactory.createForClass(AddressDocument);

