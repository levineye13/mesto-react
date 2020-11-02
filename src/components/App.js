import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { popupObjectMarkup } from './../utils/utils.js';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

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

  const handleClickDeleteButton = function () {
    setConfirmPopupOpen(true);
  };

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onClickDeleteButton={handleClickDeleteButton}
        />
        <Footer />
        <PopupWithForm
          title={'Редактировать профиль'}
          name={'profile'}
          buttonText={'Сохранить'}
          children={popupObjectMarkup.editProfilePopupMarkup}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
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
  );
}

export default App;
