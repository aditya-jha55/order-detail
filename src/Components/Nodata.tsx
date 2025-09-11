import { type ReactNode } from 'react';
import Images from '../Utils/images';
import CustomButton from './CustomButton';
import { Box } from '@mui/material';

interface Props {
  image?: string;
  heading?: string;
  title?: string;
  buttonText?: string;
  handleClick?: () => void;
  className?: string;
  link?: string;
  node?: ReactNode;
  showImage?: boolean;
}

export default function NoData(props: Props) {
  const {
    heading,
    title,
    buttonText,
    handleClick,
    image = Images.NO_RECORDS_FOUND,
    className,
    link = '',
    node,
    showImage = true,
  } = props;
  return (
    <div className={`success ${className}`}>
      {showImage && <>{image && <img src={image} alt={heading} />}</>}
      <h3>{heading}</h3>
      <Box
        sx={{
          maxHeight: 300,
          overflow: 'auto',
        }}
      >
        {node}
      </Box>
      <p>{title}</p>
      {buttonText && !link && (
        <CustomButton
          size="large"
          variant="contained"
          text={buttonText as string}
          showIcon={false}
          width="100%"
          onClick={handleClick}
          id="redirect"
          loading={false}
        />
      )}
      {link && (
        <CustomButton
          size="large"
          variant="contained"
          text={buttonText as string}
          showIcon={false}
          width="100%"
          href={link}
          onClick={handleClick}
          id="redirect"
          loading={false}
        />
      )}
    </div>
  );
}
