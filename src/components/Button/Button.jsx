import { BtnUpdate } from './Button.styled';

const Button = ({ title, type = 'button', onClick }) => {
  return (
    <BtnUpdate className="btn" type={type} onClick={onClick}>
      {title}
    </BtnUpdate>
  );
};

export { Button };
