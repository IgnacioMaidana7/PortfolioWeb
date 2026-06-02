import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ignacio Maidana | Full Stack Developer & PM",
  description:
    "Portfolio de Ignacio Maidana - Desarrollador Full Stack y Project Manager en formación. Estudiante de Ingeniería en Sistemas con experiencia en React, Node.js, Python y metodologías ágiles.",
  keywords: [
    "Full Stack Developer",
    "Project Manager",
    "React",
    "Node.js",
    "Python",
    "Argentina",
  ],
  authors: [{ name: "Ignacio Maidana" }],
  openGraph: {
    title: "Ignacio Maidana | Full Stack Developer & PM",
    description:
      "Desarrollador Full Stack y Project Manager en formación buscando su primera experiencia IT.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${archivo.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
