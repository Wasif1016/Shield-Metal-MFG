import Image from 'next/image';

// Import icons from react-icons
import { GiChemicalDrop } from 'react-icons/gi';
import { MdOutlineSettings } from 'react-icons/md';
import { BiShieldQuarter } from 'react-icons/bi';

export default function Products() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Premium Products
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Engineered for excellence, our product line features industry-leading materials 
            and precise specifications for optimal performance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Stainless Steel Elbows */}
          <div className="bg-black/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10 
            hover:border-white/20 transition-all duration-300 group">
            <div className="aspect-square relative mb-6 rounded-xl overflow-hidden">
              <Image
                src="/Stainless+Steel+45+-+Shield+Metal+DS.png"
                alt="Stainless Steel Elbows"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <GiChemicalDrop className="absolute bottom-4 right-4 w-8 h-8 text-white/80" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span>Stainless Steel Elbows</span>
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-500"></span>
                <div>
                  <h4 className="text-gray-300 font-medium mb-1">Material</h4>
                  <p className="text-gray-400">High-quality 0.010" thickness Type 304 & 316 stainless steel</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-500"></span>
                <div>
                  <h4 className="text-gray-300 font-medium mb-1">Options</h4>
                  <p className="text-gray-400">Available in 90° & 45°, long and short radius for 90°</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-500"></span>
                <div>
                  <h4 className="text-gray-300 font-medium mb-1">Sizes</h4>
                  <p className="text-gray-400">Fits 13mm (1/2") IPS to 300mm (12") IPS</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-500"></span>
                <div>
                  <h4 className="text-gray-300 font-medium mb-1">Insulation Compatibility</h4>
                  <p className="text-gray-400">25mm (1") to 100mm (4") thickness</p>
                </div>
              </div>
            </div>

            <button className="w-full py-4 px-6 bg-white hover:bg-white/20 text-black 
              rounded-lg transition-all duration-300 group-hover:bg-grey-600">
              Read More →
            </button>
          </div>

          {/* Aluminum Elbows */}
          <div className="bg-black/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10 
            hover:border-white/20 transition-all duration-300 group">
            <div className="aspect-square relative mb-6 rounded-xl overflow-hidden">
              <Image
                src="/Aluminum+90+-+Shield+Metal+DS+homepage.png"
                alt="Aluminum Elbows"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <MdOutlineSettings className="absolute bottom-4 right-4 w-8 h-8 text-white/80" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span>Aluminum Elbows</span>
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-500"></span>
                <div>
                  <h4 className="text-gray-300 font-medium mb-1">Material</h4>
                  <p className="text-gray-400">High-quality 1100 alloy in 0.024" thickness (24 gauge)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-500"></span>
                <div>
                  <h4 className="text-gray-300 font-medium mb-1">Options</h4>
                  <p className="text-gray-400">Available in 90° & 45°, long and short radius for 90°</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-500"></span>
                <div>
                  <h4 className="text-gray-300 font-medium mb-1">Sizes</h4>
                  <p className="text-gray-400">Fits 13mm (1/2") IPS to 300mm (12") IPS</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-500"></span>
                <div>
                  <h4 className="text-gray-300 font-medium mb-1">Insulation Compatibility</h4>
                  <p className="text-gray-400">25mm (1") to 100mm (4") thickness</p>
                </div>
              </div>
            </div>

            <button className="w-full py-4 px-6 bg-white hover:bg-white/20 text-black 
              rounded-lg transition-all duration-300 group-hover:bg-grey-600">
              Read More →
            </button>
          </div>

          {/* Coated Aluminum Elbows */}
          <div className="bg-black/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10 
            hover:border-white/20 transition-all duration-300 group">
            <div className="aspect-square relative mb-6 rounded-xl overflow-hidden">
              <Image
                src="/Stucco+Embossed+90+-+Shield+Metal+DS.png"
                alt="Coated Aluminum Elbows"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <BiShieldQuarter className="absolute bottom-4 right-4 w-8 h-8 text-white/80" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span>Coated Aluminum Elbows</span>
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-500"></span>
                <div>
                  <h4 className="text-gray-300 font-medium mb-1">Material</h4>
                  <p className="text-gray-400">1100 Aluminum alloy in 0.024" thickness (24 gauge)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue"></span>
                <div>
                  <h4 className="text-gray-300 font-medium mb-1">Options</h4>
                  <p className="text-gray-400">Smooth and stucco embossed finishes</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-500"></span>
                <div>
                  <h4 className="text-gray-300 font-medium mb-1">Sizes</h4>
                  <p className="text-gray-400">Fits 13mm (1/2") IPS to 300mm (12") IPS</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-500"></span>
                <div>
                  <h4 className="text-gray-300 font-medium mb-1">Insulation Compatibility</h4>
                  <p className="text-gray-400">25mm (1") to 100mm (4") thickness</p>
                </div>
              </div>
            </div>

            <button className="w-full py-4 px-6 bg-white hover:bg-white/20 text-black 
              rounded-lg transition-all duration-300 group-hover:bg-grey-600">
              Read More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 