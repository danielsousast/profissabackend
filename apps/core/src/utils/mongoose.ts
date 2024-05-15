import { Types } from "mongoose";

export function convertToValidObjectId(id: any): Types.ObjectId | null {
    if (Types.ObjectId.isValid(id)) {
      return Types.ObjectId.createFromHexString(id);
    } else {
      return null;
    }
  }