import React from 'react';

function ImagePopup({ card, onClose }) {
	return (
		<section className={`popup popup_type_image ${card ? 'popup_opened' : ''}`}>
			<div className="popup__wrapper">
				<button className="popup__close-button button" onClick={onClose}></button>
				<figure className="popup__img-container">
					<img src={card.link} alt={card.name} className="popup__card-img" />
					<figcaption className="popup__title-img">{card.name}</figcaption>
				</figure>
			</div>
		</section>
	);
}

export default ImagePopup;