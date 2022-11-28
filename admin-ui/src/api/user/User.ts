import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  roles: JsonValue;
  id: number;
};
