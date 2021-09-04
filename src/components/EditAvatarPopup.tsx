import React, { FC, ReactElement, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { useFormWithValidation } from '../hooks/useFormWithValidation';

interface IAvatarPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onScreenClickClose: () => void;
  onUpdateAvatar: (avatar: { avatar: string }) => void;
}

const EditAvatarPopup: FC<IAvatarPopupProps> = ({
  isOpen,
  onClose,
  onScreenClickClose,
  onUpdateAvatar,
}: IAvatarPopupProps): ReactElement => {
  const { values, handleInputChange, errors, isValid, resetForm } =
    useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: values.link as string,
    });
  };

  const markup: ReactElement = (
    <fieldset className="popup__info">
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
          {errors.link}
        </span>
      </label>
    </fieldset>
  );

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="update-avatar"
      buttonText="Обновить"
      children={markup}
      isOpen={isOpen}
      onClose={onClose}
      onScreenClickClose={onScreenClickClose}
      onSubmit={handleSubmit}
      isValid={isValid}
    />
  );
};

export default EditAvatarPopup;
