import React from 'react';

function PopupWithForm({title, name, children, isOpen, onClose}) {
	return (
		<section className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
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
					<fieldset className="popup__info">
						<label className="popup__form-field">
							<input
								type="text"
								id="name-input"
								className="popup__input"
								name="name"
								placeholder="Имя"
								required
								minLength="2"
								maxLength="40"
							/>
							<span className="popup__error" id="name-input-error"></span>
						</label>
						<label className="popup__form-field">
							<input
								type="text"
								id="job-input"
								className="popup__input"
								name="about"
								placeholder="О себе"
								required
								minLength="2"
								maxLength="200"
							/>
							<span className="popup__error" id="job-input-error"></span>
						</label>
					</fieldset>
					<button className="popup__save-button button">Сохранить</button>
				</form>
			</div>
		</section>
	);
}

export default PopupWithForm;