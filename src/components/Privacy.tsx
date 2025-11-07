import { ShieldCheck, Database, Eye, Lock } from "lucide-react";
import banner from "@/assets/banner.jpeg";

const privacyPoints = [
  {
    icon: Database,
    title: "100% Offline",
    description: "All data stored locally on your device. No internet connection required.",
  },
  {
    icon: Eye,
    title: "No Data Collection",
    description: "We never collect, track, or share your personal information or passwords.",
  },
  {
    icon: Lock,
    title: "Complete Privacy",
    description: "Your passwords never leave your device. You're in full control.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    description: "Built with security best practices to protect your sensitive data.",
  },
];

const Privacy = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-primary/5" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Privacy & Security First
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your security is our priority. Complete offline functionality means complete privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            {privacyPoints.map((point, index) => (
              <div 
                key={index}
                className="flex gap-4 p-4 rounded-lg bg-card/30 backdrop-blur border border-border/30 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
            <img 
              src={banner}
              alt="Password Vault Security" 
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
