import Images from '../Utils/images';
import CustomButton from './CustomButton';

interface Props {
  heading?: string;
  title?: string;
  buttonText?: string;
  showButton?: boolean;
  handleClick?: () => void;
  showImage?: boolean;
}

export default function PageNotFound(props: Props) {
  const { heading, title, buttonText, handleClick, showButton, showImage } =
    props;
  return (
    <div className="success">
      {showImage && <img src={Images.NOT_FOUND} alt={heading} />}
      <h3>{heading}</h3>
      <p>{title}</p>
      {showButton ? (
        <CustomButton
          size="large"
          variant="contained"
          text={buttonText as string}
          showIcon={false}
          width="auto"
          onClick={handleClick}
          id="redirect"
          loading={false}
          // onClick={onClick}
        />
      ) : null}
    </div>
  );
}
