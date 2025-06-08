import { formPayloadType } from '@/constants/Global';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  payload: formPayloadType | null;
  result: any;
}

const initialState: FormState = {
  payload: null,
  result: null,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    saveFormPayload(state, action: PayloadAction<formPayloadType>) {
      state.payload = action.payload;
    },
    clearFormPayload(state) {
      state.payload = null;
    },
    saveFormResult(state, action: PayloadAction<any>) {
      state.result = action.payload;
    },
    clearFormResult(state) {
      state.result = null;
    },
  },
});

export const {
  saveFormPayload,
  clearFormPayload,
  saveFormResult,
  clearFormResult,
} = globalSlice.actions;
export default globalSlice.reducer;
