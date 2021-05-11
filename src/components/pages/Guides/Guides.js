import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

import {
  Layout,
  GuideCard,
} from 'components/common';

const Title = styled.h1`
  margin-bottom: 24px;
`;

const Guides = () => {
  const { isLoading } = useSelector(useCallback(state => state.dataset.getRequestStatus, []));
  const guides = useSelector(useCallback(state => state.dataset.data.guides, []));

  return (
    <Layout isLoading={isLoading}>
      <div>
        <Title>Guides</Title>

        <Grid container spacing={1}>
          {guides.map(guide => (
            <Grid
              key={`${guide._id}${guide.eng.name}`}
              item
              xs={12} sm={6} md={4} lg={3}
            >
              <GuideCard
                title={guide.eng.name}
                description={guide.eng.description}
                cover={guide.cover_url}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
};

export default Guides;
