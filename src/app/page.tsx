import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Milestone from "@/components/Milestone";
import Testimonials from "@/components/Testimonials";
import Banner from "@/components/ui/Banner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero></Hero>
      <Milestone></Milestone>
      <Services></Services>
      <Works></Works>
      <Testimonials></Testimonials>
      <Banner></Banner>
    </main>
  );
}
