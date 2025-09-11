
import { Link } from '@mui/material';
import { ROUTES } from '../helpers/contants';

export default function Footer() {
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
            Contact Us
          </Link>
          <Link
            underline="none"
            className="navLink noselect"
            href={ROUTES.POLICIES}
            target={'_blank'}
          >
            Privacy Policy
          </Link>
          <Link
            underline="none"
            className="navLink noselect"
            href={ROUTES.TERMS}
            target={'_blank'}
          >
            Terms And Conditions
          </Link>
          <Link
            underline="none"
            className="navLink noselect"
            href={ROUTES.FAQ}
            target={'_blank'}
          >
            Faqs
          </Link>
        </nav>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </footer>
  );
}
