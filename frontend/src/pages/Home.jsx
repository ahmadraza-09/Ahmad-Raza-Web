import {
  ArrowRight,
  Code,
  Smartphone,
  TrendingUp,
  Search,
  Video,
  Settings,
  BarChart3,
  CheckCircle,
  Users,
  Award,
  Clock,
  Phone,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description:
        "Custom, responsive websites built with modern technologies. From landing pages to complex web applications.",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized"],
    },
    {
      icon: Smartphone,
      title: "Software Development",
      description:
        "Robust software solutions tailored to your business needs. Desktop, mobile, and cloud applications.",
      features: [
        "Custom Solutions",
        "Scalable Architecture",
        "Ongoing Support",
      ],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to grow your online presence and reach your target audience.",
      features: ["Social Media", "Content Marketing", "Brand Strategy"],
    },
    {
      icon: Search,
      title: "Google & Meta Ads",
      description:
        "Targeted advertising campaigns on Google and Meta platforms to maximize ROI and conversions.",
      features: ["PPC Campaigns", "Audience Targeting", "Performance Tracking"],
    },
    {
      icon: Search,
      title: "SEO Services",
      description:
        "Improve your search engine rankings and drive organic traffic with our proven SEO strategies.",
      features: ["Keyword Research", "On-page SEO", "Link Building"],
    },
    {
      icon: Video,
      title: "Video Editing",
      description:
        "Professional video editing services for marketing, social media, and corporate content.",
      features: ["Professional Editing", "Motion Graphics", "Quick Turnaround"],
    },
    {
      icon: Settings,
      title: "Website Maintenance",
      description:
        "Keep your website secure, updated, and running smoothly with our maintenance services.",
      features: ["Security Updates", "Bug Fixes", "Performance Optimization"],
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description:
        "Data-driven insights and comprehensive reporting to track your digital performance.",
      features: [
        "Custom Dashboards",
        "Performance Metrics",
        "Actionable Insights",
      ],
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "200+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "24/7", label: "Support Available" },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Proven Expertise",
      description:
        "Years of experience delivering successful projects across industries",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Skilled professionals committed to your project success",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We respect deadlines and deliver projects on time",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Rigorous testing and quality checks at every stage",
    },
  ];

  const locations = [
    "Ranchi",
    "Delhi",
    "Noida",
    "Greater Noida",
    "Ahmedabad",
    "Bhopal",
    "Patna",
    "Gurgaon",
    "Mumbai",
    "Bangalore",
  ];

  return (
    <>
      <Helmet>
        <title>
          Raza Softwares- Professional Web Development & Design Services
        </title>
        <meta
          name="description"
          content="Raza Softwares offers expert web development and design services tailored to help businesses establish a strong online presence. From custom websites to responsive designs, we ensure innovative and user-friendly solutions to meet your needs."
        />
        <meta
          name="keywords"
          content="Raza Softwares, Raza Softwares,web development services,custom website development services, business website development services, real estate website development services, website development services near me, website development services in india, website design and development services, website development and seo services, website & app development services, best website design and development services, website development services bhubaneswar, website development services bangalore, best website development services in india, best professional website development services, b2b website development services, website development services in chennai, chandigarh website development services, corporate website development services, custom wordpress website development services, asu career and professional development services website, integrated child development services official website, custom website design and development services, website development company delhi, website development company delhi ncr, website development company in dwarka, website development company in dhanbad, ecommerce website development company delhi, dynamic website development services, website design and development services near me, ecommerce website design and development services, e commerce web developer near me, website development services in gurgaon, website development company in gorakhpur, website development company in greater noida, website development services hyderabad, web design services near me, custom website development services, professional website design services, affordable web development services, business website development services, ecommerce website development company, best website design and development services, website developers near me, SEO-friendly website development services, dynamic website development services, real estate website development services, responsive website design services, corporate website development solutions, b2b website development services, WordPress website development services, website and app development company, mobile-friendly website design services, website design services for startups, website redesign and maintenance services, web development company in India, top website development services in noida, top website development services in delhi, website developer near me, ecommerce website development company near me, website development company in noida"
        />
        <link rel="canonical" href="https://razasoftwares.in" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Raza Softwares",
            telephone: "+91 6201617895",
            url: "https://razasoftwares.in",
            description:
              "Raza Softwares provides professional web development and design services to help businesses grow online with innovative, user-friendly, and SEO-focused solutions.",
            areaServed: ["India", "Global"],
            availableLanguage: ["English", "Hindi"],
            sameAs: [
              "https://www.linkedin.com/company/razasoftwares",
              "https://www.instagram.com/razasoftwares",
              "https://www.facebook.com/razasoftwares",
            ],
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Your Growth Starts with a Powerful Website & Software
              </h1>
              <p className="text-xl md:text-xl mb-8 text-blue-100">
                Empower your business with modern, high-performance websites and
                custom software built to drive growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="tel:+917972495297"
                  className="inline-flex items-center justify-center bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-all border-2 border-white"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call: +91 62016 17895
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://action-point.com/wp-content/uploads/2014/10/Software-Development-Team.jpg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional Technician"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-0 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-blue-200 text-sm">Projects Completed</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold">200+</div>
              <div className="text-blue-200 text-sm">Happy Clients</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-blue-200 text-sm">Years Experience</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-blue-200 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Full-stack development and marketing services to accelerate your
              business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 cursor-pointer transform hover:-translate-y-2"
                  onClick={() => navigate("/services")}
                >
                  <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/services")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              View All Services
              <ArrowRight className="inline-block ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Raza Softwares?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your trusted technology partner for digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals. Get a
            free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg"
            >
              Get Free Consultation
            </button>
            <a
              href="tel:+916201617895"
              className="bg-transparent text-white px-8 py-4 rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
            >
              Call: +91 62016 17895
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
