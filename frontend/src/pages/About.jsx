import {
  Target,
  Users,
  Lightbulb,
  Award,
  TrendingUp,
  Globe,
  Shield,
  Heart,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const About = () => {
  const navigate = useNavigate();
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for excellence in every project, delivering solutions that exceed expectations.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies and innovative approaches to solve complex challenges.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We operate with transparency, honesty, and ethical practices in all our business dealings.",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description:
        "Our clients' success is our success. We prioritize their needs and goals above all.",
    },
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description:
        "Raza Softwares was established with a vision to empower businesses through technology.",
    },
    {
      year: "2019",
      title: "Expanded Services",
      description:
        "Added digital marketing and SEO services to our portfolio, serving 50+ clients.",
    },
    {
      year: "2021",
      title: "Team Growth",
      description:
        "Grew to a team of 30+ professionals, opened new offices across India.",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description:
        "Received multiple awards for excellence in software development and client satisfaction.",
    },
    {
      year: "2024",
      title: "Major Milestone",
      description:
        "Completed 500+ projects, serving clients across 10+ major cities in India.",
    },
  ];

  const team = [
    {
      name: "Ahmad Raza",
      role: "Founder & CEO",
      description:
        "Visionary leader with 10+ years of experience in software development and business strategy.",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "200+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "6+", label: "Years of Excellence" },
  ];

  const expertise = [
    "Custom Software Development",
    "Web & Mobile Applications",
    "E-commerce Solutions",
    "Digital Marketing Campaigns",
    "Search Engine Optimization",
    "Cloud Infrastructure",
    "UI/UX Design",
    "Quality Assurance",
  ];

  return (
    <>
      <Helmet>
        <title>
          About Raza Softwares | Leading Web & Software Development Company in
          India
        </title>
        <meta
          name="description"
          content="Learn more about Raza Softwares — a trusted web and software development company dedicated to helping businesses grow online. We specialize in creating modern, responsive, and user-friendly websites and applications tailored to your business goals."
        />
        <meta
          name="keywords"
          content="About Raza Softwares, Raza Softwares company, about web development company, about software development company, software company in India, web development company in India, website development experts, professional web developers, full stack development company, frontend backend web development, software solutions company, best web development company, Raza WebSoft Solution, Raza Softwares Noida, Raza Softwares Greater Noida"
        />
        <link rel="canonical" href="https://razasoftwares.in/about" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Raza Softwares",
            url: "https://razasoftwares.in/about",
            description:
              "Raza Softwares is a professional web and software development company helping startups and businesses create a strong digital presence through modern, scalable, and SEO-optimized solutions.",
            founder: {
              "@type": "Person",
              name: "Ahmad Raza",
              jobTitle: "Founder & Full-Stack Developer",
            },
            sameAs: [
              "https://www.linkedin.com/company/razasoftwares",
              "https://www.instagram.com/razasoftwares",
              "https://www.facebook.com/razasoftwares",
            ],
            areaServed: ["India", "Global"],
            availableLanguage: ["English", "Hindi"],
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Raza Softwares
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Empowering businesses with innovative technology solutions and
              strategic digital marketing since 2018
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 lg:p-12 rounded-2xl">
              <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To deliver exceptional technology solutions and digital
                marketing services that drive business growth and create lasting
                value for our clients. We are committed to excellence,
                innovation, and building long-term partnerships based on trust
                and results.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 lg:p-12 rounded-2xl">
              <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be India's most trusted and innovative technology partner,
                recognized for transforming businesses through cutting-edge
                software solutions and data-driven digital marketing strategies.
                We envision a future where every business has access to
                world-class technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-blue-200 transition-all hover:shadow-xl"
                >
                  <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to industry leadership
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-xl">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-center gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-blue-200 transition-all hover:shadow-xl text-center"
              >
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive skills to serve all your technology needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {expertise.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow border border-gray-100"
              >
                <p className="text-gray-700 font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Raza Softwares for
            their technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Start Your Project
            </button>
            <button
              onClick={() => navigate("/services")}
              className="bg-transparent text-white px-8 py-4 rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
