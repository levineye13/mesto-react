import React, { useState, useContext, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from './../contexts/CurrentUserContext';
import { returnProfileMarkup } from './../utils/utils';

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

  const handleNameChange = function (evt) {
    setName(evt.target.value);
  };

  const handleDescriptionChange = function (evt) {
    setDescription(evt.target.value);
  };

  const handleSubmit = function (evt) {
    evt.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  };

  return (
    <PopupWithForm
      title={'Редактировать профиль'}
      name={'profile'}
      buttonText={'Сохранить'}
      children={returnProfileMarkup({
        name,
        description,
        handleNameChange,
        handleDescriptionChange,
      })}
      isOpen={isOpen}
      onClose={onClose}
      onScreenClickClose={onScreenClickClose}
      onSubmit={handleSubmit}
    />
  );
};

export default EditProfilePopup;
