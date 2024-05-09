import { AbstractDocument } from "@app/common/database/abstract.schema";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({versionKey: false})
export class ServiceDocument extends AbstractDocument {
    @Prop()
    name: string;

    @Prop()
    description: string;
}

export const ServiceSchema = SchemaFactory.createForClass(ServiceDocument);

