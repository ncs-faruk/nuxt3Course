import axios from 'axios';

export const useGetData = () => {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(null);

  const fetch = async () => {
    loading.value = true;
    try {
      const { data: requestedData } = await axios.get(
        'https://fakestoreapi.com/products/'
      );
      data.value = requestedData;
    } catch (ex) {
      error.value = ex;
    } finally {
      loading.value = false;
    }
  };

  fetch();

  return { data, error, loading };
};
