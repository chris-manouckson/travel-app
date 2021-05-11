import React, { useCallback } from 'react';
import { useSelector } from 'react-redux'; 
import styled from 'styled-components';

import { Layout } from 'components/common';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
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
  const { isLoading } = useSelector(useCallback(state => state.dataset.getRequestStatus, []));
  const logoSource = useSelector(useCallback(state => state.dataset.data.org_logo, []));
  const statistics = useSelector(useCallback(state => state.dataset.data.counts, []));

  return (
    <Layout isLoading={isLoading}>
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
