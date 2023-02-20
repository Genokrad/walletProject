import React from 'react';
import image from '../../images/error/enot.png';

import { Container, Wraper, Number, Text, StyledNavLink } from './styled.error';

export const ErrorPage = () => {
  return (
    <Container>
      <Wraper>
        <div>
          <Number>404!</Number>
        </div>
        <div>
          <img src={image} alt="enot" />
        </div>
        <div>
          <Text>Page not found</Text>
        </div>
        <div>
          <StyledNavLink to={'/'}>Home</StyledNavLink>
        </div>
      </Wraper>
    </Container>
  );
};
