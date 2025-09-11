import React, { useEffect, type RefObject } from "react";

export const keyPhrase = "reel_secret$123";

export const useDebounce = (value: any, delay: any) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export function generateRandomString(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const timestamp = new Date().getTime().toString(); // Get the current timestamp
  const randomCharacters = [];

  // Generate random characters
  while (randomCharacters.length < length - timestamp.length) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomCharacters.push(characters.charAt(randomIndex));
  }

  // Combine random characters with the timestamp
  const randomString = randomCharacters.join("") + timestamp;

  return randomString;
}

export function calculatePercentageAndSubtract(
  total: number,
  percentage: number
): number {
  // Calculate the amount to subtract
  const amountToSubtract = (percentage / 100) * total;

  // Subtract the percentage from the total
  const result = total - amountToSubtract;

  return result;
}

export function toTitleCase(input: string): string {
  return input
    ?.replace(/_/g, " ") // Replace underscores with spaces
    .replace(/\w\S*/g, (word) => {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
}

// A generic throttle function
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
) {
  let lastCallTime = 0;

  return (...args: Parameters<T>) => {
    const now = Date.now();

    if (now - lastCallTime >= limit) {
      func(...args);
      lastCallTime = now;
    }
  };
}

export function getFileNameFromUrl(url: string): string | null {
  try {
    const urlObject = new URL(url);
    const path = urlObject.pathname;
    const segments = path.split("/");
    const fileName = segments[segments.length - 1];
    return fileName;
  } catch (error: any) {
    return null;
  }
}

/**
 *
 * @param startTime
 * @param endTime
 * @returns string
 */

/**
 *
 * @param formRef
 * @param errors
 */
export function scrollErorrElementInView(
  formRef: RefObject<HTMLFormElement>,
  errors: any
) {
  if (Object.keys(errors).length > 0) {
    const errorField = formRef.current?.querySelector(`.Mui-error`);
    if (errorField) {
      errorField.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
}

/**
 *
 * @param startDate
 * @param startTime
 * @returns
 */

export const formatPrice = (
  price: string | number,
  showCommasInAmount?: boolean,
  addPostfixZero: boolean = true
): string => {
  if (typeof price === "number") {
    if (showCommasInAmount) {
      return price.toLocaleString("en-US", {
        minimumFractionDigits: addPostfixZero ? 2 : undefined,
        maximumFractionDigits: addPostfixZero ? 2 : undefined,
      });
    }
    return isNaN(price)
      ? "0.00"
      : addPostfixZero
      ? price.toFixed(2)
      : `${price}`;
  }

  const numericPrice = parseFloat(price);
  return isNaN(numericPrice) ? "0.00" : numericPrice.toFixed(2);
};

export const getVideoCover = (file: File, seekTo = 0.0) => {
  console.log("getting video cover for file: ", file);
  return new Promise((resolve, reject) => {
    // load the file to a video player
    const videoPlayer = document.createElement("video");
    videoPlayer.setAttribute("src", URL.createObjectURL(file));
    videoPlayer.load();
    videoPlayer.addEventListener("error", (_) => {
      reject("error when loading video file");
    });
    // load metadata of the video to get video duration and dimensions
    videoPlayer.addEventListener("loadedmetadata", () => {
      // seek to user defined timestamp (in seconds) if possible
      if (videoPlayer.duration < seekTo) {
        reject("video is too short.");
        return;
      }
      // delay seeking or else 'seeked' event won't fire on Safari
      setTimeout(() => {
        videoPlayer.currentTime = seekTo;
      }, 200);
      // extract video thumbnail once seeking is complete
      videoPlayer.addEventListener("seeked", () => {
        console.log("video is now paused at %ss.", seekTo);
        // define a canvas to have the same dimension as the video
        const canvas = document.createElement("canvas");
        canvas.width = videoPlayer.videoWidth;
        canvas.height = videoPlayer.videoHeight;
        // draw the video frame to canvas
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject("No context");
          return;
        }
        ctx.drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);
        // return the canvas image as a blob
        ctx.canvas.toBlob(
          (blob) => {
            resolve(blob);
          },
          "image/jpeg",
          0.75 /* quality */
        );
      });
    });
  });
};
export const blobToBase64 = (blob: Blob) => {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
};

export const isValidIntegerKey = (key: string) => {
  const integerKeyRegex = /^[0-9]$/;
  return integerKeyRegex.test(key);
};

export const isValidDecimalKey = (key: string, currentValue: string) => {
  const decimalKeyRegex = /^[0-9.]$/;
  if (!decimalKeyRegex.test(key)) {
    return false;
  }

  // Ensure only one dot is allowed
  if (key === "." && currentValue.includes(".")) {
    return false;
  }

  return true;
};

export const capitalizeFirstLetter = (str: any) => {
  if (!str) {
    return "";
  }
  return str?.charAt(0)?.toUpperCase() + str?.slice(1)?.toLowerCase();
};
export const removeAlphabets = (input: string): string => {
  return input.replace(/[^0-9+]/g, "");
};

export function getFileNameFromAWSURL(url: string) {
  const urlParts = url.split("/");
  return urlParts[urlParts.length - 1]?.replace(/\d+/g, "");
}
/**
 * Checks if any string from the array exists in the given value.
 *
 * @param arr - Array of strings to check against.
 * @param value - The string value to be checked.
 * @returns True if any string from the array exists in the value, false otherwise.
 */
export function containsAnyString(arr: string[], value: string): boolean {
  return arr.some((str) => value.includes(str));
}

/**
 * Truncates the input text if it exceeds the specified max length
 * and appends an ellipsis ('...') to the end of the truncated text.
 *
 * @param text - The input text to be truncated.
 * @param maxLength - The maximum allowed length of the text before truncation.
 * @returns The truncated text with an ellipsis if truncation occurs.
 */
export function truncateWithEllipsis(
  text: string | undefined | null,
  maxLength: number = 40
): string {
  if (!text) {
    return ""; // Return an empty string if text is undefined or null
  }

  if (text.length <= maxLength) {
    return text;
  }

  return text.slice(0, maxLength - 3) + "...";
}

interface Entity {
  _id: number; // Adjust type as per your actual object structure
  // Add other properties here if needed
}

export function filterArrayBySecondArray(
  firstArray: Entity[],
  secondArray: Entity[]
): Entity[] {
  // Convert secondArray into a Set for faster lookups
  const idArr = secondArray.map((entity) => entity._id);

  // Filter firstArray based on whether id exists in idSet
  const filteredArray = firstArray.filter((entity) =>
    idArr.includes(entity._id)
  );

  return filteredArray;
}

/**
 * Removes the string after the second '/' in the input string.
 * @param input - The input string.
 * @returns The string with content after the second '/' removed.
 */
export function removeAfterSecondSlash(input: string): string {
  const parts = input.split("/");
  if (parts.length > 2) {
    return parts.slice(0, 2).join("/");
  }
  return input;
}

export function getMinFlatDiscountCap(rentPricing: any): number | undefined {
  let capVal: number | undefined = undefined;

  rentPricing &&
    rentPricing.forEach((pricing: any) => {
      const { rentPrice } = pricing;

      if (capVal == null) {
        capVal = rentPrice;
      } else if (rentPrice !== undefined && capVal > +rentPrice) {
        capVal = rentPrice;
      }
    });
  return capVal !== undefined ? +capVal : capVal;
}

export function generateShortKey(length: number = 8): string {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
}

export const deepClone = (obj: {}) => JSON.parse(JSON.stringify(obj));

/**
 *
 * @param files
 * @returns
 */
export const renameFiles = (files: FileList | File[]) => {
  // Ensure files is an array
  const fileArray = Array.isArray(files) ? files : Array.from(files);

  const fileWithNewNames = fileArray.map((file) => {
    const newFileName = `${Date.now()}_${file.name}`; // Add timestamp prefix
    return {
      name: newFileName,
      file: new File([file], newFileName, { type: file.type }), // Create new File object
    };
  });

  // Generate query string from renamed file names
  const queryNames = fileWithNewNames
    .map(({ name }) => `filenames=${encodeURIComponent(name)}`)
    .join("&");

  return { fileWithNewNames, queryNames };
};

export type ShiftType = "Day" | "Night" | "24 Hrs" | "Swing Shift";

export const isChecked = ({
  id,
  selectAll,
  checkedIds,
  uncheckedIds,
}: {
  id: string;
  selectAll: boolean | null;
  checkedIds: string[];
  uncheckedIds: string[];
}): boolean => {
  if (selectAll === null ? true : selectAll) return !uncheckedIds.includes(id);
  return checkedIds.includes(id);
};

/**
 *
 * @param id
 * @param behavior
 */
export const scrollToElementById = (
  id: string,
  behavior: ScrollBehavior = "smooth"
) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior, block: "start", inline: "start" });
  }
};

