//import { useEffect, useState } from "react";
import { useParams,  Link } from 'react-router-dom';
import { getShowById } from '../Api/Tvmaze';

import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../Components/shows/ShowMainData';
import Details from '../Components/shows/Details';
import Seasons from '../Components/shows/Seasons';
import Cast from '../Components/shows/Cast';
import styled from 'styled-components';
import { TextCenter } from '../Components/Common/TextCenter';


const Show = () => {
  const { showId } = useParams();
  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
    refetchOnWindowFocus: false,
  });

  // const navigateTo = useNavigate();

  // const onGoBack = ()=>{
  //     navigateTo('/');

  // }

  // const {showData, showError} = useShowById(showId);
  if (showError) {
    return <TextCenter>We have an error: {showError.message}</TextCenter>;
  }

  if (showData) {
    return (
      <ShowPageWrapper>
        
        {/* <button type='button' onClick={onGoBack}>Go Back</button> */}
        <BackHomeWrapper>
        <Link to='/'>Go Back Home</Link>
        </BackHomeWrapper>

        <ShowMainData 
        image = {showData.image}
        name= {showData.name}
        rating={showData.rating}
        summary={showData.summary}
        genres={showData.genres}
        />
        <InfoBlock>
          <h2>Details</h2>
          <Details status={showData.status}
          premiered ={showData.premiered}
          network ={showData.network}
          />
        </InfoBlock>
        <InfoBlock>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons}/>
        </InfoBlock>

        <InfoBlock>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast}/>
        </InfoBlock>
      </ShowPageWrapper>
    );
  }
  return <TextCenter>Show page for show {showId}</TextCenter>;
};

export default Show;


const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;