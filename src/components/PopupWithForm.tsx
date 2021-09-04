import React, { FC, ReactElement } from 'react';
import ReactDOM from 'react-dom';

import { modalElement } from '../utils/constants';

interface IFormPopupProps {
  name: string;
  isOpen: boolean;
  title: string;
  isValid: boolean;
  buttonText: string;
  children: ReactElement | null;
  onClose: () => void;
  onScreenClickClose: ({ target }: React.MouseEvent<HTMLElement>) => void;
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
}

const PopupWithForm: FC<IFormPopupProps> = (props): ReactElement => {
  return ReactDOM.createPortal(
    <section
      className={`popup popup_type_${props.name} ${
        props.isOpen ? 'popup_opened' : ''
      }`}
      onClick={props.onScreenClickClose}
    >
      <div className="popup__wrapper">
        <button
          className="popup__close-button button"
          onClick={props.onClose}
          type="button"
        />
        <form
          action="#"
          id={props.name}
          className="popup__form"
          name={`popup-${props.name}`}
          onSubmit={props.onSubmit}
          noValidate
        >
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button
            className={`popup__save-button button ${
              props.isValid ? '' : 'button_inactive'
            }`}
            type="submit"
            disabled={!props.isValid}
          >
            {props.buttonText}
          </button>
        </form>
      </div>
    </section>,
    modalElement
  );
};

export default PopupWithForm;
