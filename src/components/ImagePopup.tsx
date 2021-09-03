import React, { FC, ReactElement } from 'react';
import ReactDOM from 'react-dom';

import { modalElement } from '../utils/constants';
import { ICard } from '../utils/interfaces';

interface IImagePopupProps {
  card: ICard;
  onClose: () => void;
  onScreenClickClose: () => void;
}

const ImagePopup: FC<IImagePopupProps> = ({
  card,
  onClose,
  onScreenClickClose,
}: IImagePopupProps): ReactElement => {
  return ReactDOM.createPortal(
    <section
      className={`popup popup_type_image ${card ? 'popup_opened' : ''}`}
      onClick={onScreenClickClose}
    >
      <div className="popup__wrapper">
        <button
          className={card && 'popup__close-button button'}
          onClick={onClose}
        />
        <figure className="popup__img-container">
          <img src={card.link} alt={card.name} className="popup__card-img" />
          <figcaption className="popup__title-img">{card.name}</figcaption>
        </figure>
      </div>
    </section>,
    modalElement
  );
};

export default ImagePopup;
