import { ApiProperty } from "@nestjs/swagger";

enum ContactType {
    PHONE = 'phone',
    WHATSAPP = 'whatsapp',
    EMAIL = 'email',
}

export class ContactDto {
    @ApiProperty({ enum: ContactType})
    type: ContactType;

    @ApiProperty()
    value: string;
}
