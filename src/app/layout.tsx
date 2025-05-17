import "@/styles/tailwind.css";
import "@/styles/app.scss";
import { AppContextProvider } from "@/contexts/AppContext";

export const metadata = {
  title: "Web Windows 10",
  description: "Develop by ammmahikaishar <ammmahikaishar@gmail.com>",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={""}>
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
