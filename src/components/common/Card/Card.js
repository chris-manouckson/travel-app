import React from 'react';
import styled from 'styled-components';

import {
  Card as StaticUiCard,
  CardMedia,
  CardContent,
} from '@material-ui/core';

const Container = styled(StaticUiCard)`
  width: 100%;
  height: 300px;
`;

const Image = styled(CardMedia)`
  min-height: 160px;
`;

const Content = styled(CardContent)``;

const Card = (props) => {
  const {
    cover,
    children,
  } = props;

  return (
    <Container>
      {cover && (
        <Image image={cover} />
      )}
      <Content>
        {children}
      </Content>
    </Container>
  );
};

export default Card;
