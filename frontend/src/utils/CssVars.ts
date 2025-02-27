class CssVars {
  private static instance: CssVars;
  private root: HTMLElement;

  private constructor() {
    this.root = document.documentElement;
  }

  public static getInstance(): CssVars {
    if (!CssVars.instance) {
      CssVars.instance = new CssVars();
    }
    return CssVars.instance;
  }

  public getVar(name: string, fallback: string = "0"): string {
    return window.getComputedStyle(this.root).getPropertyValue(name) || fallback;
  }

  public getVarNumber(name: string, fallback: number = 0): number {
    return parseInt(this.getVar(name, fallback.toString()), 10);
  }
}

export const cssVars = CssVars.getInstance(); 
