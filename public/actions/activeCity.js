const updateActiveCity = (city) => {
  return {
    type: 'ACTIVE_CITY',
    payload: city
  };
};

export default updateActiveCity;
