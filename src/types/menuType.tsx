/* eslint-disable @typescript-eslint/no-explicit-any */
export interface menuType{
    map(arg0: (nav: any) => import("react").JSX.Element): import("react").ReactNode;
    name: string;
    link:string;
}