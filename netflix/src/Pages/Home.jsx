import React from 'react'
import Main from '../components/Main'
import RowData from '../components/RowData'
import requests from '../Requests'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Main/>
        <RowData rowId='1' title='Upcoming' fetchURL={requests.requestUpcoming}/>
        <RowData rowId='2' title='Popular' fetchURL={requests.requestPopular}/>
        <RowData rowId='3' title='Trending' fetchURL={requests.requestTrending}/>
        <RowData rowId='4' title='Top Rated' fetchURL={requests.requestTopRated}/>
        <RowData rowId='5' title='Horror' fetchURL={requests.requestHorror}/>
        <Footer />
    </div>
  )
}

export default Home