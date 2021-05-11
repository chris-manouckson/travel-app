// TODO: implement caching.
const requestGetDataset = async (cache = true) => {
  const url = process.env.REACT_APP_API_URL;

  if (!localStorage.getItem('dataset')) {
    const response = await fetch(url);

    const data = await response.json();

    localStorage.setItem('dataset', JSON.stringify(data));

    return data;
  }

  return JSON.parse(localStorage.getItem('dataset'));
};

export default requestGetDataset;
