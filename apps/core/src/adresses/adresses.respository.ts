import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AddressDocument } from "./models/address.schema";

@Injectable()
export class AdressesRepository extends AbstractRepository<AddressDocument> {
    protected logger = new Logger(AdressesRepository.name);

    constructor(
        @InjectModel(AddressDocument.name) adressModel: Model<AddressDocument>,
    ) {
        super(adressModel);
    }
}