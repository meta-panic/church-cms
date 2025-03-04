class CssVars {
  private static instance: CssVars | null = null;
  private root: HTMLElement | null = null;

  private constructor() {
    if (typeof document !== "undefined") {
      this.root = document.documentElement;
    }
  }

  public static getInstance(): CssVars | null {
    if (typeof document === "undefined") {
      return null;
    }
    if (!CssVars.instance) {
      CssVars.instance = new CssVars();
    }
    return CssVars.instance;
  }

  public getVar(name: string, fallback: string = "0"): string {
    if (!this.root) return fallback;
    return window.getComputedStyle(this.root).getPropertyValue(name) || fallback;
  }

  public getVarNumber(name: string, fallback: number = 0): number {
    return parseInt(this.getVar(name, fallback.toString()), 10);
  }
}

export const getCssVars = () => {
  return typeof document !== "undefined" ? CssVars.getInstance() : null;
};
