import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import {
  Layout,
  ExperienceSection,
} from 'components/common';

const Title = styled.h1`
  margin-bottom: 24px;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Experiences = () => {
  const { isLoading } = useSelector(useCallback(state => state.dataset.getRequestStatus, []));
  const experiences = useSelector(useCallback(state => state.dataset.data.experiences, []));

  return (
    <Layout isLoading={isLoading}>
      <div>
        <Title>Experiences</Title>

        <SectionContainer>
          {experiences.map(experience => (
              <ExperienceSection
                key={experience.id}
                title={experience.eng.name}
                category={experience.category}
                description={experience.eng.description}
                tags={experience.tags}
                medias={experience.medias}
              />
          ))}
        </SectionContainer>
      </div>
    </Layout>
  );
};

export default Experiences;
