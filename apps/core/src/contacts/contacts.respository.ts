import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ContactDocument } from "./models/contact.model";

@Injectable()
export class ContactsRepository extends AbstractRepository<ContactDocument> {
    protected logger = new Logger(ContactsRepository.name);

    constructor(
        @InjectModel(ContactDocument.name) contactModel: Model<ContactDocument>,
    ) {
        super(contactModel);
    }
}