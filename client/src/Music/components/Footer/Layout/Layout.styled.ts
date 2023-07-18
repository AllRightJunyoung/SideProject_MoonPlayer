import styled from 'styled-components';

interface LayoutProps {
  active: boolean;
}

export const Layout = styled.div<LayoutProps>(
  ({ active }) => `
    position:fixed;
    bottom:0;
    width:100%;
    background: linear-gradient(
      333deg,
      rgba(12, 12, 56, 1) 0%,
      rgba(45, 34, 76, 1) 36%,
      rgba(36, 18, 95, 1) 73%,
      rgba(38, 64, 92, 1) 100%
    );
    transform: ${!active ? 'translateY(110px)' : ''};
    transition:'0.48s ease';
    margin-top:${!active ? '-110px' : ''};

    @media (max-width: 414px) {
      transform: ${!active ? 'translateY(150px)' : ''};
      margin-top:${!active ? '-150px' : ''};
    }

    `
);
