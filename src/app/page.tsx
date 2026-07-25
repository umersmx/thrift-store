import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import PopularPicks from "@/components/PopularPicks";
import NewArrivals from "@/components/NewArrivals";
import Categories from "@/components/Categories";
import IdentityMarquee from "@/components/IdentityMarquee";
import FeaturedProduct from "@/components/FeaturedProduct";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductShowcase />
      <PopularPicks />
      <NewArrivals />
      <Categories />
      <IdentityMarquee />
      <FeaturedProduct />
      <Testimonials />
    </main>
  );
}
