import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { returnAddPlaceMarkup } from './../utils/utils';

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

  return (
    <PopupWithForm
      title={'Новое место'}
      name={'add-card'}
      buttonText={'Создать'}
      children={returnAddPlaceMarkup({
        name,
        link,
        handleNameChange,
        handleLinkChange,
      })}
      isOpen={isOpen}
      onClose={onClose}
      onScreenClickClose={onScreenClickClose}
      onSubmit={handleSubmit}
    />
  );
};

export default AddPlacePopup;
