import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from "./Banner"
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner></Banner>
      <Row title = "NETFLIX ORIGINALS" fetchURL = {requests.fetchNetflixOriginals} islargeRow></Row>
      <Row title = "Trending Now" fetchURL = {requests.fetchTrending}></Row>
      <Row title = "Top Rated" fetchURL = {requests.fetchTopRated}></Row>
      <Row title = "Action Movies" fetchURL = {requests.fetchActionMovies}></Row>
      <Row title = "Comedy Movies" fetchURL = {requests.fetchComedyMovies}></Row>
      <Row title = "Horror Movies" fetchURL = {requests.fetchHorrorMovies}></Row>
      <Row title = "Romantic Movies" fetchURL = {requests.fetchRomanceMovies}></Row>
      {/* <Row title = "Documentaries" fetchURL = {requests.fetchDocumantaries}></Row> */}
    </div>
  );
}

export default App;
