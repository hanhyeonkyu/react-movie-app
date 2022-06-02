import SvgIcon from "@mui/material/SvgIcon";
import React from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { graphqlClient } from "../graphql";
import { GET_MOVIE } from "../queries";

function HomeIcon(props: any) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  background: #56ccf2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2f80ed,
    #56ccf2
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2f80ed,
    #56ccf2
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-top: 2rem;
  margin-bottom: auto;
  width: 80vw;
  overflow-y: scroll;
  height: 28vh;
`;

const Title = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffffff;
  font-weight: 600;
`;

const Subtitle = styled.div`
  font-size: 1rem;
  margin-bottom: 0.6rem;
  color: #ffffff;
  font-weight: 400;
`;

const Description = styled.div`
  font-size: 1.1rem;
  color: #ffffff;
  font-weight: 500;
`;

interface IPosterProps {
  bg: string;
}
const Poster = styled.div`
  width: 80vw;
  height: 60vh;
  background: url(${(props: IPosterProps) => props.bg});
  margin-bottom: auto;
  margin-top: 1rem;
  box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.16),
    0 0.3rem 0.5rem rgba(0, 0, 0, 0.23);
  overflow: hidden;
  background-size: cover;
  background-position: center center;
`;

const SpinnerContainer = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
  background: #56ccf2;
`;

const Spinner = styled.div`
  height: 4rem;
  width: 4rem;
  margin-top: 40vh;
  text-align: center;
  color: rgba(90, 90, 90, 0.2);
  position: relative;
  display: inline-block;
  border: 5px solid;
  border-radius: 50%;
  border-right-color: #5a5a5a;
  animation: rotate 1s linear infinite;
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const MovieQuery = (id: number) => {
  return useQuery("get-movie", async () => {
    const { movie } = await graphqlClient.request(GET_MOVIE, { id });
    return movie;
  });
};

export const Detail = () => {
  const { id } = useParams();
  let numId = Number(id);
  const { data, isLoading, isSuccess } = MovieQuery(numId);
  return (
    <React.Fragment>
      {isLoading && (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
      {isSuccess && data && (
        <Container>
          <Poster bg={data.medium_cover_image} />
          <Column>
            <Subtitle>
              <Title>{data.title}</Title>
              <Subtitle>
                {data.language} - ⓢ : {data.rating}
              </Subtitle>
              <Description>{data.description_intro}</Description>
            </Subtitle>
            <Link to={`/`}>
              <button
                style={{ position: "fixed", top: "0.5rem", left: "0.5rem" }}
              >
                <HomeIcon style={{ fontSize: "1.5rem", color: "#686868" }} />
              </button>
            </Link>
          </Column>
        </Container>
      )}
    </React.Fragment>
  );
};
