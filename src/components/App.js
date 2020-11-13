import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import { popupObjectMarkup } from './../utils/utils';
import { api } from './../utils/api';
import { CurrentUserContext } from './../contexts/CurrentUserContext';
import avatarImg from './../images/profile__avatar.jpg';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  //Дефолтная инициализация в случае невыполнения запроса к api.
  const [currentUser, setCurrentUser] = useState({
    avatar: avatarImg,
    name: 'Olezha',
    about: 'NedoJunior',
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

  const handleCardDelete = function () {
    setConfirmPopupOpen(true);
  };

  const handleUpdateUser = function ({ name, about }) {
    api.setUserInfo({ name, about }).then((userData) => {
      setCurrentUser(userData);
      closeAllPopups();
    });
  };

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        if (userData) {
          setCurrentUser({ ...userData });
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
            onCardDelete={handleCardDelete}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <PopupWithForm
            title={'Новое место'}
            name={'add-card'}
            buttonText={'Создать'}
            children={popupObjectMarkup.addPlacePopupMarkup}
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          />
          <PopupWithForm
            title={'Обновить аватар'}
            name={'update-avatar'}
            buttonText={'Обновить'}
            children={popupObjectMarkup.updateAvatarPopupMarkup}
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          />
          <PopupWithForm
            title={'Вы уверены?'}
            name={'confirm'}
            buttonText={'Да'}
            children={''}
            isOpen={isConfirmPopupOpen}
            onClose={closeAllPopups}
          />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
