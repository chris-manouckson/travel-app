// TODO: implement caching.
const requestGetDataset = async (cache = true) => {
  const url = process.env.REACT_APP_API_URL;

  const response = await fetch(url);

  const data = await response.json();

  return data;
};

export default requestGetDataset;
