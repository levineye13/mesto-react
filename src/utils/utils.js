const returnAddPlaceMarkup = function ({
  name,
  link,
  handleNameChange,
  handleLinkChange,
}) {
  return (
    <fieldset className="popup__info">
      <label className="popup__form-field">
        <input
          value={name}
          onChange={handleNameChange}
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
          value={link}
          onChange={handleLinkChange}
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
  );
};

const returnEditAvatarMarkup = function ({ inputRef }) {
  return (
    <fieldset className="popup__info">
      <label className="popup__form-field">
        <input
          ref={inputRef}
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
  );
};

const returnProfileMarkup = function ({
  name,
  description,
  handleNameChange,
  handleDescriptionChange,
}) {
  return (
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
          value={name}
          onChange={handleNameChange}
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
          value={description}
          onChange={handleDescriptionChange}
        />
        <span className="popup__error" id="job-input-error"></span>
      </label>
    </fieldset>
  );
};

export { returnAddPlaceMarkup, returnEditAvatarMarkup, returnProfileMarkup };
