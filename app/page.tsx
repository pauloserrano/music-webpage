import { Albums, Blog, Events, Hero, Newsletter, Player } from "@/components";

export default async function Home() {
  return (
    <main>
      <Hero />
      <Player />
      <Events />
      <Albums />
      <Blog />
      <Newsletter />
    </main>
  );
}
