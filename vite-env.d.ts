/// <reference types="vite/client" />

declare module '*inner-green-3d.html?raw' {
  const content: string;
  export default content;
}

declare module '*tidecrestDocument.js' {
  export const buildTidecrestDocument: (variant: any) => string | undefined;
}

declare module '*meridianDocument.js' {
  export const buildMeridianDocument: (variant: any, presentation?: any) => string | undefined;
}

declare module '*asciiFieldDocuments.js' {
  export const buildAsciiFieldDocument: (variant: any) => string;
}

declare module '*betawiseGlobeDocument.js' {
  export const buildBetawiseGlobeDocument: (variant: any) => string;
}

declare module '*axonis-arbor.html?raw' {
  const content: string;
  export default content;
}

declare module '*axonis-vortex.html?raw' {
  const content: string;
  export default content;
}

declare module '*axonis-tide.html?raw' {
  const content: string;
  export default content;
}

declare module '*axonis-dune.html?raw' {
  const content: string;
  export default content;
}

declare module '*NocturneScene' {
  export const NOCTURNE_TITLES: Record<string, string>;
  export const NOCTURNE_VARIANTS: readonly string[];
  export const buildNocturneDocument: (variant: any) => string | undefined;
  export type NocturneVariant = string;
}

declare module '*sandboxedPageDocument*' {
  export const buildSandboxedPageDocument: (source: string, options?: any) => string;
}

declare module '*SylvaLivingWorldScene' {
  export const MAPLE_AUTUMN_STYLE: string;
  export const SAKURA_SUNSET_STYLE: string;
  export const SEQUOIA_MIST_STYLE: string;
  export const applyMapleAutumnVariant: (source: string) => string;
  export const applySakuraSunsetVariant: (source: string) => string;
  export const applySequoiaMistVariant: (source: string) => string;
}
