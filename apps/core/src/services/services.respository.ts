import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ServiceDocument } from "./models/service.model";

@Injectable()
export class ServiceRepository extends AbstractRepository<ServiceDocument> {
    protected logger = new Logger(ServiceRepository.name);

    constructor(
        @InjectModel(ServiceDocument.name) serviceModel: Model<ServiceDocument>,
    ) {
        super(serviceModel);
    }
}