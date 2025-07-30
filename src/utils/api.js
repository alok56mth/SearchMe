import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const params = {
    key: 'AIzaSyDDe_D81bmARRYhTMZICYXofSHwWLlHewE',
    cx: '50e7fd036be294cb2'
}

export const fetchDataFromApi = async (payload) => {
    const {data} = await axios.get(BASE_URL, {
        params: {...params, ...payload}
    })
    return data;
};

// export const fetchDataFromApi = async (payload) => {
//   try {
//     const { data } = await axios.get(BASE_URL, {
//       params: { ...params, ...payload }
//     });
//     return data;
//   } catch (error) {
//     if (error.response?.status === 429) {
//       console.warn("Rate limit exceeded. Retrying in 5 seconds...");
//       await new Promise(res => setTimeout(res, 5000));
//       return await fetchDataFromApi(payload); // retry once
//     } else {
//       console.error("API error:", error.message);
//       throw error;
//     }
//   }
// };


