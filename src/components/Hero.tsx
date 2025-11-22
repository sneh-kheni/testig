import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <img 
            src={logo} 
            alt="Password Vault Logo" 
            className="w-32 h-32 object-contain animate-in fade-in duration-700"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-in slide-in-from-bottom-4 duration-700 delay-100">
          Password Vault
        </h1>
        
        <p className="text-2xl md:text-3xl text-muted-foreground mb-4 animate-in slide-in-from-bottom-4 duration-700 delay-200">
          Generate. Secure. Manage.
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-in slide-in-from-bottom-4 duration-700 delay-300">
          Your offline password manager for Android. Keep your passwords secure, private, and always accessible.
        </p>
        
        <Button 
          size="lg"
          className="group bg-gradient-to-r from-primary to-secondary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 animate-in slide-in-from-bottom-4 duration-700 delay-500"
          asChild
        >
          <a href="https://play.google.com/store/apps/details?id=com.sneh.passwordvault" download>
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Download Now
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
