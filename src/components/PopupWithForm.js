import React from 'react';

function PopupWithForm({
  title,
  name,
  buttonText,
  children,
  isOpen,
  onClose,
  onSubmit,
}) {
  return (
    <section
      className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}
    >
      <div className="popup__wrapper">
        <button className="popup__close-button button" onClick={onClose} />
        <form
          action="#"
          id="edit-form"
          className="popup__form"
          name={`popup-${name}`}
          onSubmit={onSubmit}
          noValidate
        >
          <h2 className="popup__title">{title}</h2>
          {children}
          <button className="popup__save-button button">{buttonText}</button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
