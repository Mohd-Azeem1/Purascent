import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bucket:[]
}

const bucketslice = createSlice({
    name: "bucket",
    initialState,
    reducers:{
        add:(state, action) => {
            state.bucket = [...state.bucket, action.payload]
            console.log(state.bucket)
        },
        remove:(state, action) => {
            const index = state.bucket.findIndex(
                (bucketItem) => bucketItem.id === action.payload
            )
            let newBucket = [...state.bucket]

            if(index >= 0){
                newBucket.splice(index, 1)
            }else{
                console.warn(`cant remove product id(${action.payload}) as its not in bucket`)
            }
            return {
                ...state,
                bucket: newBucket
            }
        }
    }
})

export const {add, remove} = bucketslice.actions;
export default bucketslice.reducer