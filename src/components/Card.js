import React from 'react';

function Card({ card, onCardClick, onClickDeleteButton }) {
  const handleClick = function () {
    onCardClick(card);
  };

  const handleDeleteClick = function () {
    onClickDeleteButton();
  };

  return (
    <li className="elements__item" onClick={handleClick}>
      <button
        className="elements__delete-card"
        onClick={(evt) => {
          evt.stopPropagation();
          handleDeleteClick();
        }}
      />
      <img src={card.link} alt={card.name} className="elements__img" />
      <div className="elements__container">
        <h2 className="elements__title">{card.name}</h2>
        <div className="elements__group">
          <button className="elements__like-button" />
          <span className="elements__like-count">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
