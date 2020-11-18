import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmDeleteCardPopup from './ConfirmDeleteCardPopup';
import { api } from './../utils/api';
import { CurrentUserContext } from './../contexts/CurrentUserContext';
import Loader from './Loader';
import avatarImg from './../images/profile__avatar.jpg';

const App = function () {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [removableCard, setRemovableCard] = useState(null);
  const [isLoaderActive, setLoaderActive] = useState(true);

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

  const handleScreenClickClose = function (evt) {
    if (evt.target.classList.contains('popup')) {
      closeAllPopups();
    }
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

  const handleUpdateAvatar = function ({ avatar, resetInputValue }) {
    api
      .updateUserAvatar(avatar)
      .then((userData) => {
        closeAllPopups();
        setLoaderActive(true);
        setCurrentUser(userData);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoaderActive(false);
        resetInputValue();
      });
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
        closeAllPopups();
        setLoaderActive(true);
        const newCards = cards.filter(
          (currentCard) => currentCard._id !== card._id
        );
        setCards(newCards);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoaderActive(false));
  };

  const handleAddPlaceSubmit = function ({ name, link, resetInputValue }) {
    api
      .addCard({ name, link })
      .then((newCard) => {
        closeAllPopups();
        //TODO не отображается спиннер при удалении/добавлении карточки даже в slow 3g =(
        setLoaderActive(true);
        setCards([newCard, ...cards]);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoaderActive(false);
        resetInputValue();
      });
  };

  /**
   * Отрисовка первоначальных данных при монтировании компонента.
   * (Promise.allSettled)
   */
  useEffect(() => {
    api
      .getAllInitialData()
      .then((dataArray) => dataArray.map((item) => item.value))
      .then(([dataUser, dataCards]) => {
        if (dataUser) {
          setCurrentUser(dataUser);
        }
        if (dataCards) {
          setCards(dataCards);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoaderActive(false));
  }, []);

  //Обработчик закрытия попапа по клику на Escape
  useEffect(() => {
    const handleEscClickClose = function (evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    };

    document.addEventListener('keydown', handleEscClickClose);

    return () => {
      document.removeEventListener('keydown', handleEscClickClose);
    };
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
            onScreenClickClose={handleScreenClickClose}
            onUpdateUser={handleUpdateUser}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onScreenClickClose={handleScreenClickClose}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onScreenClickClose={handleScreenClickClose}
            onAddPlace={handleAddPlaceSubmit}
          />
          <ConfirmDeleteCardPopup
            isOpen={isConfirmPopupOpen}
            onClose={closeAllPopups}
            onScreenClickClose={handleScreenClickClose}
            onDeleteCard={handleCardDelete}
            card={removableCard}
          />
          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
            onScreenClickClose={handleScreenClickClose}
          />
          {isLoaderActive && <Loader />}
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
