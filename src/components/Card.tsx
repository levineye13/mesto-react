import React, { FC, ReactElement } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { ICard, IUser } from '../utils/interfaces';

interface ICardProps {
  data: ICard;
  onClick: (data: ICard) => void;
  onDelete: (data: ICard) => void;
  onLike: (data: ICard) => void;
  onDislike: (data: ICard) => void;
}

const Card: FC<ICardProps> = ({
  data,
  onClick,
  onDelete,
  onLike,
  onDislike,
}): ReactElement => {
  const currentUser: IUser = React.useContext(CurrentUserContext);

  const isOwn: boolean = currentUser._id === data.owner._id;
  const isLiked: boolean = data.likes.some(
    (like) => currentUser._id === like._id
  );

  const handleClick = (): void => {
    onClick(data);
  };

  const handleDeleteButtonClick = (
    evt: React.MouseEvent<HTMLButtonElement>
  ): void => {
    evt.stopPropagation();

    onDelete(data);
  };

  const handleLikeClick = (evt: React.MouseEvent<HTMLButtonElement>): void => {
    evt.stopPropagation();

    if (isLiked) {
      onDislike(data);
    } else {
      onLike(data);
    }
  };

  return (
    <li className="elements__item" onClick={handleClick}>
      <button
        className={`elements__delete-card ${
          isOwn ? '' : 'elements__delete-card_hidden'
        }`}
        onClick={handleDeleteButtonClick}
      />
      <img src={data.link} alt={data.name} className="elements__img" />
      <div className="elements__container">
        <h2 className="elements__title">{data.name}</h2>
        <div className="elements__group">
          <button
            className={`elements__like-button ${
              isLiked ? 'elements__like-button_active' : ''
            }`}
            onClick={handleLikeClick}
          />
          <span className="elements__like-count">{data.likes.length}</span>
        </div>
      </div>
    </li>
  );
};

export default Card;
