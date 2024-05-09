export class CreateContactDto {
    type: "email" | "phone" | "whatsapp";
    value: string;
}
