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
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };

  /**
   * Обработчик открытия попапа добавления карточки.
   */
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  /**
   * Обработчик открытия попапа редактирования аватара.
   */
  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };

  /**
   * Обработчик закрытия попапов.
   */
  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setConfirmPopupOpen(false);
    setSelectedCard(null);
  };

  const handleScreenClickClose = ({ target }) => {
    if (target.classList.contains('popup')) {
      closeAllPopups();
    }
  };

  /**
   * Обработчик клика по карточке.
   */
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleDeleteButtonClick = (card) => {
    setConfirmPopupOpen(true);
    setRemovableCard(card);
  };

  const handleUpdateUser = async ({ name, about }) => {
    try {
      const res = await api.setUserInfo({ name, about });
      if (res) {
        setCurrentUser(res);
      }
    } catch (err) {
      console.error(err);
    } finally {
      closeAllPopups();
    }
  };

  const handleUpdateAvatar = async ({ avatar }) => {
    try {
      const res = await api.updateUserAvatar(avatar);
      setLoaderActive(true);
      if (res) {
        setCurrentUser(res);
      }
    } catch (err) {
      console.error(err);
    } finally {
      closeAllPopups();
      setLoaderActive(false);
    }
  };

  const handleCardLike = async (card) => {
    const isLiked = card.likes.some((like) => currentUser._id === like._id);

    try {
      const newCard = await api.changeLikeCardStatus(
        card._id,
        isLiked ? 'DELETE' : 'PUT'
      );
      if (newCard) {
        const newCards = cards.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        );
        setCards(newCards);
      }
    } catch (err) {
      console.error(err);
    } finally {
      closeAllPopups();
    }
  };

  const handleCardDelete = async (card) => {
    try {
      const res = await api.deleteCard(card._id);
      closeAllPopups();
      setLoaderActive(true);

      const newCards = cards.filter(
        (currentCard) => currentCard._id !== card._id
      );

      setCards(newCards);
    } catch (err) {
      console.error(err);
    } finally {
      setLoaderActive(false);
    }
  };

  const handleAddPlaceSubmit = async ({ name, link }) => {
    try {
      const newCard = await api.addCard({ name, link });
      closeAllPopups();
      setLoaderActive(true);

      if (newCard) {
        setCards([newCard, ...cards]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoaderActive(false);
    }
  };

  /**
   * Отрисовка первоначальных данных при монтировании компонента.
   * (Promise.allSettled)
   */
  useEffect(async () => {
    try {
      const dataArray = await api.getAllInitialData();
      const [dataUser, dataCards] = dataArray.map((item) => item.value);

      if (dataUser) {
        setCurrentUser(dataUser);
      }

      if (dataCards) {
        setCards(dataCards);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoaderActive(false);
    }
  }, []);

  //Обработчик закрытия попапа по клику на Escape
  useEffect(() => {
    const handleEscClickClose = (evt) => {
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
