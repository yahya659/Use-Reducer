import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    result1: 6,
    // result2:2,
}
export const calcSlice = createSlice({
    name: "calc",
    initialState: initialState,
    reducers: {
        add: (curentstate, action) => { 
            console.log("calling the reducer for action named:(sum)", action)
            const sum = (Number(action.payload.firstnumber) + Number(action.payload.Secoundnumber))
            curentstate.result1 = sum;

        },
        sup: (curentstate, action) => {
            const sup = (Number(action.payload.firstnumber) - Number(action.payload.Secoundnumber))
            curentstate.result1 = sup;
        },
        mult:(curentstate,action)=>{
            const mult=(Number(action.payload.firstnumber) * Number(action.payload.Secoundnumber))
            curentstate.result1=mult;
        },
         duvc:(curentstate,action)=>{
            const duvc=(Number(action.payload.firstnumber) / Number(action.payload.Secoundnumber))
            curentstate.result1=duvc;
        }


    }
})
export const { add, sup ,mult,duvc } = calcSlice.actions;
export default calcSlice.reducer;