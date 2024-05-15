import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { ProviderDocument } from "./models/provider.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class ProvidersRepository extends AbstractRepository<ProviderDocument> {
    protected logger = new Logger(ProvidersRepository.name);

    constructor(
        @InjectModel(ProviderDocument.name) providerModel: Model<ProviderDocument>,
    ) {
        super(providerModel);
    }

    findByServiceId(serviceId: string) {
        return this.model.find({ services: serviceId }).exec();
    }
}