import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import qs from "query-string";
import { RemoveUrlQueryParams, UrlQueryParams } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateUrl = (url: string) => {
  if (!url.trim()) return "";
  let finalUrl: URL;
  try {
    finalUrl = new URL(url);
  } catch (error) {
    finalUrl = new URL("http://" + url);
  }

  return finalUrl.origin;
};

export function formatRupiah(number: number | null | undefined) {
  if (number === null || number === undefined) {
    return "-";
  }

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  return formatter.format(number);
}

export function capitalizeFirstLetter(string: string | undefined) {
  if (!string) string = "";
  string = string.replace(/_/g, " ");
  return string.toLowerCase().replace(/(^|\s)\S/g, function (firstLetter) {
    return firstLetter.toUpperCase();
  });
}

export async function urlToBlobFile(
  fileUrl: string[] | string | null,
  fileKey: string[] | string | null
): Promise<File[]> {
  if (!fileUrl || !fileKey) {
    return [];
  }

  const fetchFile = async (url: string, key: string) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new File([blob], key, { type: blob.type });
  };

  if (Array.isArray(fileUrl) && Array.isArray(fileKey)) {
    const filePromises = fileUrl.map((url, index) => {
      const key = fileKey[index];
      return fetchFile(url, key);
    });
    return await Promise.all(filePromises);
  } else if (typeof fileUrl === "string" && typeof fileKey === "string") {
    const file = await fetchFile(fileUrl, fileKey);
    return [file];
  } else {
    throw new Error(
      "fileUrl and fileKey must both be either arrays of the same length or single strings."
    );
  }
}

export function limitWords(
  text: string | undefined | null,
  maxWords: number
): string {
  if (!text) {
    return "";
  }
  const words: string[] = text.trim().split(/\s+/);
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + " ...";
  } else {
    return text;
  }
}

import moment from "moment";

export function formatDate(
  date: string | Date | undefined,
  formatType: "date" | "datetime" | "time" = "date"
) {
  if (!date) {
    return "";
  }

  const dateObj = moment.utc(date);

  if (formatType === "time") {
    return dateObj.format("HH:mm");
  }

  if (formatType === "date") {
    return dateObj.format("DD/MM/YYYY");
  }

  if (formatType === "datetime") {
    return dateObj.format("DD/MM/YYYY HH:mm");
  }
}
