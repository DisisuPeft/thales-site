import Header from "./ui/landing/header";
import Hero from "./ui/landing/hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Header />
      <main className="flex flex-col flex-1 w-full">
        <Hero />
      </main>
    </div>
  );
}
