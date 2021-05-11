import React from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import styled, { createGlobalStyle } from 'styled-components';

const navigationLinks = [
  { title: 'Home', to: '/' },
  { title: 'Guides', to: '/guides' },
  { title: 'Cities', to: '/cities' },
  { title: 'Experiences', to: '/experiences' },
];

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', serif;
  }
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  min-width: 100%;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  padding: 24px;
`;

const Header = styled.header`
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  min-height: 70px;
  box-shadow: 0 0 4px gray;
`;

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 24px;
`;

const HeaderNavLinkWrapper = styled.div`
  margin-right: 24px;
  border-bottom: ${(props) => props.isActive ? '2px solid' : 'none'};
`;

const HeaderNavLink = styled(RouterLink)`
  padding: 4px 0;
  text-decoration: none;
  color: inherit;
`;

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Layout = (props) => {
  const { isLoading, children } = props;

  const location = useLocation();

  if (isLoading) {
    return (
      <Container>
        <LoadingContainer>
          <CircularProgress />
        </LoadingContainer>
      </Container>
    );
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <HeaderNav>
            {navigationLinks.map(navigationLink => (
              <HeaderNavLinkWrapper
                key={`${navigationLink.title}${navigationLink.to}`}
                isActive={navigationLink.to === location.pathname}
              >
                <HeaderNavLink to={navigationLink.to}>
                  {navigationLink.title}
                </HeaderNavLink>
              </HeaderNavLinkWrapper>
            ))}
          </HeaderNav>
        </Header>

        <Content>
          {children}
        </Content>
      </Container>
    </>
  );
};

Layout.defaultProps = {
  isLoading: false,
};

export default Layout;
