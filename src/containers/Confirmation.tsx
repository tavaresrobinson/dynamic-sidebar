import React from 'react';
import {Container} from 'components/styled-components';
import Notification from 'components/Notification';


const Confirmation = () => {
  return (
    <Container>
      <Notification type="resend"/>
    </Container>
  );
};

export default Confirmation;