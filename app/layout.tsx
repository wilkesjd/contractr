// app/layout.tsx

// globals.css includes @tailwind directives
// adjust the path if necessary
import "./globals.css";
import {Providers} from "./providers";

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
      <html lang="en">
        <body className="bg-background text-foregorund">
          <main className="min-h-screen flex flex-col items-center">
            <Providers>
              {children}
            </Providers>
          </main>
        </body>
      </html>
  );
}