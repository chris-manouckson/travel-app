import React from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const navigationLinks = [
  { title: 'Home', to: '/' },
  { title: 'Guides', to: '/guides' },
  { title: 'Cities', to: '/cities' },
  { title: 'Experiences', to: '/experiences' },
  { title: 'Explorers', to: '/explorers' },
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
`;

const HeaderNavLink = styled(RouterLink)`
  padding: 4px 0;
  border-bottom: ${(props) => props.isActive ? '2px solid' : 'none'};
  text-decoration: none;
  color: inherit;
`;

const Layout = (props) => {
  const { children } = props;

  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <HeaderNav>
            {navigationLinks.map(navigationLink => (
              <HeaderNavLinkWrapper key={`${navigationLink.title}${navigationLink.to}`}>
                <HeaderNavLink to={navigationLink.to} isActive={navigationLink.to === location.pathname}>
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

export default Layout;
