import { AntdRegistry } from "@ant-design/nextjs-registry"
import { Metadata } from "next"
import { Poppins, Roboto } from "next/font/google"
import "styles/tailwind.css"

export const metadata: Metadata = {
  title: "Next.js Boilerplate",
  description: "Next.js Boilerplate with Tailwind CSS and Ant Design",
  icons: {
    icon: "/favicon.ico",
  },
}

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
})

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable}`}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  )
}
