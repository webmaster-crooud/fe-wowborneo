export const filterEmptyPayload = (payload: any): any => {
  const newPayload: any = {};

  for (let key in payload) {
    if (
      (typeof payload[key] == "string" && payload[key] == "") ||
      (typeof payload[key] == "number" && payload[key] == 0) ||
      payload[key] == null ||
      payload[key] == undefined
    )
      continue;
    newPayload[key] = payload[key];
  }

  return newPayload;
};
