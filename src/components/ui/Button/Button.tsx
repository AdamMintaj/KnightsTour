import * as Styled from './Button.styled';

const Button = ({ children, disabled, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Styled.Button $locked={disabled} disabled={disabled} {...props}>
      {children}
    </Styled.Button>
  )
}

export default Button;