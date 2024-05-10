import { AbstractDocument } from "@app/common/database/abstract.schema";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({versionKey: false})
export class ClientDocument extends AbstractDocument {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    phone: string;

    @Prop()
    created_at: Date;

    @Prop()
    updated_at: Date;
}

export const ClientSchema = SchemaFactory.createForClass(ClientDocument);
