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

    @Prop()
    status: string;

    @Prop()
    created_at: Date;

    @Prop()
    updated_at: Date;

    @Prop()
    addresses: Types.ObjectId[];

    @Prop()
    category: Types.ObjectId;
}

export const ProviderSchema = SchemaFactory.createForClass(ProviderDocument);
