import { ApiProperty } from '@nestjs/swagger';
import { ContactDto } from './contact.dto';
import { AddressDto } from './address.dto';

export class CreateProviderDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    services: any[];
    @ApiProperty()
    userId: string
    @ApiProperty({ type: [ContactDto] })
    contacts: ContactDto[];
    @ApiProperty({ type: [AddressDto] })
    adresses: AddressDto[];
}

