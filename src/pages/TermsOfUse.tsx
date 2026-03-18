import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    heading: "1. Acceptance of Terms",
    content: `By accessing or using the AURA Fashion Group website (aura.fashion), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.

AURA reserves the right to modify these terms at any time. Continued use of the site following any changes constitutes acceptance of the new terms.`,
  },
  {
    heading: "2. Use of the Website",
    content: `You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:

• Use the site for any fraudulent, abusive, or unlawful purpose.
• Attempt to gain unauthorised access to any part of the website or its related systems.
• Transmit any viruses, malware, or other harmful code.
• Scrape, crawl, or use automated tools to extract data from the site without prior written consent.`,
  },
  {
    heading: "3. Intellectual Property",
    content: `All content on this website — including but not limited to text, images, logos, brand names, product designs, and layout — is the exclusive intellectual property of AURA Fashion Group or its licensors and is protected by applicable copyright, trademark, and design laws.

You may not reproduce, distribute, modify, or create derivative works from any content on this site without express written permission from AURA.`,
  },
  {
    heading: "4. Product Information & Pricing",
    content: `We strive to ensure all product descriptions, pricing, and availability information is accurate. However, errors may occasionally occur. AURA reserves the right to correct any inaccuracies and to cancel or refuse any order placed based on incorrect pricing or product information.

All prices are subject to change without notice. Order confirmations are not a guarantee of the listed price in case of pricing errors.`,
  },
  {
    heading: "5. Bulk Orders & Enquiries",
    content: `Enquiries submitted through our contact form are not legally binding orders. A confirmed purchase order is only established after AURA issues a formal written acknowledgement and agreement of terms for the specific transaction.

For bulk and custom orders, separate commercial terms may apply and will be communicated in writing prior to fulfilment.`,
  },
  {
    heading: "6. Disclaimers & Limitation of Liability",
    content: `The AURA website is provided "as is" without warranties of any kind. We do not warrant that the site will be uninterrupted, error-free, or free of viruses.

To the fullest extent permitted by law, AURA shall not be liable for any indirect, incidental, or consequential damages arising from your use of the website, including but not limited to loss of data, loss of revenue, or damage to your device.`,
  },
  {
    heading: "7. Governing Law",
    content: `These Terms of Use shall be governed by and construed in accordance with the laws of New York, United States, without regard to conflict of law principles. Any disputes shall be subject to the exclusive jurisdiction of courts located in New York.`,
  },
  {
    heading: "8. Contact",
    content: `If you have any questions about these Terms of Use, please contact us at legal@aura.fashion or write to AURA Fashion Group, Fashion Ave, New York.`,
  },
];

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero */}
      <div className="bg-primary text-primary-foreground px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.4em] opacity-50 mb-4">Legal</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold">Terms of Use</h1>
        <p className="mt-4 text-xs opacity-40 tracking-widest">Last updated: 18 March 2026</p>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-3xl mx-auto w-full px-6 py-16 space-y-12">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Please read these Terms of Use carefully before using the AURA Fashion Group website. These terms set out the rules that govern your use of our platform and services.
        </p>

        {sections.map((s, i) => (
          <div key={i}>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">{s.heading}</h2>
            <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
              {s.content.split("\n\n").map((para, j) => (
                <p key={j}>{para}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfUse;
