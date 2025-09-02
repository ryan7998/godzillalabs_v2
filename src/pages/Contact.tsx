import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Users, Zap, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours. Thank you for reaching out!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      budget: '',
      message: ''
    });

    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      description: "Get in touch via email for detailed inquiries",
      contact: "mail@fazleryan.com",
      action: "mailto:mail@fazleryan.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      description: "Come see us at our office",
      contact: "San Francisco, CA",
      action: "#"
    }
  ];

  const services = [
    "Custom Web Development",
    "SaaS Development", 
    "AI Applications",
    "ERP Solutions",
    "Mobile App Development",
    "Cloud Migration",
    "Other"
  ];

  const budgetRanges = [
    "$10,000 - $25,000",
    "$25,000 - $50,000", 
    "$50,000 - $100,000",
    "$100,000 - $250,000",
    "$250,000+",
    "Let's discuss"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-psyco-black-DEFAULT to-psyco-black-light py-24 px-6 md:px-12 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute w-80 h-80 bg-gradient-to-l from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl top-1/4 left-0 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-cyan-500/10 text-cyan-400 rounded-full px-4 py-2 text-sm font-medium border border-cyan-500/20 mb-6 animate-fade-in">
              <MessageSquare className="h-4 w-4 mr-2" />
              Get In Touch
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
              Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Legendary</span> Together
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 animate-fade-in animation-delay-100 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge software solutions? 
              <span className="text-cyan-300 font-medium"> Let's discuss your project</span> and bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Multiple Ways to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Connect</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose the communication method that works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <Card key={index} className="glassmorphism border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-2xl border border-cyan-500/30 mb-6">
                    <div className="text-cyan-400">
                      {method.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">{method.title}</h3>
                  <p className="text-gray-300 mb-4">{method.description}</p>
                  <a 
                    href={method.action}
                    className="text-cyan-400 hover:text-emerald-400 font-medium transition-colors duration-300"
                  >
                    {method.contact}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-psyco-black-light to-psyco-black-DEFAULT relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-500/10 text-emerald-400 rounded-full px-4 py-2 text-sm font-medium border border-emerald-500/20 mb-6">
              <Send className="h-4 w-4 mr-2" />
              Project Inquiry
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tell Us About Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Project</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Share your vision with us and let's explore how we can bring it to life with cutting-edge technology
            </p>
          </div>

          <Card className="glassmorphism border-cyan-500/20">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">Full Name *</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-psyco-black-light border-cyan-500/30 focus:border-cyan-400 text-white"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">Email Address *</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-psyco-black-light border-cyan-500/30 focus:border-cyan-400 text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2">Company</label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-psyco-black-light border-cyan-500/30 focus:border-cyan-400 text-white"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">Phone Number</label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-psyco-black-light border-cyan-500/30 focus:border-cyan-400 text-white"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-white font-medium mb-2">Service Needed *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-psyco-black-light border border-cyan-500/30 focus:border-cyan-400 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-white font-medium mb-2">Project Budget</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-psyco-black-light border border-cyan-500/30 focus:border-cyan-400 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map(budget => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">Project Details *</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-psyco-black-light border-cyan-500/30 focus:border-cyan-400 text-white"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                <div className="text-center">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="group bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-semibold py-4 px-12 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/30 transform hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <span className="relative z-10">Send Message</span>
                        <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Godzilla Labs</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're not just developers - we're your technology partners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Expert Team",
                description: "6+ years of experience with 100+ successful projects delivered"
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Fast Delivery",
                description: "Agile development process ensuring rapid time-to-market"
              },
              {
                icon: <Rocket className="h-8 w-8" />,
                title: "Scalable Solutions",
                description: "Built to grow with your business from startup to enterprise"
              }
            ].map((feature, index) => (
              <Card key={index} className="glassmorphism border-emerald-500/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl border border-emerald-500/30 mb-6">
                    <div className="text-emerald-400">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-psyco-black-DEFAULT to-psyco-black-light relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-white rounded-full px-6 py-3 text-sm font-medium border border-cyan-500/30 backdrop-blur-sm mb-8">
              <CheckCircle className="h-4 w-4 mr-2 text-cyan-400" />
              Ready to Start Your Project?
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Create Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Extraordinary</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Don't wait to bring your vision to life. Contact us today and let's discuss how we can transform your business with cutting-edge software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:mail@fazleryan.com"
                className="group bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-cyan-500/30 transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10">Email Us Now</span>
                <Mail className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="tel:+15551234567"
                className="group bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 hover:border-emerald-400 font-semibold py-4 px-10 rounded-xl transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10">Call Us</span>
                <Phone className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-emerald-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
