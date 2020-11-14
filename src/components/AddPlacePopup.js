import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const handleNameChange = function (evt) {
    setName(evt.target.value);
  };

  const handleLinkChange = function (evt) {
    setLink(evt.target.value);
  };

  const handleSubmit = function (evt) {
    evt.preventDefault();

    onAddPlace({
      name,
      link,
    });
  };

  const popupMarkup = (
    <fieldset className="popup__info">
      <label className="popup__form-field">
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          id="place-input"
          className="popup__input"
          name="place"
          placeholder="Название"
          required
          maxLength="30"
        />
        <span className="popup__error" id="place-input-error"></span>
      </label>
      <label className="popup__form-field">
        <input
          value={link}
          onChange={handleLinkChange}
          type="url"
          id="link-input"
          className="popup__input"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error" id="link-input-error"></span>
      </label>
    </fieldset>
  );

  return (
    <PopupWithForm
      title={'Новое место'}
      name={'add-card'}
      buttonText={'Создать'}
      children={popupMarkup}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}

export default AddPlacePopup;
