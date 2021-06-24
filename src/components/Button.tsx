import { ButtonHTMLAttributes } from 'react';
import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  outline?: boolean;
};

const Button = ({ outline = false, ...props }: ButtonProps) => {
  return (
    <button className={`button ${outline ? 'outlined' : ''}`} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
