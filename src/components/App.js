import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmDeleteCardPopup from './ConfirmDeleteCardPopup';
import { api } from './../utils/api';
import { CurrentUserContext } from './../contexts/CurrentUserContext';
import avatarImg from './../images/profile__avatar.jpg';

const App = function () {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [removableCard, setRemovableCard] = useState(null);

  //Дефолтная инициализация в случае невыполнения запроса к api.
  const [currentUser, setCurrentUser] = useState({
    avatar: avatarImg,
    name: 'Name',
    about: 'Information about you',
  });

  /**
   * Обработчик открытия попапа редактирования профиля.
   */
  const handleEditProfileClick = function () {
    setEditProfilePopupOpen(true);
  };

  /**
   * Обработчик открытия попапа добавления карточки.
   */
  const handleAddPlaceClick = function () {
    setAddPlacePopupOpen(true);
  };

  /**
   * Обработчик открытия попапа редактирования аватара.
   */
  const handleEditAvatarClick = function () {
    setEditAvatarPopupOpen(true);
  };

  /**
   * Обработчик закрытия попапов.
   */
  const closeAllPopups = function () {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setConfirmPopupOpen(false);
    setSelectedCard(null);
  };

  /**
   * Обработчик клика по карточке.
   */
  const handleCardClick = function (card) {
    setSelectedCard(card);
  };

  const handleDeleteButtonClick = function (card) {
    setConfirmPopupOpen(true);
    setRemovableCard(card);
  };

  const handleUpdateUser = function ({ name, about }) {
    api
      .setUserInfo({ name, about })
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((error) => console.error(error));
  };

  const handleUpdateAvatar = function ({ avatar }) {
    api
      .updateUserAvatar(avatar)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((error) => console.error(error));
  };

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
        closeAllPopups();
      })
      .catch((error) => console.error(error));
  };

  const handleAddPlaceSubmit = function ({ name, link }) {
    api
      .addCard({ name, link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
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

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        if (userData) {
          setCurrentUser(userData);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onDeleteButtonClick={handleDeleteButtonClick}
            cards={cards}
            onCardLike={handleCardLike}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />
          <ConfirmDeleteCardPopup
            isOpen={isConfirmPopupOpen}
            onClose={closeAllPopups}
            onDeleteCard={handleCardDelete}
            card={removableCard}
          />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
