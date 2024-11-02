//import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { useStarredShow } from "../lib/useStarredShow";
import {  getShowsByIds } from "../Api/Tvmaze";
import ShowGrid from "../Components/shows/ShowGrid";
import {TextCenter} from "../Components/Common/TextCenter"

const Starred = () => {

  const [starredShowsIds] = useStarredShow();


  const {data: starredShows, error: starredShowsError} = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn:  ()=> getShowsByIds(starredShowsIds).then(result=>result.map(show=>({show}))),
      refetchOnWindowFocus: false,
    
  });

  if( starredShows?.length === 0){
    return <TextCenter>No Shows were starred</TextCenter>
  }


  if( starredShows?.length > 0){
    return <ShowGrid shows={starredShows}/>
  }

  if(starredShowsError){
    return <TextCenter>Error Occurred: {starredShowsError.message}</TextCenter>
  }

           return <TextCenter>Shows are Loading</TextCenter>
};

export default Starred;
