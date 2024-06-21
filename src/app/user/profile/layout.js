import { Inter } from "next/font/google";
import "../../globals.css";
// import "@/globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <h1></h1>
      {/* <body >{children}</body> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
