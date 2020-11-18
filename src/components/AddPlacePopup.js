import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

const AddPlacePopup = function ({
  isOpen,
  onClose,
  onScreenClickClose,
  onAddPlace,
}) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const handleNameChange = function (evt) {
    setName(evt.target.value);
  };

  const handleLinkChange = function ({ target: { value } }) {
    setLink(value);
  };

  const resetInputValue = function () {
    setName('');
    setLink('');
  };

  const handleSubmit = function (evt) {
    evt.preventDefault();

    onAddPlace({
      name,
      link,
      resetInputValue,
    });
  };

  const markup = (
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
      children={markup}
      isOpen={isOpen}
      onClose={onClose}
      onScreenClickClose={onScreenClickClose}
      onSubmit={handleSubmit}
    />
  );
};

export default AddPlacePopup;
