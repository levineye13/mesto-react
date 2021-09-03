import React, { FC, ReactElement } from 'react';

const Footer: FC = (): ReactElement => {
  return (
    <footer className="footer page__footer">
      <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
    </footer>
  );
};

export default Footer;
