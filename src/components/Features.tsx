import { Key, Save, Copy, Trash2, Shield, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Key,
    title: "Password Generator",
    description: "Create strong, random passwords with customizable length and character types.",
  },
  {
    icon: Save,
    title: "Save & Manage",
    description: "Store passwords securely with titles and usernames for easy organization.",
  },
  {
    icon: Copy,
    title: "Quick Copy",
    description: "Copy passwords to clipboard instantly with a single tap.",
  },
  {
    icon: Trash2,
    title: "Easy Delete",
    description: "Remove saved passwords quickly when you no longer need them.",
  },
  {
    icon: Shield,
    title: "Password Strength",
    description: "Get real-time feedback on password strength to ensure maximum security.",
  },
  {
    icon: Lock,
    title: "Offline Storage",
    description: "All passwords stored locally on your device, never in the cloud.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your passwords securely
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
