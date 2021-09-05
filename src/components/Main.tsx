import React, { useContext, FC, ReactElement } from 'react';

import List from './List';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { IUser, ICard } from '../utils/interfaces';

interface IMain {
  cards: ICard[];
  onEditProfile: () => void;
  onAddPlace: () => void;
  onEditAvatar: () => void;
  onCardClick: (card: ICard) => void;
  onDeleteButtonClick: (card: ICard) => void;
  onLike: (card: ICard) => void;
  onDislike: (card: ICard) => void;
}

const Main: FC<IMain> = ({
  cards,
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onDeleteButtonClick,
  onLike,
  onDislike,
}): ReactElement => {
  const currentUser: IUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__avatar-container">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="profile__avatar"
          />
          <button
            className="profile__update-button"
            type="button"
            onClick={onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button className="profile__edit-button" onClick={onEditProfile} />
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" onClick={onAddPlace} />
      </section>
      <section className="elements content__elements">
        <List
          className="elements__list"
          items={cards}
          render={(card: ICard) => (
            <Card
              data={card}
              onClick={onCardClick}
              onDelete={onDeleteButtonClick}
              onLike={onLike}
              onDislike={onDislike}
              key={card._id}
            />
          )}
        />
      </section>
    </main>
  );
};

export default Main;
