import axios from 'axios';

const useDelete = (headers) => {
  const deleteRequest = async (url) => {
    try {
      await axios.delete(url, { headers });
    } catch (error) {
      console.error(error);
    }
  };

  return { deleteRequest };
};

export default useDelete;
