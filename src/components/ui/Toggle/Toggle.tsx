import * as Styled from './Toggle.styled';

const Toggle = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {

  const currentToggleState = props.disabled ? 'disabled' : props.checked ? 'on' : 'off'

  return (
    <Styled.Label onClick={e => e.stopPropagation()} $state={currentToggleState}>
      <Styled.Input type="checkbox" {...props}></Styled.Input>
      <Styled.Span $state={currentToggleState}></Styled.Span>
    </Styled.Label>
  )
}

export default Toggle;