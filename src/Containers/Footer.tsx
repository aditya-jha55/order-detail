import React from 'react';
import { Link } from '@mui/material';
import { ROUTES } from '../helpers/contants';
import { useLocation } from 'react-router-dom';
import { useDTranslation } from '../customHooks';

export default function Footer() {
  const location = useLocation();
  const { t } = useDTranslation('translation', {
    keyPrefix: 'footer',
  });
  return (
    <footer className="footer">
      <div className="nav">
        <nav>
          <Link
            underline="none"
            className="navLink noselect"
            href={ROUTES.SUPPORT}
            target={'_blank'}
          >
            {t('contact_us')}
          </Link>
          <Link
            underline="none"
            className="navLink noselect"
            href={ROUTES.POLICIES}
            target={'_blank'}
          >
            {t('privacy_policy')}
          </Link>
          <Link
            underline="none"
            className="navLink noselect"
            href={ROUTES.TERMS}
            target={'_blank'}
          >
            {t('terms_and_conditions')}
          </Link>
          <Link
            underline="none"
            className="navLink noselect"
            href={ROUTES.FAQ}
            target={'_blank'}
          >
            {t('faqs')}
          </Link>
        </nav>
      </div>
      <div className="copyright">
        <p>{t('copyright')}</p>
      </div>
    </footer>
  );
}
