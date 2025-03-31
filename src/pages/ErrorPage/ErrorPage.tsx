import { useRouteError } from "react-router-dom";
import { isRouteErrorResponse } from "react-router-dom";
import errorImg from 'assets/error.png';
import Button from "components/ui/Button/Button";
import { useNavigate } from "react-router-dom";

import * as Styled from './ErrorPage.styled';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  let errorMessage: string;

  // https://stackoverflow.com/questions/75944820/whats-the-correct-type-for-error-in-userouteerror-from-react-router-dom
  if (isRouteErrorResponse(error)) {
    errorMessage = error.data.error?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  function handleClick() {
    navigate('/')
  }

  return (
    <Styled.Container>
      <Styled.InnerContainer>
        <Styled.Header>Oops... checkmate!</Styled.Header>
        <Styled.Image src={errorImg} alt="Knight knocked out" />
        <p>Sorry, an unexpected error has occurred.</p>
        <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
        <Button onClick={handleClick}>
          play
        </Button>
      </Styled.InnerContainer>
    </Styled.Container>
  );
}

export default ErrorPage;