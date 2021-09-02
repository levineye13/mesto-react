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

export interface ICardProps {
  data: ICard;
  onClick: (data: ICard) => void;
  onDelete: (data: ICard) => void;
  onLike: (data: ICard) => void;
}
