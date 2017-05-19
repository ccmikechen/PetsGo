import api from './api';

const API_URL = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
const API_KEY = 'AIzaSyBo5Htw9pSTblCd8eAJwGJswI3p12fMj7Q';

const parseResults = (type) => (results) => (
  results.results.map((item) => ({
    address: item.formatted_address,
    coordinate: item.geometry.location,
    id: item.id,
    name: item.name,
    openingHours: item.opening_hours,
    rating: item.rating,
    type
  }))
);

const fetchLocationsByKeyword = (position, keyword, type) => {
  return api.fetch(API_URL, {
    location: `${position.coords.latitude},${position.coords.longitude}`,
    rankby: 'distance',
    key: API_KEY,
    query: keyword,
    language: 'zh-TW',
  })
  .then(parseResults(type));
}

export default {
  getHospitals: (position) => (
    fetchLocationsByKeyword(position, '動物 醫院', 'hospital')
  ),
  getRestaurants: (position) => (
    fetchLocationsByKeyword(position, '寵物 餐廳', 'restaurant')
  ),
  getSalons: (position) => (
    fetchLocationsByKeyword(position, '寵物 美容', 'salon')
  ),
  getNecessities: (position) => (
    fetchLocationsByKeyword(position, '寵物 用品', 'necessities')
  ),
};
