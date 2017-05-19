import api from './api';

const API_URL = 'http://data.coa.gov.tw/Service/OpenData/AnimalOpenData.aspx';

const fetchAdoptionList = () => {
  return api.fetch(API_URL).then((results) => {
    return results;
  });
};

export default {
  getAdoptionList: () => (
    fetchAdoptionList()
  )
};
