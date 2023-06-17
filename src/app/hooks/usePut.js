import axios from 'axios';

const usePut = (headers) => {
  const putRequest = async (url, data) => {
    try {
      await axios.put(url, data, { headers });
    } catch (error) {
      console.error(error);
    }
  };

  return { putRequest };
};

export default usePut;
