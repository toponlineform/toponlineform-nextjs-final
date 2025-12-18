
import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  schema?: any;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, canonicalUrl, schema }) => {
  return (
    <>
      {/* Title Tag */}
      <title>{title} | TopOnlineForm.com</title>
      
      {/* Meta Tags */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="TopOnlineForm" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://picsum.photos/1200/630" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </>
  );
};

export default SEO;
