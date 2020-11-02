export const popupObjectMarkup = {
  editProfilePopupMarkup: (
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
  ),
  addPlacePopupMarkup: (
    <fieldset className="popup__info">
      <label className="popup__form-field">
        <input
          type="text"
          id="place-input"
          className="popup__input"
          name="place"
          placeholder="Название"
          required
          maxLength="30"
        />
        <span className="popup__error" id="place-input-error"></span>
      </label>
      <label className="popup__form-field">
        <input
          type="url"
          id="link-input"
          className="popup__input"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error" id="link-input-error"></span>
      </label>
    </fieldset>
  ),
  updateAvatarPopupMarkup: (
    <fieldset className="popup__info">
      <label className="popup__form-field">
        <input
          type="url"
          id="link-input"
          className="popup__input"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error" id="link-input-error"></span>
      </label>
    </fieldset>
  ),
};
