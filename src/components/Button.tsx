import { ButtonHTMLAttributes } from 'react';
import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  return (
    <button className="button" {...props}>
      {props.children}
    </button>
  );
};

export default Button;
