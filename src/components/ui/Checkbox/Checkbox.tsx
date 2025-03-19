import * as Styled from './Checkbox.styled';

const Checkbox = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Styled.Label>
      <Styled.Input type='checkbox' {...props} />
      {props.checked && <Styled.Checkmark />}
    </Styled.Label>
  )
}

export default Checkbox;