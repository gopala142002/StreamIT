import styled from 'styled-components';
import {Link} from 'react-router-dom';
import PodcastCard from '../components/PodcastCard';
const DashboardMain=styled.div`
  padding:20px 30px;
  padding-bottom:200px;
  height:100%;
  overflow-y:scroll;
  gap:20px;
  display:flex;
  flex-direction:column;
`;
const FilterContainer=styled.div`
  display:flex;
  flex-direction:column;
  background-color:${({theme})=>theme.bg};
  border-radius:10px;
  padding:20px 30px;
`;
const Topic=styled.div`
  color:${({theme})=>theme.text_primary};
  font-size:24px;
  font-weight:500;
  display:flex;
  justify-content:space-between;
  align-items:center;
  @media (max-width:768px)
  {
    font-size:18px;
  }
`;
const Span=styled.div`
  color:${({theme})=>theme.text_primary};
  font-size:16px;
  font-weight:400;
  @media (max-width:768px)
  {
    font-size:14px;
  }
`;
const Podcasts=styled.div`
  display:flex;
  flex-wrap:wrap;
  // justify-content:space-between;
  gap:20px;
  padding:18px 6px;
  @media (max-width:550px){
    center;
  }
`;
const Dashboard = () => {
  return (
    <DashboardMain>
      <FilterContainer>
        <Topic>
          MostPopular
          <Link to="/showpodcasts/mostpopular" style={{"text-decoration":"none"}}>
            <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcasts>
          <PodcastCard/>
          <PodcastCard/>
          <PodcastCard/>
          <PodcastCard/>
          <PodcastCard/>
        </Podcasts>
      </FilterContainer>
      <FilterContainer>
        <Topic>
          Comedy
          <Link to="/showpodcasts/comedy" style={{"text-decoration":"none"}}>
            <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcasts>
          <PodcastCard/>
          <PodcastCard/>
          <PodcastCard/>
          <PodcastCard/>
        </Podcasts>
      </FilterContainer>
    </DashboardMain>
  )
}

export default Dashboard
