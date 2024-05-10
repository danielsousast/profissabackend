export class CreateProviderDto {
    name: string;
    email: string;
    phone: string;
    created_at: Date;
    updated_at: Date;
    addresses: any[];
    category: any;
    authId: string
}
