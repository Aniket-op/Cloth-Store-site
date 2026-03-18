import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    heading: "1. Information We Collect",
    content: `When you use the AURA Fashion website or submit an inquiry, we may collect the following types of information:

• **Personal Identifiers** — your full name, email address, phone number, and company name when you submit our enquiry form.
• **Usage Data** — pages visited, time spent, browser type, and device information collected automatically through standard web analytics.
• **Communication Records** — any messages or correspondence you send us via email, WhatsApp, or our contact form.

We do not collect payment information directly; all transactions are handled through secure third-party payment processors.`,
  },
  {
    heading: "2. How We Use Your Information",
    content: `Your information is used exclusively to:

• Process and respond to your enquiries and orders.
• Send you relevant updates about your order status or our collections (only if you have opted in).
• Improve our website experience based on aggregate, anonymised usage data.
• Meet legal and regulatory obligations where required.

We will never sell, rent, or share your personal information with third parties for their marketing purposes.`,
  },
  {
    heading: "3. Data Storage & Security",
    content: `All personal data is stored on secure servers with encryption at rest and in transit. We implement industry-standard security measures including SSL/TLS protocols, access controls, and regular security audits to protect your information.

Despite our best efforts, no method of electronic transmission or storage is 100% secure. We encourage you to use strong, unique passwords and to contact us immediately if you suspect any unauthorised access to your data.`,
  },
  {
    heading: "4. Cookies",
    content: `Our website uses cookies to enhance your browsing experience. These include:

• **Essential cookies** — required for the site to function correctly.
• **Analytics cookies** — help us understand how visitors interact with our site (e.g. Google Analytics).
• **Preference cookies** — remember your settings such as language or region.

You can control cookie settings through your browser at any time. Disabling certain cookies may affect site functionality.`,
  },
  {
    heading: "5. Third-Party Links",
    content: `Our website may contain links to third-party platforms including WhatsApp, Instagram, and payment gateways. Once you leave our site, we have no control over the privacy practices of those third parties and encourage you to review their respective privacy policies.`,
  },
  {
    heading: "6. Your Rights",
    content: `You have the right to:

• Access the personal data we hold about you.
• Request correction of inaccurate information.
• Request deletion of your data (subject to legal obligations).
• Withdraw consent for marketing communications at any time.

To exercise any of these rights, please email us at privacy@aura.fashion with the subject line "Privacy Request".`,
  },
  {
    heading: "7. Contact & Updates",
    content: `This Privacy Policy was last updated on 18 March 2026. We reserve the right to update this policy at any time. Significant changes will be communicated via email to registered users.

For any privacy-related questions, please contact our Data Protection Officer at privacy@aura.fashion or write to us at AURA Fashion Group, Fashion Ave, New York.`,
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero */}
      <div className="bg-primary text-primary-foreground px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.4em] opacity-50 mb-4">Legal</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-xs opacity-40 tracking-widest">Last updated: 18 March 2026</p>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-3xl mx-auto w-full px-6 py-16 space-y-12">
        <p className="text-sm text-muted-foreground leading-relaxed">
          AURA Fashion Group ("AURA", "we", "our", or "us") is committed to protecting your privacy. This policy explains what personal information we collect, how we use it, and the choices you have.
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

export default PrivacyPolicy;
