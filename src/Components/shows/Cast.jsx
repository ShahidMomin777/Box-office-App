import styled from "styled-components";
import noimage from "../../lib/no-image.png"
const Cast = ({cast}) => {
  return (
    <CastList>
        {
       cast.map(({person, character,voice})=> <div className="cast-item" key={person.id}>
        <div className="pic-wrapper">
           <img src={person.image ? person.image.medium: noimage}/>
        </div>
        
        <div className="actor"> 
            {person.name} | {character.name} { voice && '| Voiceover'}
        </div>
        </div>)}
    </CastList>
  )
};

export default Cast


const CastList = styled.div`
  display: flex;
  flex-wrap: wrap;
  .cast-item {
    flex: 1 0 50%;
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    @media only screen and (max-width: 768px) {
      flex: 1 0 100%;
    }
  }
  .pic-wrapper {
    width: 50px;
    min-width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .actor {
    margin-left: 25px;
  }
`;