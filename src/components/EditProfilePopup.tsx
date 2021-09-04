import React, { FC, ReactElement, useContext, useEffect } from 'react';

import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useFormWithValidation } from '../hooks/useFormWithValidation';
import { IUser } from '../utils/interfaces';

interface IEditPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onScreenClickClose: ({ target }: React.MouseEvent<HTMLElement>) => void;
  onUpdateUser: (user: { name: string; about: string }) => void;
}

const EditProfilePopup: FC<IEditPopupProps> = ({
  isOpen,
  onClose,
  onScreenClickClose,
  onUpdateUser,
}): ReactElement => {
  const currentUser: IUser = useContext(CurrentUserContext);
  const { values, handleInputChange, errors, isValid, resetForm } =
    useFormWithValidation();

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [isOpen, currentUser, resetForm]);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    onUpdateUser({
      name: values.name as string,
      about: values.about as string,
    });
  };

  const markup: ReactElement = (
    <fieldset className="popup__info">
      <label className="popup__form-field">
        <input
          type="text"
          id="name-input"
          className="popup__input"
          name="name"
          placeholder="Имя"
          required
          minLength={2}
          maxLength={40}
          value={values.name as string}
          onChange={handleInputChange}
        />
        <span className="popup__error" id="name-input-error">
          {errors.name as string}
        </span>
      </label>
      <label className="popup__form-field">
        <input
          type="text"
          id="job-input"
          className="popup__input"
          name="about"
          placeholder="О себе"
          required
          minLength={2}
          maxLength={200}
          value={values.about as string}
          onChange={handleInputChange}
        />
        <span className="popup__error" id="job-input-error">
          {errors.about as string}
        </span>
      </label>
    </fieldset>
  );

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      buttonText="Сохранить"
      children={markup}
      isOpen={isOpen}
      onClose={onClose}
      onScreenClickClose={onScreenClickClose}
      onSubmit={handleSubmit}
      isValid={isValid}
    />
  );
};

export default EditProfilePopup;
