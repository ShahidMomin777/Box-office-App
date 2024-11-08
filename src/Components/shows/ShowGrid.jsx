//import { useEffect, useReducer } from 'react';
import ShowCard from './ShowCard';
import { useStarredShow } from '../../lib/useStarredShow';
import { FlexGrid } from '../Common/FlexGrid';
import noimage from "../../lib/no-image.png"
//import { useLoaderData } from 'react-router-dom';


const ShowGrid = ({shows})=>{
   
    const[starredShows, dispatchStarred] = useStarredShow();
    
    

    const onStarMeClick = (showId)=>{
       const isStarred= starredShows.includes(showId);

       if(isStarred){
        dispatchStarred({type:'UNSTAR',showId})
       } else{
        dispatchStarred({type:'STAR',showId});
       }
    };
    return (
        <FlexGrid>
           { shows.map((data) => 
            <ShowCard 
            key ={data.show.id} 
            id={data.show.id} 
            name={data.show.name} 
            image=
            {data.show.image? data.show.image.medium: noimage } 
              summary={data.show.summary}
              onStarMeClick={onStarMeClick}
              isStarred={starredShows.includes(data.show.id)}
            />
            )}

            
        </FlexGrid>
    )
}

export default ShowGrid;