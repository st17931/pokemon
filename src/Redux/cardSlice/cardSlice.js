import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
    "getingData",
    async ( _, thunkApi)=>{
        const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");
        const jsonData = await data.json();
      //console.log("jsonData is",jsonData);
        const arrayOfCards = await Promise.all(jsonData.results.map((singleCard)=>  fetch(singleCard["url"])))
      //console.log("array of cards is",arrayOfCards);
        const arrayOfCardsJSON = await Promise.all(arrayOfCards.map((cardResponse => cardResponse.json())));

        console.log("current state is ",thunkApi.getState().card.items.length);
        console.log("Array of cards is",arrayOfCardsJSON);
        return arrayOfCardsJSON;
    }
    
)


export const fetchSingleData = createAsyncThunk(
"",async(id,thunkApi)=>{
    if(typeof id == "number" || typeof id == "string"){
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const jsonData = await data.json();
        return jsonData;
    }else{
        alert("Pls enter id or an name");
    }
})



export const fetchMoreData = createAsyncThunk(
    "getMoreData", async(_, thunkApi)=>{
        const offset = thunkApi.getState().card.items.length;
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`);
        const jsonData = await data.json();
      //console.log("jsonData is",jsonData);
        const arrayOfCards = await Promise.all(jsonData.results.map((singleCard)=>  fetch(singleCard["url"])))
      //console.log("array of cards is",arrayOfCards);
        const arrayOfCardsJSON = await Promise.all(arrayOfCards.map((cardResponse => cardResponse.json())));
        //return Promise.all(arrayOfCards.map((cardResponse => cardResponse.json())));
        // console.log("current state in fetchMoreData ",thunkApi.getState().card.items.length);
        // console.log("Array of cards in fetchMoreData",arrayOfCardsJSON);
        return arrayOfCardsJSON;
    }
)

const  cardSlice = createSlice({
    name:"card",
    initialState:{
        items: [],
        isLoading: false
    },

    reducers:{
        filterByType(state, action){
            state.items = state.items.filter((item)=> item?.types[0]?.type?.name == action.payload || item?.types[1]?.type?.name == action.payload)
        }
    },
    
    extraReducers: (builder)=>{
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.items.push(...action.payload);
        });

        builder.addCase(fetchData.pending,(state)=>{
            state.isLoading = true;
        })

        builder.addCase(fetchMoreData.pending,(state)=>{
            state.isLoading = true;
        })

        builder.addCase(fetchMoreData.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.items.push(...action.payload);
        });

        builder.addCase(fetchSingleData.pending,(state)=>{
            state.isLoading = true;
        });

        builder.addCase(fetchSingleData.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.items.length = 0;
            state.items.push(action.payload);
        });

       
    }
})

export const {filterByType} = cardSlice.actions; 
export default cardSlice.reducer;