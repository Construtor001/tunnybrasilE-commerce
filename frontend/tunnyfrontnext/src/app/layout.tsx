import { Providers } from "./GlobalRedux/provider"

export const metadata = {
  title: "TunnyBrasil",
  description: "A Frontend Developer Portfolio",
  //line 5 to 8 is only addition to make in layout.js
  icons: {
    icon: "/Image/tunny_icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
