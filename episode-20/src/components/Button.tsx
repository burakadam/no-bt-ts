const Button = ({
  title,
  children,
  style,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { title?: string }) => (
  <button {...rest} style={{ ...style, backgroundColor: 'red', padding: 10 }}>
    {title ?? children}
  </button>
);

export default Button;
