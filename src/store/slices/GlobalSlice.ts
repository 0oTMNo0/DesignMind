import { formPayloadType } from '@/constants/Global';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  payload: formPayloadType | null;
}

const initialState: FormState = {
  payload: null,
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
  },
});

export const { saveFormPayload, clearFormPayload } = globalSlice.actions;
export default globalSlice.reducer;
