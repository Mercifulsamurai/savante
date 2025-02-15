import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


let footer = (
  <div className="bg-gray-500 flex justify-center items-center h-12 border-t-2">
    <p className="text-neutral-200">
      &copy; Savante 2024
      </p>
  </div>
)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
 
        {children}
        {footer}
        </body>
    </html>
  );
}
