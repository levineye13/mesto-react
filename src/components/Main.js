import React from 'react';
import { api } from './../utils/api';
import Card from './Card';
import avatar from './../images/profile__avatar.jpg';

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onClickDeleteButton,
}) {
  const [userAvatar, setUserAvatar] = React.useState(avatar);
  const [userName, setUserName] = React.useState('Olezha');
  const [userDescription, setUserDescription] = React.useState('NedoJunior');
  const [cards, setCards] = React.useState([]);

  /**
   * Отрисовка первоначальных данных при монтировании компонента.
   * Используется Promise.allSettled, чтобы при ошибке одного из
   * промисов выполнился другой.
   */
  React.useEffect(() => {
    api
      .getAllInitialData()
      .then((dataArray) => {
        return dataArray.map((item) => item.value);
      })
      .then((initialData) => {
        const [userInfo, cardData] = initialData;
        /**
         * Если промис не вернул данные, переменная равна undefined, то не меняем стейт-переменные.
         */
        if (userInfo) {
          setUserName(userInfo.name);
          setUserDescription(userInfo.about);
          setUserAvatar(userInfo.avatar);
        }
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
          <img src={userAvatar} alt={userName} className="profile__avatar" />
          <button
            className="profile__update-button"
            type="button"
            onClick={onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button className="profile__edit-button" onClick={onEditProfile} />
          <p className="profile__subtitle">{userDescription}</p>
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
