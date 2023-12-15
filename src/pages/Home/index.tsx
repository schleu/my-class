import { Details } from "./components/Details";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Testimony } from "./components/Testimony";

export function Home() {
  return (
    <div className="w-full flex flex-col gap-20 bg-light-100">
      <Header />
      <Hero />
      <Details />
      <Testimony />
      <Footer />
    </div>
  );
}
