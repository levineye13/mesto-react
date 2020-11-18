import React, { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

const EditAvatarPopup = function ({
  isOpen,
  onClose,
  onScreenClickClose,
  onUpdateAvatar,
}) {
  const inputRef = useRef();

  const resetInputValue = function () {
    inputRef.current.value = '';
  };

  const handleSubmit = function (evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value,
      resetInputValue,
    });
  };

  const markup = (
    <fieldset className="popup__info">
      <label className="popup__form-field">
        <input
          ref={inputRef}
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
      title={'Обновить аватар'}
      name={'update-avatar'}
      buttonText={'Обновить'}
      children={markup}
      isOpen={isOpen}
      onClose={onClose}
      onScreenClickClose={onScreenClickClose}
      onSubmit={handleSubmit}
    />
  );
};

export default EditAvatarPopup;
