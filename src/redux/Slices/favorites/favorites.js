import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: [],
}

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState:initialState,
    reducers:{
        addToFavorites : ( state,action)=>{
            const newItem = action.payload;
            console.log(newItem)
            
            // Check if the item is not already in favorites
            const isAlreadyInFavorites = state.favorites.some(item => item.productId === newItem.productId);
            if (!isAlreadyInFavorites) {
                state.favorites.push(newItem);

            }

           
        },
        removeFromFavorites: (state,action)=>{
            const newItem = action.payload;
            console.log(newItem)
            const isAlreadyInFavorites = state.favorites.some((item)=> item.productId === newItem.productId);
            if(isAlreadyInFavorites)
            {
                state.favorites = state.favorites.filter((item)=> item.productId !== newItem.productId)
            }

        },
        clearFavorites: (state)=>{
            state.favorites =[];
            console.log(state)
        }
    }

})
export const {addToFavorites,clearFavorites,removeFromFavorites} = favoriteSlice.actions;
 export default favoriteSlice.reducer;


 export const getFavouritesCount = state => {
    return state.favorites.favorites.length
  };