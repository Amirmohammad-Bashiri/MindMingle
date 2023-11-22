import Header from "@/components/landing-page/header";

function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}

export default HomePageLayout;
