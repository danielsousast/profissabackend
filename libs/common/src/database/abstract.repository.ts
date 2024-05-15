import { FilterQuery, Model, Types, UpdateQuery } from "mongoose";
import { AbstractDocument } from "./abstract.schema";
import { Logger, NotFoundException } from "@nestjs/common";

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
    protected abstract readonly logger: Logger;
    constructor(protected readonly model: Model<TDocument>) {}

    async create(document: Omit<TDocument,"_id">): Promise<TDocument> {
        const createdDocument = new this.model({
            ...document,
            _id: new Types.ObjectId()
        });

        return (await createdDocument.save()).toJSON() as TDocument;
    }

    async findOne(filterQuery: FilterQuery<TDocument>): Promise<TDocument> {
        const document = await  this.model.findOne(filterQuery).lean<TDocument>(true).exec();  
        
        if(!document) {
            this.logger.warn(`Document not found with filter ${JSON.stringify(filterQuery)}`);
            throw new NotFoundException("Document not found");
        }
        return document;  
    }

    async findOneAndUpdate(
        filterQuery: FilterQuery<TDocument>,
        update: UpdateQuery<TDocument>,
    ): Promise<TDocument> {
        const document = await  this.model.findOneAndUpdate(filterQuery, update, {
            new: true,
        }).lean<TDocument>(true).exec();  
        
        if(!document) {
            this.logger.warn(`Document not found with filter ${JSON.stringify(filterQuery)}`);
            throw new NotFoundException("Document not found");
        }
        return document;  
    }

    async find(filterQuery: FilterQuery<TDocument>): Promise<TDocument[]> {
        console.log("filterQuery", filterQuery)
        const documents = await  this.model.find(filterQuery).lean<TDocument[]>(true).exec();  
        return documents; 
    }

    async findOneAndDelete(filterQuery: FilterQuery<TDocument>): Promise<TDocument> {
        const document = await  this.model.findByIdAndDelete(filterQuery).lean<TDocument>(true).exec();  
        
        if(!document) {
            this.logger.warn(`Document not found with filter ${JSON.stringify(filterQuery)}`);
            throw new NotFoundException("Document not found");
        }
        return document;  
    } 
}