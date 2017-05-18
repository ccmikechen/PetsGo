import api from './api';

const API_URL = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
const API_KEY = 'AIzaSyBo5Htw9pSTblCd8eAJwGJswI3p12fMj7Q';

export default {
  getHospitals: (position) => {
    console.log(`${position.coords.latitude},${position.coords.longitude}`);
    return api.fetch(API_URL, {
      location: `${position.coords.latitude},${position.coords.longitude}`,
      radius: 20000,
      key: API_KEY,
      query: '動物 醫院',
      language: 'zh-TW'
    })
    .then(results => (
      results.results.map((item) => ({
        address: item.formatted_address,
        coordinate: item.geometry.location,
        id: item.id,
        name: item.name,
        openingHours: item.opening_hours,
        rating: item.rating
      }))
    ));
  }
};
