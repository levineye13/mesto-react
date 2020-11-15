import React from 'react';

const PopupWithForm = function (props) {
  return (
    <section
      className={`popup popup_type_${props.name} ${
        props.isOpen ? 'popup_opened' : ''
      }`}
    >
      <div className="popup__wrapper">
        <button
          className="popup__close-button button"
          onClick={props.onClose}
        />
        <form
          action="#"
          id="edit-form"
          className="popup__form"
          name={`popup-${props.name}`}
          onSubmit={props.onSubmit}
          noValidate
        >
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button className="popup__save-button button">
            {props.buttonText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default PopupWithForm;
