import React, { useEffect, ReactElement, FC } from 'react';

import PopupWithForm from './PopupWithForm';
import { useFormWithValidation } from '../hooks/useFormWithValidation';

interface IAddPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onScreenClickClose: (evt: React.MouseEvent<HTMLElement>) => void;
  onAddPlace: (place: { name: string; link: string }) => void;
}

const AddPlacePopup: FC<IAddPopupProps> = ({
  isOpen,
  onClose,
  onScreenClickClose,
  onAddPlace,
}): ReactElement => {
  const { values, handleInputChange, errors, isValid, resetForm } =
    useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onAddPlace({
      name: values.place as string,
      link: values.link as string,
    });
  };

  const markup = (
    <fieldset className="popup__info">
      <label className="popup__form-field">
        <input
          value={values.place as string}
          onChange={handleInputChange}
          type="text"
          id="place-input"
          className="popup__input"
          name="place"
          placeholder="Название"
          required
          maxLength={30}
        />
        <span className="popup__error" id="place-input-error">
          {errors.place as string}
        </span>
      </label>
      <label className="popup__form-field">
        <input
          value={values.link as string}
          onChange={handleInputChange}
          type="url"
          id="link-input"
          className="popup__input"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error" id="link-input-error">
          {errors.link as string}
        </span>
      </label>
    </fieldset>
  );

  return (
    <PopupWithForm
      title="Новое место"
      name="add-card"
      buttonText="Создать"
      children={markup}
      isOpen={isOpen}
      onClose={onClose}
      onScreenClickClose={onScreenClickClose}
      onSubmit={handleSubmit}
      isValid={isValid}
    />
  );
};

export default AddPlacePopup;
