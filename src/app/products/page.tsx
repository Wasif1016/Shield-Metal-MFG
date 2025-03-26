'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckBadgeIcon, ShieldCheckIcon, MapPinIcon, StarIcon, BeakerIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/solid';

export default function ProductsPage() {
  const products = [
    {
      category: "Stainless Steel",
      variants: [
        {
          type: "304 Stainless Steel",
          angles: [
            {
              name: "45° Elbow",
              image: "/products/Stainless-Steel-45.png", 
              description: "Precision-formed 45° angle for directional changes"
            },
            {
              name: "90° Elbow",
              image: "/products/Stainless-Steel-90.png",
              description: "Standard 90° angle for right-angle turns"
            }
          ],
          thickness: "0.010\"",
          features: [
            "Excellent corrosion resistance",
            "High strength-to-weight ratio", 
            "Smooth interior for optimal airflow",
            "Weather-tight seal"
          ],
          sizes: "1/2\" to 12\" IPS | 1\" to 4\" insulation"
        },
        {
          type: "316 Stainless Steel",
          angles: [
            {
              name: "45° Elbow",
              image: "/products/Stainless-Steel-45.png",
              description: "Premium 45° angle with enhanced corrosion resistance"
            },
            {
              name: "90° Elbow", 
              image: "/products/Stainless-Steel-90.png",
              description: "Heavy-duty 90° angle for demanding applications"
            }
          ],
          thickness: "0.010\"",
          features: [
            "Superior chloride resistance",
            "Ideal for coastal/marine environments",
            "High temperature tolerance",
            "Low maintenance"
          ],
          sizes: "1/2\" to 12\" IPS | 1\" to 4\" insulation"
        }
      ]
    },
    {
      category: "Aluminum",
      variants: [
        {
          type: "Smooth Finish",
          angles: [
            {
              name: "45° Elbow",
              image: "/products/Aluminum-Smooth-45.png",
              description: "Clean 45° angle with uniform surface"
            },
            {
              name: "90° Elbow",
              image: "/products/Aluminum-Smooth-90.png", 
              description: "Streamlined 90° angle transition"
            }
          ],
          thickness: "0.024\" (24 gauge)",
          features: [
            "Factory-applied acrylic exterior coating",
            "Blue epoxy interior moisture barrier",
            "Excellent formability",
            "Lightweight yet durable"
          ],
          sizes: "1/2\" to 12\" IPS | 1\" to 4\" insulation"
        },
        {
          type: "Stucco Embossed",
          angles: [
            {
              name: "45° Elbow",
              image: "/products/Aluminum-Stucco-45.png",
              description: "Textured 45° angle for visual appeal"
            },
            {
              name: "90° Elbow",
              image: "/products/Aluminum-Stucco-90.png",
              description: "Decorative 90° angle with stucco pattern"
            }
          ],
          thickness: "0.024\" (24 gauge)",
          features: [
            "Attractive textured finish",
            "Same protective coatings as smooth finish",
            "Hides minor imperfections",
            "Enhanced grip surface"
          ],
          sizes: "1/2\" to 12\" IPS | 1\" to 4\" insulation"
        }
      ]
    }
  ];

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:pt-36 bg-muted">
        <div className="absolute inset-0 bg-[url('/texture-dark.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 text-primary text-sm mb-6">
              <ShieldCheckIcon className="w-5 h-5 mr-2" />
              North American Made Quality
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">HVAC Elbow Solutions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Premium stainless steel and aluminum elbows engineered for durability and performance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="flex items-center mb-10">
                <div className="h-px bg-gradient-to-r from-muted to-primary w-16 mr-4"></div>
                <h2 className="text-3xl font-bold text-foreground">{product.category} Elbows</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {product.variants.map((variant) => (
                  <div key={variant.type} className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-all">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{variant.type}</h3>
                        <div className="flex items-center mt-2">
                          <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded mr-2">{variant.thickness}</span>
                          <span className="text-sm bg-muted text-muted-foreground px-2 py-1 rounded">{product.category === "Stainless Steel" ? "T-304/316" : "1100 Alloy"}</span>
                        </div>
                      </div>
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {product.category === "Stainless Steel" ? (
                          <BeakerIcon className="w-6 h-6 text-primary" />
                        ) : (
                          <ArrowsPointingOutIcon className="w-6 h-6 text-primary" />
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                      {variant.angles.map((angle) => (
                        <div key={angle.name} className="group">
                          <div className="aspect-square relative rounded-lg overflow-hidden bg-muted mb-3">
                            <Image
                              src={angle.image}
                              alt={angle.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <h4 className="font-medium text-foreground">{angle.name}</h4>
                          <p className="text-sm text-muted-foreground">{angle.description}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <h4 className="font-medium text-foreground mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {variant.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckBadgeIcon className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-card rounded-lg p-4 border border-border">
                      <h4 className="font-medium text-foreground mb-2">Available Sizes</h4>
                      <p className="text-muted-foreground">{variant.sizes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl shadow-sm p-8 border border-border"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8">Technical Specifications</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-muted">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Material</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Thickness</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Angles</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">IPS Range</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Insulation</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Coatings</th>
                  </tr>
                </thead>
                <tbody className="bg-card divide-y divide-border">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">304 Stainless Steel</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">0.010"</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">45°, 90°</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">1/2" - 12"</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">1" - 4"</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">None (bare metal)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">316 Stainless Steel</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">0.010"</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">45°, 90°</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">1/2" - 12"</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">1" - 4"</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">None (bare metal)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">Aluminum (Smooth)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">0.024"</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">45°, 90°</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">1/2" - 12"</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">1" - 4"</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">Acrylic exterior + epoxy interior</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">Aluminum (Stucco)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">0.024"</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">45°, 90°</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">1/2" - 12"</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">1" - 4"</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">Acrylic exterior + epoxy interior</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}