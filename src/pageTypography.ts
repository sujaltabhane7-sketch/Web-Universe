export type PageFont = {
  family: string;
  weight?: number | string;
  style?: string;
};

export type PageInlineStyleOverride = {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: number | string;
  lineHeight?: string | number;
  letterSpacing?: string;
  fontStyle?: string;
};

export type PageTypographyRecipe = {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: number | string;
  lineHeight?: string | number;
  letterSpacing?: string;
  fontStyle?: string;
};

export const GEIST: PageFont = {
  family: "Geist, sans-serif",
};

export const INSTRUMENT_SERIF: PageFont = {
  family: "Instrument Serif, serif",
};

export const NEWSREADER: PageFont = {
  family: "Newsreader, serif",
};
