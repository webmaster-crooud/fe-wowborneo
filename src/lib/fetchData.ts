export const fetchData = async (params: string) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/${params}`
  );

  const response = await request.json();

  return response;
};
