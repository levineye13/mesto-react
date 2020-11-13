import React, { useContext, useState } from 'react';
import { api } from './../utils/api';
import Card from './Card';
import { CurrentUserContext } from './../contexts/CurrentUserContext';

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardDelete,
}) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  const handleCardLike = function (card) {
    const isLiked = card.likes.some((like) => currentUser._id === like._id);

    api
      .changeLikeCardStatus(card._id, isLiked ? 'DELETE' : 'PUT')
      .then((newCard) => {
        const newCards = cards.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        );
        setCards(newCards);
      })
      .catch((error) => console.error(error));
  };

  const handleCardDelete = function (card) {
    api
      .deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter(
          (currentCard) => currentCard._id !== card._id
        );
        setCards(newCards);
      })
      .catch((error) => console.error(error));
  };

  /**
   * Отрисовка первоначальных данных при монтировании компонента.
   */
  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cardData) => {
        if (cardData) {
          setCards(cardData);
        }
      })
      .catch((err) => console.error(err));
  }, []);

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
        <ul className="elements__list">
          {cards.map((card) => {
            return (
              <Card
                card={card}
                onCardClick={onCardClick}
                onCardDelete={handleCardDelete}
                onCardLike={handleCardLike}
                key={card._id}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
