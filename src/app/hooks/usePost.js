import axios from 'axios';

const usePost = (headers) => {
  const postRequest = async (url, data) => {
    try {
      await axios.post(url, data, { headers });
    } catch (error) {
      console.error(error);
    }
  };

  return { postRequest };
};

export default usePost;
