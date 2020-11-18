import React, { useState, useContext, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from './../contexts/CurrentUserContext';

const EditProfilePopup = function ({
  isOpen,
  onClose,
  onScreenClickClose,
  onUpdateUser,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const handleNameChange = function ({ target: { value } }) {
    setName(value);
  };

  const handleDescriptionChange = function ({ target: { value } }) {
    setDescription(value);
  };

  const handleSubmit = function (evt) {
    evt.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  };

  const markup = (
    <fieldset className="popup__info">
      <label className="popup__form-field">
        <input
          type="text"
          id="name-input"
          className="popup__input"
          name="name"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40"
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__error" id="name-input-error"></span>
      </label>
      <label className="popup__form-field">
        <input
          type="text"
          id="job-input"
          className="popup__input"
          name="about"
          placeholder="О себе"
          required
          minLength="2"
          maxLength="200"
          value={description}
          onChange={handleDescriptionChange}
        />
        <span className="popup__error" id="job-input-error"></span>
      </label>
    </fieldset>
  );

  return (
    <PopupWithForm
      title={'Редактировать профиль'}
      name={'profile'}
      buttonText={'Сохранить'}
      children={markup}
      isOpen={isOpen}
      onClose={onClose}
      onScreenClickClose={onScreenClickClose}
      onSubmit={handleSubmit}
    />
  );
};

export default EditProfilePopup;
