import {
  Code,
  Smartphone,
  TrendingUp,
  Search,
  Video,
  Settings,
  BarChart3,
  Target,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description:
        "Create stunning, high-performance websites that captivate your audience and drive conversions. Our expert developers craft custom solutions using the latest technologies.",
      fullDescription:
        "We specialize in building responsive, SEO-friendly websites that work flawlessly across all devices. Whether you need a corporate website, e-commerce platform, or a complex web application, our team delivers excellence.",
      features: [
        "Custom Website Design & Development",
        "E-commerce Solutions (Shopify, WooCommerce, Custom)",
        "Content Management Systems (WordPress, Custom CMS)",
        "Progressive Web Applications (PWA)",
        "Responsive & Mobile-First Design",
        "Fast Loading & Performance Optimization",
        "SEO-Friendly Architecture",
        "Cross-Browser Compatibility",
        "Third-Party API Integration",
        "Secure & Scalable Solutions",
      ],
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "WordPress",
        "PHP",
        "MongoDB",
        "MySQL",
      ],
      benefits: [
        "Increase online visibility and brand awareness",
        "Improve user engagement and conversion rates",
        "Reduce bounce rates with intuitive UX/UI",
        "Scale your business with robust infrastructure",
      ],
    },
    {
      icon: Smartphone,
      title: "Software Development",
      description:
        "Transform your ideas into powerful software solutions. We develop custom applications tailored to your unique business requirements and industry standards.",
      fullDescription:
        "From enterprise software to mobile applications, we deliver robust, scalable solutions that streamline operations and enhance productivity. Our agile development approach ensures timely delivery without compromising quality.",
      features: [
        "Custom Software Development",
        "Enterprise Application Development",
        "Mobile App Development (iOS & Android)",
        "Desktop Application Development",
        "Cloud-Based Solutions",
        "API Development & Integration",
        "Database Design & Management",
        "Legacy System Modernization",
        "Software Maintenance & Support",
        "Quality Assurance & Testing",
      ],
      technologies: [
        "React Native",
        "Flutter",
        "Java",
        "Python",
        ".NET",
        "Swift",
        "Kotlin",
      ],
      benefits: [
        "Automate business processes and increase efficiency",
        "Reduce operational costs with custom solutions",
        "Improve data management and security",
        "Gain competitive advantage with innovative features",
      ],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Grow your business with data-driven digital marketing strategies. We help you reach the right audience, at the right time, with the right message.",
      fullDescription:
        "Our comprehensive digital marketing services encompass everything from strategy development to execution and optimization. We leverage the latest tools and techniques to maximize your ROI.",
      features: [
        "Digital Marketing Strategy Development",
        "Social Media Marketing (Facebook, Instagram, LinkedIn, Twitter)",
        "Content Marketing & Blog Writing",
        "Email Marketing Campaigns",
        "Influencer Marketing",
        "Online Reputation Management",
        "Brand Strategy & Positioning",
        "Conversion Rate Optimization (CRO)",
        "Marketing Automation",
        "Campaign Performance Tracking",
      ],
      technologies: [
        "Google Analytics",
        "Facebook Business Suite",
        "HubSpot",
        "Mailchimp",
        "SEMrush",
      ],
      benefits: [
        "Increase brand awareness and online presence",
        "Generate quality leads and conversions",
        "Build strong customer relationships",
        "Achieve measurable ROI on marketing spend",
      ],
    },
    {
      icon: Target,
      title: "Google & Meta Ads",
      description:
        "Maximize your advertising ROI with expertly managed Google and Meta (Facebook/Instagram) ad campaigns. Reach your target audience with precision targeting.",
      fullDescription:
        "Our certified PPC specialists create and manage high-converting ad campaigns that deliver results. We continuously optimize your campaigns for maximum performance and cost-efficiency.",
      features: [
        "Google Ads Campaign Management (Search, Display, Shopping, Video)",
        "Facebook & Instagram Ads Management",
        "Keyword Research & Selection",
        "Ad Copy Writing & A/B Testing",
        "Landing Page Optimization",
        "Audience Targeting & Segmentation",
        "Bid Management & Budget Optimization",
        "Conversion Tracking & Attribution",
        "Remarketing Campaigns",
        "Detailed Performance Reporting",
      ],
      technologies: [
        "Google Ads",
        "Facebook Ads Manager",
        "Google Tag Manager",
        "Google Analytics",
      ],
      benefits: [
        "Immediate visibility in search results",
        "Precise audience targeting capabilities",
        "Pay only for actual clicks and conversions",
        "Measurable and transparent results",
      ],
    },
    {
      icon: Search,
      title: "SEO Services",
      description:
        "Dominate search engine rankings and drive organic traffic to your website. Our proven SEO strategies help you outrank competitors and attract quality leads.",
      fullDescription:
        "We employ white-hat SEO techniques that comply with search engine guidelines while delivering sustainable, long-term results. From technical SEO to content optimization, we cover all aspects.",
      features: [
        "Comprehensive SEO Audit",
        "Keyword Research & Strategy",
        "On-Page SEO Optimization",
        "Technical SEO (Site Speed, Mobile, Security)",
        "Content Creation & Optimization",
        "Link Building & Outreach",
        "Local SEO & Google My Business Optimization",
        "E-commerce SEO",
        "SEO Competitor Analysis",
        "Monthly Reporting & Analytics",
      ],
      technologies: [
        "Google Search Console",
        "SEMrush",
        "Ahrefs",
        "Moz",
        "Screaming Frog",
      ],
      benefits: [
        "Increase organic search visibility",
        "Drive qualified traffic to your website",
        "Build long-term sustainable growth",
        "Reduce dependency on paid advertising",
      ],
    },
    {
      icon: Video,
      title: "Video Editing",
      description:
        "Create engaging video content that captures attention and tells your brand story. Professional editing services for all your video marketing needs.",
      fullDescription:
        "From corporate videos to social media content, we transform raw footage into polished, professional videos that engage your audience and communicate your message effectively.",
      features: [
        "Corporate Video Editing",
        "Social Media Video Content",
        "YouTube Video Optimization",
        "Product Demo Videos",
        "Explainer Videos",
        "Testimonial Videos",
        "Motion Graphics & Animation",
        "Color Grading & Correction",
        "Audio Enhancement & Mixing",
        "Subtitle & Caption Creation",
      ],
      technologies: [
        "Adobe Premiere Pro",
        "After Effects",
        "DaVinci Resolve",
        "Final Cut Pro",
      ],
      benefits: [
        "Increase engagement on social media",
        "Improve message retention and recall",
        "Boost conversion rates with video content",
        "Enhance brand professionalism",
      ],
    },
    {
      icon: Settings,
      title: "Website Maintenance",
      description:
        "Keep your website secure, fast, and up-to-date with our comprehensive maintenance services. Focus on your business while we handle the technical details.",
      fullDescription:
        "Regular maintenance is essential for website security and performance. We provide proactive monitoring, updates, and support to ensure your website runs smoothly 24/7.",
      features: [
        "Regular Security Updates & Patches",
        "Website Backup & Disaster Recovery",
        "Performance Monitoring & Optimization",
        "Uptime Monitoring & Alerts",
        "Content Updates & Changes",
        "Bug Fixes & Troubleshooting",
        "Plugin & Theme Updates",
        "Database Optimization",
        "SSL Certificate Management",
        "Technical Support & Consultation",
      ],
      technologies: ["cPanel", "WordPress", "Git", "CloudFlare", "New Relic"],
      benefits: [
        "Prevent security breaches and data loss",
        "Maintain optimal website performance",
        "Reduce downtime and technical issues",
        "Peace of mind with expert support",
      ],
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description:
        "Make data-driven decisions with comprehensive analytics and detailed reporting. Track performance, understand user behavior, and optimize for success.",
      fullDescription:
        "We set up robust analytics systems and provide actionable insights that help you understand what's working and where to improve. Custom dashboards and reports keep you informed.",
      features: [
        "Google Analytics Setup & Configuration",
        "Custom Dashboard Creation",
        "Conversion Tracking & Goal Setup",
        "E-commerce Analytics",
        "User Behavior Analysis",
        "Traffic Source Analysis",
        "ROI Measurement & Attribution",
        "Heatmaps & Session Recording",
        "A/B Testing & Experimentation",
        "Monthly Performance Reports",
      ],
      technologies: [
        "Google Analytics",
        "Google Data Studio",
        "Hotjar",
        "Mixpanel",
        "Tableau",
      ],
      benefits: [
        "Understand customer journey and behavior",
        "Identify high-performing marketing channels",
        "Optimize conversion funnels",
        "Measure and improve ROI",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Our Services | Website, App & Software Development | Raza Softwares
        </title>
        <meta
          name="description"
          content="Explore professional website, mobile app, and software development services by Raza Softwares. We provide custom, responsive, and scalable digital solutions to help businesses grow online and achieve success."
        />
        <meta
          name="keywords"
          content="Raza Softwares services, website development services, app development services, software development company India, full stack development services, custom web development, mobile app design, ecommerce website development, WordPress website design, business website development, best web development company in India, IT solutions, SEO friendly web development, digital marketing and software services, Raza WebSoft Solution"
        />
        <link rel="canonical" href="https://razasoftwares.in/services" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Web, App & Software Development Services",
            provider: {
              "@type": "Organization",
              name: "Raza Softwares",
              url: "https://razasoftwares.in",
              logo: "https://razasoftwares.in/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 6201617895",
                contactType: "Customer Support",
                availableLanguage: ["English", "Hindi"],
              },
            },
            serviceType: [
              "Website Development",
              "Software Development",
              "Mobile App Development",
              "Digital Marketing",
              "SEO Optimization",
              "Website Maintenance",
            ],
            areaServed: ["India", "Global"],
            description:
              "Raza Softwares provides complete website, app, and software development services to help businesses build strong digital presence and boost growth.",
            availableLanguage: ["English", "Hindi"],
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive digital solutions to help your business thrive in
              the modern world. From development to marketing, we've got you
              covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                    isEven ? "" : ""
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Content Side */}
                    <div
                      className={`p-8 lg:p-12 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>

                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h2>

                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {service.fullDescription}
                      </p>

                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          Key Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => navigate("/contact")}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center"
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    </div>

                    {/* Features Side */}
                    <div
                      className={`bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:p-12 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        What We Offer
                      </h3>

                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="bg-white p-6 rounded-xl border-l-4 border-blue-600">
                        <h4 className="font-bold text-gray-900 mb-3">
                          Key Benefits
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <span className="text-blue-600 mr-2">•</span>
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a customized solution that
            meets your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Request a Quote
            </button>
            <a
              href="tel:+916201617895"
              className="bg-transparent text-white px-8 py-4 rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
