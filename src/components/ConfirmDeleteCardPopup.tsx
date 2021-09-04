import React, { FC, ReactElement } from 'react';

import PopupWithForm from './PopupWithForm';
import { ICard } from '../utils/interfaces';

interface IConfirmPopupProps {
  card: ICard;
  isOpen: boolean;
  onClose: () => void;
  onScreenClickClose: (evt: React.MouseEvent<HTMLElement>) => void;
  onDeleteCard: (card: ICard) => void;
}

const ConfirmDeleteCardPopup: FC<IConfirmPopupProps> = ({
  card,
  isOpen,
  onClose,
  onScreenClickClose,
  onDeleteCard,
}): ReactElement => {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onDeleteCard(card);
  };

  return (
    <PopupWithForm
      title="Вы уверены?"
      name="confirm"
      buttonText="Да"
      children={null}
      isOpen={isOpen}
      onClose={onClose}
      onScreenClickClose={onScreenClickClose}
      onSubmit={handleSubmit}
      isValid={true}
    />
  );
};

export default ConfirmDeleteCardPopup;
