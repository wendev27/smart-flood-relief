import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FloodHero from "@/public/PMS.jpg";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 shadow-sm bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">
          SmartFlood
          <span className="text-gray-800"> Mitigation</span>
        </h1>
        <div className="space-x-4">
          <Button variant="outline">Login</Button>
          <Button>Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Intelligent Flood Detection & Response System
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Empowering communities to predict, detect, and respond to flood risks
          in real-time using IoT sensors and data-driven technology.
        </p>
        <Button size="lg">Learn More</Button>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-10">
          Key Features
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
          <Card className="p-6 text-center hover:shadow-md transition">
            <h4 className="text-xl font-semibold mb-3 text-blue-600">
              Real-Time Monitoring
            </h4>
            <p className="text-gray-600">
              Continuously track water levels, rainfall, and sensor data to
              identify flood risks instantly.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-md transition">
            <h4 className="text-xl font-semibold mb-3 text-blue-600">
              Smart Alerts
            </h4>
            <p className="text-gray-600">
              Receive automated alerts via SMS, web, or mobile when danger
              levels are detected.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-md transition">
            <h4 className="text-xl font-semibold mb-3 text-blue-600">
              Data Visualization
            </h4>
            <p className="text-gray-600">
              View historical data, rainfall charts, and risk maps for better
              community planning.
            </p>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-blue-50 text-center px-8">
        <h3 className="text-3xl font-semibold mb-4">
          About the Smart Flood Mitigation Project
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto mb-8">
          Our system leverages modern IoT devices, sensors, and predictive
          analytics to safeguard lives and property. Designed for communities
          prone to flooding, it ensures proactive response through intelligent
          automation and communication.
        </p>
        <Button variant="outline" size="lg">
          Discover More
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-10 mt-auto">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} SmartFlood Mitigation. All rights
            reserved.
          </p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
