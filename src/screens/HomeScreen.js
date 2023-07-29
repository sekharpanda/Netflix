import React from 'react';
import './HomeScreen.css';
import Nav from '../Nav';
import Banner from '../Banner';
import requests from '../Request';
import Row from '../Row';

function HomeScreen(){
    return <div className='HomeScreen'>
       <Nav/>
       <Banner/>

       <Row

       title = "NETFLIX ORIGINALS"
       fetchUrl = {requests.fetchNetflixOriginals}
       isLargeRow
       
       />
       
 <Row

title = "NETFLIX TRENDINGS"
fetchUrl = {requests.fetchTrending}
isLargeRow

/>
<Row

title = "NETFLIX TOP RATED"
fetchUrl = {requests.fetchTopRated}
isLargeRow

/>
<Row

title = "NETFLIX ACTION MOVIES"
fetchUrl = {requests.fetchActionMovies}
isLargeRow

/>
<Row

title = "NETFLIX COMEDY MOVIES"
fetchUrl = {requests.fetchComedyMovies}
isLargeRow

/>
<Row

title = "NETFLIX HORROR MOVIES"
fetchUrl = {requests.fetchHorrorMovies}
isLargeRow

/>

<Row

title = "NETFLIX ROMANCE MOVIES"
fetchUrl = {requests.fetchRomanceMovies}
isLargeRow

/>

<Row

title = "NETFLIX DOCUMENTRIES"
fetchUrl = {requests.fetchDocumentaries}
isLargeRow

/> 






      
    </div>
}
export default HomeScreen;