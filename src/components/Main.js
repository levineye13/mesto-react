import React from 'react';

function Main({onEditProfile, onAddPlace, onEditAvatar}) {
	return (
		<main className="content">
			<section className="profile content__profile">
				<div className="profile__avatar-container">
					<img
						src="#"
						alt="Жак-Ив Кусто"
						className="profile__avatar"
					/>
					<button className="profile__update-button" type="button" onClick={onEditAvatar}></button>
				</div>
				<div className="profile__info">
					<h1 className="profile__title"></h1>
					<button className="profile__edit-button" onClick={onEditProfile}></button>
					<p className="profile__subtitle"></p>
				</div>
				<button className="profile__add-button" onClick={onAddPlace}></button>
			</section>
			<section className="elements content__elements">
				<ul className="elements__list"></ul>
			</section>
		</main>
	);
}

export default Main;