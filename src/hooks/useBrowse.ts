import { useState } from "react";

export interface Ibrowse {
  search?: string;
  where?: string;
  in_?: string;
  not_?: string;
  isnull?: string;
  gte?: string;
  lte?: string;
  paginate?: boolean;
  limit?: number;
  page?: number;
  order?: string;
}

const useBrowse = <T>(initial: T = {} as T) => {
  const [filter, setFilter] = useState<T>(initial);

  const fset = (key: keyof T, val: any, col?: any) => {
    const newFilter = {
      ...filter,
      [key]: col ? `${col}:${val}` : val,
    };
    if ((typeof val == "string" && val === "") || val == null) {
      delete newFilter[key];
    }

    setFilter(newFilter);
  };

  const fadd = (key: keyof T, val: any, col?: any) => {
    let v = col ? `${col}:${val}` : val;

    if (filter[key]) v = filter[key] + "+" + v;

    setFilter({
      ...filter,
      [key]: v,
    });
  };

  const fjoin = (colval: string | null | undefined, colvals: string) => {
    return colval ? `${colval}+${colvals}` : colvals;
  };

  const fclear = (key: keyof T) => {
    setFilter({
      ...filter,
      [key]: undefined,
    });
  };

  return { filter, fset, fadd, fjoin, fclear };
};

export default useBrowse;
