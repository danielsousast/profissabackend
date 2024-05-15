import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class AddressDto {
  @ApiPropertyOptional()
  street: string;
  @ApiPropertyOptional()
  number: string;
  @ApiPropertyOptional()
  neighborhood: string;
  @ApiPropertyOptional()
  complement?: string;
  @ApiProperty()
  city: string;
  @ApiProperty()
  state: string;
  @ApiPropertyOptional()
  country: string;
  @ApiPropertyOptional()
  zipcode: string;
  @ApiPropertyOptional()
  default: boolean;
  }
