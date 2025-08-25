import "./../styles/globals.css";import NavBar from "@/components/NavBar";
export const metadata={title:"Wartownik Portal",description:"Podgląd NFC w czasie rzeczywistym"};
export default function RootLayout({children}:{children:React.ReactNode}){return(<html lang="pl"><body><NavBar/><main className="container py-6">{children}</main></body></html>);}
