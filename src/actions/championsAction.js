import axios from "axios";
import { championsURL } from '../api'

// const tes = `https://api.pandascore.co/lol/champions?search[name]=${searchTerm}&token=`

//Action Creator
export const loadChampions = (page) => async (dispatch) => {
   //FETCH AXIOS
   const championsData = await axios.get(championsURL(page));
   dispatch({
      type: "FETCH_CHAMPS",
      payload: {
         champions: championsData.data,
      }
   })
}

export const loadSearchedChampions = (searchTerm) => async (dispatch) => {
   const championsData = await axios.get(`https://api.pandascore.co/lol/champions?search[name]=${searchTerm}&token=ry749XTxEzbKVGLCSbLEFW2XQeofu0jH3SzRBd5OKUOgIzxuXRY`);
   dispatch({
      type: "FETCH_CHAMPS",
      payload: {
         champions: championsData.data,
      }
   })
}