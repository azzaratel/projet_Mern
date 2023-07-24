import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getcommande = createAsyncThunk("commande/get", async () => {
  try {
    let results = axios.get("http://localhost:5000/commande/");
    return results;
  } catch (error) {
    console.log(error);
  }
});
export const addcommande = createAsyncThunk(
  "commande/add",
  async (commande) => {
    try {
      let result = axios.post("http://localhost:5000/commande/add", commande);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deletecommande = createAsyncThunk(
  "commande/delete",
  async (id) => {
    try {
      let result = axios.delete(`http://localhost:5000/commande/${id}`);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editcommande = createAsyncThunk(
  "commande/edit",
  async ({ id, edit }) => {
    try {
      let result = axios.put(`http://localhost:5000/commande/${id}`, edit);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  commandelist: null,
  status: null,
};

export const commandeSlice = createSlice({
  name: "commande",
  initialState,
  reducers: {},
  extraReducers: {
    [getcommande.pending]: (state) => {
      state.status = "pending";
    },
    [getcommande.fulfilled]: (state, action) => {
      state.status = "success";
      state.commandelist = action.payload.data.commandes;
    },
    [getcommande.rejected]: (state) => {
      state.status = "fail";
    },
    [addcommande.pending]: (state) => {
      state.status = "pending";
    },
    [addcommande.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [addcommande.rejected]: (state) => {
      state.status = "fail";
    },
    [deletecommande.pending]: (state) => {
      state.status = "pending";
    },
    [deletecommande.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deletecommande.rejected]: (state) => {
      state.status = "fail";
    },
    [editcommande.pending]: (state) => {
      state.status = "pending";
    },
    [editcommande.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [editcommande.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = commandeSlice.actions;

export default commandeSlice.reducer;
