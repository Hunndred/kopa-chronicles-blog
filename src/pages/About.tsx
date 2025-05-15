
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About 9JAKOPA</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            9JAKOPA is a community platform dedicated to providing valuable information, 
            resources, and support for NYSC corps members and prospective corps members in Nigeria.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
          <p>
            Our mission is to help make the NYSC experience smoother and more productive for Nigerian youth. 
            We provide timely updates, practical advice, and create a supportive community where members can 
            share experiences and information.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Up-to-date information about NYSC registrations, call-up letters, and policies</li>
            <li>Tips and guides for navigating orientation camp and the service year</li>
            <li>Resources for professional development and opportunities during and after NYSC</li>
            <li>A community space for corps members to connect and support each other</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Join Our Community</h2>
          <p className="mb-6">
            Connect with thousands of other corps members by joining our WhatsApp community. Share experiences, 
            ask questions, and get real-time updates.
          </p>
          
          <div className="mt-8">
            <a 
              href="https://chat.whatsapp.com/EXAMPLELINK"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors inline-block font-medium"
            >
              Join Our WhatsApp Group
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
