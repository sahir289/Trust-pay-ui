/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { RootState } from "../../../store/store";

// Select params
export const getPaginationData = (state: RootState) => state.params.params;