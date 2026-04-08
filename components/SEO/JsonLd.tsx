export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "H2N Taxi",
    areaServed: "Hà Nội",
    serviceType: ["Taxi", "Taxi sân bay", "Taxi đường dài", "Thuê xe hợp đồng"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
