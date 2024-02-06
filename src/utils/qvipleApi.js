import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./BaseUrl";
import { getInTouchPage, careerArray } from "./qvipleApiBuilder";

export const qvipleApi = createApi({
  reducerPath: "qvipleApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    postGetInTouch: getInTouchPage(builder),
    careerDataLanding: careerArray(builder),
  }),
});

export const { usePostGetInTouchMutation, useCareerDataLandingMutation } =
  qvipleApi;
