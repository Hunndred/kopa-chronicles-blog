
import Layout from "../components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const faqItems = [
    {
      question: "What is NYSC?",
      answer:
        "The National Youth Service Corps (NYSC) is a program set up by the Nigerian government to involve Nigerian graduates in nation-building and development. It's a one-year mandatory service for all graduates of universities and polytechnics.",
    },
    {
      question: "Who is eligible for NYSC?",
      answer:
        "Nigerian citizens who have graduated from universities or polytechnics, both within Nigeria and abroad, and are below 30 years of age are eligible for NYSC.",
    },
    {
      question: "How do I register for NYSC?",
      answer:
        "Registration is done online through the NYSC portal. You'll need your school details, personal information, and other required documents for the registration process.",
    },
    {
      question: "What documents do I need for NYSC registration?",
      answer:
        "You'll need your certificate or statement of result, birth certificate or declaration of age, passport photograph, and other identification documents.",
    },
    {
      question: "How long is the NYSC program?",
      answer:
        "The NYSC program lasts for one year. It includes a three-week orientation camp, followed by an 11-month primary assignment at your place of posting.",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h1>
        
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-lg">
            Don't see your question? Join our WhatsApp group or contact us for more information.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Faq;
