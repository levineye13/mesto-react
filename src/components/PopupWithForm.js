import React from 'react';

function PopupWithForm({title, name, children, isOpen, onClose}) {
	return (
		<section className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
			<div className="popup__wrapper">
				<button className="popup__close-button button" onClick={onClose}></button>
				<form
					action="#"
					id="edit-form"
					className="popup__form"
					name={`popup-${name}`}
					noValidate
				>
					<h2 className="popup__title">{title}</h2>

					<button className="popup__save-button button">Сохранить</button>
				</form>
			</div>
		</section>
	);
}

export default PopupWithForm;