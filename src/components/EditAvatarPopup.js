import React, { useRef } from 'react';
import PopupWithForm from './PopupWithForm';
import { returnEditAvatarMarkup } from './../utils/utils';

const EditAvatarPopup = function ({
  isOpen,
  onClose,
  onScreenClickClose,
  onUpdateAvatar,
}) {
  const inputRef = useRef();

  const handleSubmit = function (evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  };

  return (
    <PopupWithForm
      title={'Обновить аватар'}
      name={'update-avatar'}
      buttonText={'Обновить'}
      children={returnEditAvatarMarkup({ inputRef })}
      isOpen={isOpen}
      onClose={onClose}
      onScreenClickClose={onScreenClickClose}
      onSubmit={handleSubmit}
    />
  );
};

export default EditAvatarPopup;
