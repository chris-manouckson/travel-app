import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

import Card from '../Card';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 0;
  border-top: 1px solid;
`;

const Title = styled.h2`
  margin-bottom: 12px;
`;

const MediaContainer = styled.div`
  max-width: 100%;
  display: flex;
  align-items: stretch;
  overflow-y: auto;
  margin: 12px 0;
`;

const MediaItem = styled.div`
  display: flex;
  min-width: 300px;
  margin-right: 24px;
  padding: 12px 0;
`;

const ExperienceSection = (props) => {
  const {
    title,
    description,
    medias,
  } = props;

  return (
    <Container>
      <Title>{title}</Title>

      <MediaContainer>
        {medias && medias.map(media => (
          <MediaItem key={`${media.caption}${media.standard_resolution}`}>
            <Card cover={media.standard_resolution}>
              {media.caption}
            </Card>
          </MediaItem>
        ))}
      </MediaContainer>

      <Typography gutterBottom variant="h5" component="h2">
        {description}
      </Typography>
    </Container>
  );
};

export default ExperienceSection;
