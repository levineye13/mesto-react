import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
	const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
	const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
	const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

	const handleEditProfileClick = function () {
		setEditProfilePopupOpen(true);
	}

	const handleAddPlaceClick = function () {
		setAddPlacePopupOpen(true);
	}

	const handleEditAvatarClick = function () {
		setEditAvatarPopupOpen(true);
	}

	const closeAllPopups = function () {
		setEditProfilePopupOpen(false);
		setAddPlacePopupOpen(false);
		setEditAvatarPopupOpen(false);
	}

  return (
    <div className="App">
			<div className="page">
				<Header />
				<Main
					onEditProfile={handleEditProfileClick}
					onAddPlace={handleAddPlaceClick}
					onEditAvatar={handleEditAvatarClick}
				/>
				<Footer />
				<PopupWithForm
					title={'Редактировать профиль'}
					name={'popup_type_profile'}
					children={''}
					isOpen={isEditProfilePopupOpen}
					onClose={closeAllPopups}
				/>
				<PopupWithForm
					title={'Новое место'}
					name={'popup_type_add-card'}
					children={''}
					isOpen={isAddPlacePopupOpen}
					onClose={closeAllPopups}
				/>
				<PopupWithForm
					title={'Обновить аватар'}
					name={'popup_type_update-avatar'}
					children={''}
					isOpen={isEditAvatarPopupOpen}
					onClose={closeAllPopups}
				/>
				<PopupWithForm
					title={'Обновить аватар'}
					name={'popup_type_confirm'}
					children={''}
					isOpen={false}
					onClose={closeAllPopups}
				/>
				<ImagePopup />
			</div>
    </div>
  );
}

export default App;
