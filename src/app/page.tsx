import { ThemeProvider } from "@/lib/providers/next-theme-provider";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <main>Home Page</main>
    </ThemeProvider>
  );
}
