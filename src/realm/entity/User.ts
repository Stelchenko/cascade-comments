import { Realm } from "@realm/react";

export class User extends Realm.Object<User> {
  _id!: Realm.BSON.ObjectId;
  email!: string;
  userName!: string;
  password!: string;

  static primaryKey: "_id";
  static schema: Realm.ObjectSchema = {
    name: "User",
    primaryKey: "_id",
    properties: {
      _id: { type: "objectId", default: () => new Realm.BSON.ObjectId() },
      userName: "string",
      password: "string",
      email: "string",
    },
  };
}
