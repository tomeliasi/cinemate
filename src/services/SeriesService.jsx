import React from 'react';
// SeriesService.js
import axios from "axios";

const api_key = "b19f01d37a3c74652fd8a097c5d5501d";
const baseurl = `https://api.themoviedb.org/3`;
const popular = `/tv/popular?api_key=${api_key}&language=en-US`;
const popularurl = baseurl + popular;
const discover =`/discover/tv?api_key=${api_key}&language=en-US&page=2`;
const discoverurl = baseurl + discover;

const PopularSeries = async () => {
  try {
    const response = await axios.get(popularurl);
    return response.data;
  } catch (error) {
    console.error("Error fetching discovered movies:", error);
  }
};

const DiscoverSeries = async () =>
{
  try {
    const response = await axios.get(discoverurl);
    return response.data;
  } catch (error) {
    console.error("Error fetching discovered movies:", error);
  }
}

export  {PopularSeries,DiscoverSeries};