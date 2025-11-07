import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Privacy from "@/components/Privacy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Privacy />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
