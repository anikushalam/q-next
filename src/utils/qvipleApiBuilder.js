export const getInTouchPage = (builder) => {
  return builder.mutation({
    query: (touch) => ({
      url: "/landing/get-touch",
      method: "POST",
      body: touch,
    }),
  });
};

export const careerArray = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/landing/career-detail`,
      method: "POST",
      body: data,
    }),
  });
};
