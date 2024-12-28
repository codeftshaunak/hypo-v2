function clamp(value: number, min: number = 0, max: number = 1) {
  if (value < min || value > max) {
    console.error(
      `The value provided ${value} is out of range [${min}, ${max}].`
    );
  }

  return Math.min(Math.max(min, value), max);
}

/**
 * Converts a color from CSS hex format to CSS rgb format.
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */
function hexToRgb(color: string) {
  color = color.slice(1);
  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, "g");
  let colors: string[] | RegExpMatchArray | null = color.match(re);
  if (colors && colors[0].length === 1) {
    colors = colors.map((n) => n + n);
  }
  return colors
    ? `rgb${colors.length === 4 ? "a" : ""}(${colors
        .map((n, index) => {
          return index < 3
            ? parseInt(n, 16)
            : Math.round((parseInt(n, 16) / 255) * 1000) / 1000;
        })
        .join(", ")})`
    : "";
}

function intToHex(int: number) {
  const hex = int.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

function decomposeColor(color: string): {
  type: string;
  values: (number | string)[];
  colorSpace: string | undefined;
} {
  if (color.charAt(0) === "#") {
    return decomposeColor(hexToRgb(color));
  }
  const marker = color.indexOf("(");
  const type = color.substring(0, marker);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(type) === -1) {
    throw new Error(
      `Unsupported \`${color}\` color. The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().`
    );
  }
  const value = color.substring(marker + 1, color.length - 1);
  let values: string[];
  let colorSpace;
  if (type === "color") {
    values = value.split(" ");
    colorSpace = values.shift();
    if (values.length === 4 && values[3].charAt(0) === "/") {
      values[3] = values[3].slice(1);
    }
    if (
      colorSpace &&
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        colorSpace
      ) === -1
    ) {
      throw new Error(
        `unsupported \`${colorSpace}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.`
      );
    }
  } else {
    values = value.split(",");
  }

  return {
    type,
    values: values.map((value) => parseFloat(value)),
    colorSpace,
  };
}

function recomposeColor(color: ReturnType<typeof decomposeColor>) {
  const { type, colorSpace } = color;
  let { values } = color;

  let returnV: string;

  if (type.indexOf("rgb") !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map((n, i) => (i < 3 ? parseInt(n as string, 10) : n));
  } else if (type.indexOf("hsl") !== -1) {
    values[1] = `${values[1]}%`;
    values[2] = `${values[2]}%`;
  }
  if (type.indexOf("color") !== -1) {
    returnV = `${colorSpace} ${values.join(" ")}`;
  } else {
    returnV = `${values.join(", ")}`;
  }
  return `${type}(${returnV})`;
}

export function alpha(color: string, value: number) {
  const dcolor = decomposeColor(color);
  const cvalue = clamp(value);
  if (dcolor.type === "rgb" || dcolor.type === "hsl") {
    dcolor.type += "a";
  }
  if (dcolor.type === "color") {
    dcolor.values[3] = `/${cvalue}`;
  } else {
    dcolor.values[3] = cvalue;
  }
  return recomposeColor(dcolor);
}

/**
 * Converts an HSL string to a HEX color format.
 * @param hslString - HSL string in the format "h s% l%"
 * @returns A HEX color string.
 */
export function hslStringToHex(hslString: string): string {
  const [hue, saturation, lightness] = hslString
    .replace(/%/g, "") // Remove the '%' symbols
    .split(" ") // Split the string into parts
    .map(Number); // Convert parts to numbers

  return hslToHex(hue, saturation, lightness);
}

/**
 * Converts HSL to HEX color format.
 * @param h - Hue (0-360)
 * @param s - Saturation (0-100)
 * @param l - Lightness (0-100)
 * @returns A HEX color string.
 */
export function hslToHex(h: number, s: number, l: number): string {
  // Normalize saturation and lightness to fractions
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s; // Chroma
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1)); // Secondary component
  const m = l - c / 2; // Match lightness

  let r = 0,
    g = 0,
    b = 0;

  if (h >= 0 && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h >= 60 && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h >= 180 && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h >= 240 && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (h >= 300 && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  // Convert RGB to [0, 255] and then to HEX
  const toHex = (n: number) =>
    Math.round((n + m) * 255)
      .toString(16)
      .padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
