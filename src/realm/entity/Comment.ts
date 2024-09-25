import { Realm } from "@realm/react";

export class Comment extends Realm.Object<Comment> {
  _id!: Realm.BSON.ObjectId;
  text!: string;
  replyToId!: Realm.BSON.ObjectId;
  userId!: Realm.BSON.ObjectId;

  static primaryKey: "_id";
  static schema: Realm.ObjectSchema = {
    name: "Comment",
    primaryKey: "_id",
    properties: {
      _id: { type: "objectId", default: () => new Realm.BSON.ObjectId() },
      text: "string",
      replyToId: { type: "objectId", optional: true },
      userId: "objectId",
    },
  };
}
