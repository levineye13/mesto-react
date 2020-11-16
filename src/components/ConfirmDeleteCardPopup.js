import React from 'react';
import PopupWithForm from './PopupWithForm';

const ConfirmDeleteCardPopup = function ({
  isOpen,
  onClose,
  onScreenClickClose,
  onDeleteCard,
  card,
}) {
  const handleSubmit = function (evt) {
    evt.preventDefault();

    onDeleteCard(card);
  };

  return (
    <PopupWithForm
      title={'Вы уверены?'}
      name={'confirm'}
      buttonText={'Да'}
      children={null}
      isOpen={isOpen}
      onClose={onClose}
      onScreenClickClose={onScreenClickClose}
      onSubmit={handleSubmit}
    />
  );
};

export default ConfirmDeleteCardPopup;
