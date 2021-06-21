type ButtonProps = {
  children?: string;
};

const Button = (props: ButtonProps) => {
  return <button>{props.children}</button>;
};

export default Button;
