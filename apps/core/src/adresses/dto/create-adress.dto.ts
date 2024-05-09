export class CreateAdressDto {
    street: string;
    number: string;
    neighborhood: string;
    complement?: string;
    city: string;
    state: string;
    country: string;
    zipcode: string;
    default: boolean;
}
