import axios from 'axios';


export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), { 
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'be8eb69579mshf9931e4da899524p158186jsnc264780613b1'
        }
    })
    return data;
}

// headers: {
//   'x-rapidapi-host': 'bayut.p.rapidapi.com',
//   'x-rapidapi-key': 'be8eb69579mshf9931e4da899524p158186jsnc264780613b1'
// }