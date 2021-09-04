import React, { FC, ReactElement } from 'react';
import ReactDOM from 'react-dom';

import { ICard } from '../utils/interfaces';
import { modalElement } from '../utils/constants';

interface IImagePopupProps {
  card: ICard;
  onClose: () => void;
  onScreenClickClose: ({ target }: React.MouseEvent<HTMLElement>) => void;
}

const ImagePopup: FC<IImagePopupProps> = ({
  card,
  onClose,
  onScreenClickClose,
}): ReactElement => {
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
          <img
            src={card && card.link}
            alt={card && card.name}
            className="popup__card-img"
          />
          <figcaption className="popup__title-img">
            {card && card.name}
          </figcaption>
        </figure>
      </div>
    </section>,
    modalElement
  );
};

export default ImagePopup;
