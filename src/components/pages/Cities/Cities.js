import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

import {
  Layout,
  CityCard,
} from 'components/common';

const Title = styled.h1`
  margin-bottom: 24px;
`;

const Cities = () => {
  const { isLoading } = useSelector(useCallback(state => state.dataset.getRequestStatus, []));
  const cities = useSelector(useCallback(state => state.dataset.data.cities, []));

  return (
    <Layout isLoading={isLoading}>
      <div>
        <Title>Cities</Title>

        <Grid container spacing={1}>
          {cities.map(city => (
            <Grid
              key={city._id}
              item
              xs={12} sm={6} md={4} lg={3}
            >
              <CityCard
                name={city.name}
                country={city.country}
                cover={city.cover}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
};

export default Cities;
