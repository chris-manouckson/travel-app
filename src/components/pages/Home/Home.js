import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import {
  datasetGetPending,
  datasetGetSuccess,
  datasetGetFailure,
} from 'store/actions';
import requestGetDataset from 'api';
import { Layout } from 'components/common';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin-bottom: 24px;
`;

const Logo = styled.img`
  max-width: 360px;
`;

const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StatisticsWrapper = styled.p`
  margin-bottom: 12px;
  font-size: 1.2rem;
`;

const StatisticsLabel = styled.b`
  margin-right: 4px;
  text-transform: capitalize;
`;

const Home = () => {
  const dispatch = useDispatch();

  const logoSource = useSelector(useCallback(state => state.dataset.data.org_logo, []));
  const statistics = useSelector(useCallback(state => state.dataset.data.counts, []));

  // TODO: move to a higher-order component.
  useEffect(() => {
    (async () => {
      dispatch(datasetGetPending());
  
      try {
        const { dataset: datasetData } = await requestGetDataset();
  
        dispatch(datasetGetSuccess(datasetData));
      } catch (error) {
        // TODO: dispatch alert error message.
  
        dispatch(datasetGetFailure(error));
      } 
    })();
  }, [dispatch]);

  return (
    <Layout>
      <Container>
        <h1>Welcome!</h1>

        {logoSource && <Logo src={logoSource} />}

        <StatisticsContainer>
          <StatisticsWrapper>
            <StatisticsLabel>Cities:</StatisticsLabel>{statistics.cities}
          </StatisticsWrapper>
          <StatisticsWrapper>
            <StatisticsLabel>Guides:</StatisticsLabel>{statistics.guides}
          </StatisticsWrapper>
          <StatisticsWrapper>
            <StatisticsLabel>Experiences:</StatisticsLabel>{statistics.experiences}
          </StatisticsWrapper>
          <StatisticsWrapper>
            <StatisticsLabel>Explorers:</StatisticsLabel>{statistics.explorers}
          </StatisticsWrapper>
        </StatisticsContainer>
      </Container>
    </Layout>
  );
};

export default Home;
