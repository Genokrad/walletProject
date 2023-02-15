import { StyledNavLink, Styledlist } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <nav>
        <Styledlist>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="diagram">Statistics</StyledNavLink>
          </li>
        </Styledlist>
      </nav>
    </>
  );
};