export const formatCurrencyNegPos = (amount: number): string => {
  const formattedAmount = Math.abs(amount).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return amount < 0 ? `-$${formattedAmount}` : `+$${formattedAmount}`;
};

export const DayOptions = Array.from({ length: (100 - 30) / 5 + 1 }, (_, i) => {
  const value = 30 + i * 5;
  return { label: `${value} Days`, value };
});

export function convertTimeToMins(hours: string): number {
  return hours.trim() === "" ? 0 : Math.round(+hours * 60);
}
export function convertMinutesToDecimalHours(minutes?: number): string {
  if (!minutes) {
    return "-";
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (remainingMinutes === 0) {
    return `${hours}`;
  }

  const decimal = remainingMinutes / 60;
  return (hours + decimal).toFixed(2).replace(/\.?0+$/, "");
}

export function isKeyPresentAndNotZero(
  obj: Record<string, any>,
  key: string
): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== 0;
}
const formatNumberWithValue = (num: number) => {
  if (isNaN(num)) return "0";

  // If the number is whole (e.g. 15.00), show without decimals
  if (num % 1 === 0) {
    return num.toLocaleString(); // adds commas, no decimal
  }

  return num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
function formatNumber(amount: any, withAbbr: boolean) {
  const abbreviations = ["", "K", "M", "B", "T"];
  let abbreviationIndex = 0;

  // Convert to number
  let num = parseFloat(amount);
  if (isNaN(num)) return "0";

  // Handle abbreviation if requested
  if (withAbbr && num >= 10000) {
    // this was changed from 1000 to 10000 on QA request
    while (num >= 10000 && abbreviationIndex < abbreviations.length - 1) {
      num /= 10000;
      abbreviationIndex++;
    }
  }

  // Decide how many decimals to show
  const hasDecimals = num % 1 !== 0;

  const formatted = num.toLocaleString(undefined, {
    minimumFractionDigits: hasDecimals ? 2 : 0,
    maximumFractionDigits: hasDecimals ? 2 : 0,
  });

  return formatted + (withAbbr ? abbreviations[abbreviationIndex] : "");
}

function abbreviatePrice(price: number) {
  if (typeof price !== "number") {
    return "Invalid input";
  }

  return formatNumber(price, true);
}
export const getPriceWithCurrency = (amount: any, withoutAbbri?: boolean) => {
  const numericAmount = Math.abs(Number(amount)); // ensures value is positive

  if (isNaN(numericAmount) || numericAmount === 0) return "0";

  if (withoutAbbri) {
    return "$" + formatNumberWithValue(numericAmount);
  }

  return "$" + abbreviatePrice(numericAmount);
};

type Coordinate = [number, number];

/**
 * Removes duplicate coordinates from polygon coordinates
 * while allowing the first and last coordinate to be the same (closed polygon)
 * @param coords - Array of coordinates [lng, lat]
 * @param precision - Decimal places to use for comparison (default: 6)
 */
export function removeDuplicatePolygonCoords(
  coords: Coordinate[]
): Coordinate[] {
  if (coords.length <= 2) return coords;

  const seen = new Set<string>();
  const lastIndex = coords.length - 1;

  return coords.filter(([lng, lat], idx) => {
    const key = `${lng},${lat}`;

    // Always allow the last coordinate if it's equal to the first
    if (idx === lastIndex && key === `${coords[0][0]},${coords[0][1]}`) {
      return true;
    }

    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function normalizeRoute(
  currentRoute: string,
  parentId?: string | null,
  id?: string | null
): string {
  // ✅ Strip query params without creating multiple arrays
  const queryIndex = currentRoute.indexOf("?");
  const pathOnly =
    queryIndex !== -1 ? currentRoute.substring(0, queryIndex) : currentRoute;

  // ✅ Avoid empty strings from split
  const urlSegments: string[] = pathOnly.split("/").filter(Boolean);

  if (parentId && id && urlSegments.length >= 2) {
    // Replace last two segments
    urlSegments[urlSegments.length - 2] = ":parentId";
    urlSegments[urlSegments.length - 1] = ":id";
  } else if (id) {
    // Find the segment matching `id` → more efficient than map/filter
    const idx = urlSegments.indexOf(id);
    if (idx !== -1) {
      urlSegments[idx] = ":id";
    } else {
      // fallback: replace last segment
      urlSegments[urlSegments.length - 1] = ":id";
    }
  }

  return "/" + urlSegments.join("/");
}
