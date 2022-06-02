import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 15rem;
  width: 100%;
  box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.16),
    0 0.3rem 0.5rem rgba(0, 0, 0, 0.23);
  border-radius: 1rem;
  overflow: hidden;
`;

interface IPosterProps {
  bg: string;
}
const Poster = styled.div`
  background-image: url(${(props: IPosterProps) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  &:visited {
    width: 102%;
  }
  &:hover {
    width: 102%;
  }
  &:active {
    width: 102%;
  }
`;

export const Movie = ({
  id,
  bg,
}: {
  key?: React.Key | null | undefined;
  id?: React.Key | null | undefined;
  bg?: string;
}) => (
  <Container>
    <Link to={`/${id}`}>
      <Poster bg={bg!} />
    </Link>
  </Container>
);
