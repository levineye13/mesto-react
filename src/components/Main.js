import React from 'react';
import { api } from './../utils/api';
import Card from './Card';
import { CurrentUserContext } from './../contexts/CurrentUserContext';

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onClickDeleteButton,
}) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);
  //const { avatar, name, about } = currentUser;

  /**
   * Отрисовка первоначальных данных при монтировании компонента.
   * Используется Promise.allSettled, чтобы при ошибке одного из
   * промисов выполнился другой.
   */
  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cardData) => {
        console.log(cardData[0]);
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
                onClickDeleteButton={onClickDeleteButton}
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
