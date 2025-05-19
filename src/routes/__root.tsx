import { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  Outlet,
  Scripts,
  HeadContent,
} from "@tanstack/react-router";
import * as React from "react";
import { ThemeProvider } from "next-themes";
import { LanguageProvider, useTranslation } from "@/contexts/language-context";
const isDev = process.env.NODE_ENV === "development";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    title: "JBR - Job Board",
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  notFoundComponent: NotFound,
  component: RootComponent,
});

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          {useTranslation("common.notFound")}
        </h1>
        <p className="text-muted-foreground mb-8">
          {useTranslation("common.notFoundDescription")}
        </p>
      </div>
    </div>
  );
}

function RootComponent() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1);

    return () => clearTimeout(timer);
  }, []);

  return (
    <RootDocument>
      <div
        className={`${isLoading ? "" : "opacity-100 transition-opacity duration-10 ease-in animate-fadeIn"}`}
        style={{
          opacity: isLoading ? 0 : 1,
        }}
      >
        <Outlet />
      </div>
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        {isDev && (
          <script
            crossOrigin="anonymous"
            src="//unpkg.com/react-scan/dist/auto.global.js"
          />
        )}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          /* Critical CSS to prevent FOUC */
          body { display: none; }
          .js body { display: block; }
        `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          document.documentElement.classList.add('js');
        `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}
