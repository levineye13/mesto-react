export interface IUser {
  readonly _id: string;
  readonly name: string;
  readonly about: string;
  readonly avatar: string;
}

export interface ICard {
  readonly _id: string;
  readonly name: string;
  readonly link: string;
  readonly likes: IUser[];
  readonly owner: IUser;
}
