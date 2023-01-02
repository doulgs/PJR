// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors?: {
      Main?: string;

      Background: string;
      OnBackground?: string;
      SubBackground?: string;

      CurrentLine: string;
      Selection: string;
      Foreground: any;
      Comment: string;
      Cyan: string;
      Green: string;
      Orange: string;
      Pink: string;
      Purple: string;
      Red: string;
      Yellow: string;
      Gray: any;
    };
  }
}
