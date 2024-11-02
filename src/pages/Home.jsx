//import React from 'react'
import {  useState } from 'react';
import { searchForShows , searchForPeople } from '../Api/Tvmaze';
import SearchForm from '../Components/SearchForm';
import ShowGrid from '../Components/shows/ShowGrid';
import ActorsGrid from '../Components/actors/ActorsGrid';
import { useQuery } from '@tanstack/react-query';


const Home = () => { 
  const [filter, setFilter] = useState(null);

   //const[counter, dispatch]  =useReducer(reducerFn,0)
  
  const {data: apiData, error: apiDataError} = useQuery({
    queryKey: ['search', filter],
    queryFn: ()=> filter.searchOption === 'shows'? searchForShows(filter.q): searchForPeople(filter.q),
    enabled: !!filter,
    refetchOnWindowFocus:false,
  });


 

  const onSearch = async ({q, searchOption}) => {
  
setFilter({q, searchOption})
  };

  const renderApi = () => {
    if (apiDataError) {
      return <div>Error Occur: {apiDataError.message}</div>;
    }

    if (apiData) {
      return apiData[0].show? <ShowGrid shows={apiData}/>
      :<ActorsGrid actors={apiData}/>
    }

    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch}/>
      <div>{renderApi()}</div>
      
    </div>
  );
};

export default Home;
