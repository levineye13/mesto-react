import React from 'react';

function ImagePopup() {
	return (
		<section className="popup popup_type_image">
			<div className="popup__wrapper">
				<button className="popup__close-button button"></button>
				<article className="popup__img-container">
					<img src="#" alt="" className="popup__card-img" />
					<p className="popup__title-img"></p>
				</article>
			</div>
		</section>
	);
}

export default ImagePopup;