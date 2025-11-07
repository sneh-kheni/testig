import { Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-12">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in Touch
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have questions, feedback, or need support? We'd love to hear from you.
          </p>
          
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow transition-all duration-300"
            asChild
          >
            <a href="mailto:secureplanetall@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              secureplanetall@gmail.com
            </a>
          </Button>
          
          <div className="mt-8 pt-8 border-t border-border/30">
            <Button 
              variant="outline"
              className="border-primary/50 hover:border-primary hover:bg-primary/10"
              asChild
            >
              <a href="https://sites.google.com/view/privacy-policy-passvault/home" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                Privacy Policy
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
