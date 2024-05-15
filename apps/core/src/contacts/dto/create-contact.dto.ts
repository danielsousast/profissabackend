import { Types } from "mongoose";

export class CreateContactDto {
    type: "email" | "phone" | "whatsapp";
    value: string;
    provider_id: Types.ObjectId;
}
