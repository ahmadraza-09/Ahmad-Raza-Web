import { useEffect } from "react";

const SEO = ({ title, description, keywords, canonical }) => {
  useEffect(() => {
    document.title = `${title} | Raza Softwares`;

    // Update or create meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);

    // Open Graph tags
    updateMetaTag("og:title", `${title} | Raza Softwares`, "property");
    updateMetaTag("og:description", description, "property");
    updateMetaTag("og:type", "website", "property");

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", `${title} | Raza Softwares`);
    updateMetaTag("twitter:description", description);

    // Canonical URL
    if (canonical) {
      updateCanonicalLink(canonical);
    }
  }, [title, description, keywords, canonical]);

  return null;
};

const updateMetaTag = (name, content, attribute = "name") => {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const updateCanonicalLink = (href) => {
  let link = document.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
};

export default SEO;
