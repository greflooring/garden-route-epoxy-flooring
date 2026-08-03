import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h3 className="text-3xl font-black text-white">
              Garden Route
              <br />
              <span className="text-yellow-500">Epoxy Flooring</span>
            </h3>

            <p className="mt-6 text-gray-400 leading-7">
              Premium residential and commercial epoxy flooring throughout the
              Garden Route. We deliver durable, seamless, high-quality epoxy
              floors built to last.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Services</h4>

            <ul className="space-y-3 text-gray-400">
              <li>Garage Floors</li>
              <li>Commercial Flooring</li>
              <li>Metallic Epoxy</li>
              <li>Flake Flooring</li>
              <li>Workshop Floors</li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">
              Service Areas
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li>Mossel Bay</li>
              <li>George</li>
              <li>Hartenbos</li>
              <li>Wilderness</li>
              <li>Knysna</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Contact</h4>

            <div className="space-y-5">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-yellow-500" />
                <span>061 069 2503 067 845 4862</span>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-yellow-500" />
                <span>greflooring@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} className="text-yellow-500" />
                <span>Garden Route, South Africa</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Garden Route Epoxy Flooring. All Rights
            Reserved.
          </p>

          <p className="text-sm text-gray-500">
            Designed with pride in South Africa 🇿🇦
          </p>
        </div>
      </div>
    </footer>
  );
}