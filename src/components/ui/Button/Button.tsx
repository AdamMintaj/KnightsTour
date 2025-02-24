import * as Styled from './Button.styled';

const Button = ({ children, disabled, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Styled.Button $locked={disabled} {...props}>
      {children}
    </Styled.Button>
  )
}

export default Button;