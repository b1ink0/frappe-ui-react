import React, { useState } from "react";
import "./ThemeShowcase.css";

/**
 * A component that showcases all theme tokens from the design system.
 * Uses only static Tailwind classes to ensure compatibility with purging.
 */
const ThemeShowcase: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`theme-showcase p-8 ${isDarkMode ? 'dark bg-surface-white' : 'bg-surface-white'} text-ink-gray-8 font-sans`}>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Theme Tokens</h1>
        <button 
          onClick={toggleDarkMode} 
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Colors Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Colors</h2>

        {/* Base Colors */}
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Base Colors</h3>
          <div className="flex flex-wrap gap-2">
            <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-black"></div>
              <div className="p-1 text-center text-xs text-white">black</div>
            </div>
            <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-white"></div>
              <div className="p-1 text-center text-xs bg-gray-100">white</div>
            </div>
            <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-transparent"></div>
              <div className="p-1 text-center text-xs">transparent</div>
            </div>
            <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 text-current">current</div>
              <div className="p-1 text-center text-xs">currentColor</div>
            </div>
          </div>
        </div>

        {/* Gray Scale */}
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Gray Scale</h3>
          <div className="flex flex-wrap gap-2">
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-gray-50"></div>
              <div className="p-1 text-center text-xs">gray-50</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-gray-100"></div>
              <div className="p-1 text-center text-xs">gray-100</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-gray-200"></div>
              <div className="p-1 text-center text-xs">gray-200</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-gray-300"></div>
              <div className="p-1 text-center text-xs">gray-300</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-gray-400"></div>
              <div className="p-1 text-center text-xs">gray-400</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-gray-500"></div>
              <div className="p-1 text-center text-xs">gray-500</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-gray-600"></div>
              <div className="p-1 text-center text-xs text-white">gray-600</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-gray-700"></div>
              <div className="p-1 text-center text-xs text-white">gray-700</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-gray-800"></div>
              <div className="p-1 text-center text-xs text-white">gray-800</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-gray-900"></div>
              <div className="p-1 text-center text-xs text-white">gray-900</div>
            </div>
          </div>
        </div>

        {/* Blue Scale */}
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Blue Scale</h3>
          <div className="flex flex-wrap gap-2">
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-blue-50"></div>
              <div className="p-1 text-center text-xs">blue-50</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-blue-100"></div>
              <div className="p-1 text-center text-xs">blue-100</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-blue-200"></div>
              <div className="p-1 text-center text-xs">blue-200</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-blue-300"></div>
              <div className="p-1 text-center text-xs">blue-300</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-blue-400"></div>
              <div className="p-1 text-center text-xs">blue-400</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-blue-500"></div>
              <div className="p-1 text-center text-xs text-white">blue-500</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-blue-600"></div>
              <div className="p-1 text-center text-xs text-white">blue-600</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-blue-700"></div>
              <div className="p-1 text-center text-xs text-white">blue-700</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-blue-800"></div>
              <div className="p-1 text-center text-xs text-white">blue-800</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-blue-900"></div>
              <div className="p-1 text-center text-xs text-white">blue-900</div>
            </div>
          </div>
        </div>

        {/* Green Scale */}
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Green Scale</h3>
          <div className="flex flex-wrap gap-2">
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-green-50"></div>
              <div className="p-1 text-center text-xs">green-50</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-green-100"></div>
              <div className="p-1 text-center text-xs">green-100</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-green-200"></div>
              <div className="p-1 text-center text-xs">green-200</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-green-300"></div>
              <div className="p-1 text-center text-xs">green-300</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-green-400"></div>
              <div className="p-1 text-center text-xs">green-400</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-green-500"></div>
              <div className="p-1 text-center text-xs text-white">green-500</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-green-600"></div>
              <div className="p-1 text-center text-xs text-white">green-600</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-green-700"></div>
              <div className="p-1 text-center text-xs text-white">green-700</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-green-800"></div>
              <div className="p-1 text-center text-xs text-white">green-800</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-green-900"></div>
              <div className="p-1 text-center text-xs text-white">green-900</div>
            </div>
          </div>
        </div>

        {/* Red Scale */}
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Red Scale</h3>
          <div className="flex flex-wrap gap-2">
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-red-50"></div>
              <div className="p-1 text-center text-xs">red-50</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-red-100"></div>
              <div className="p-1 text-center text-xs">red-100</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-red-200"></div>
              <div className="p-1 text-center text-xs">red-200</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-red-300"></div>
              <div className="p-1 text-center text-xs">red-300</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-red-400"></div>
              <div className="p-1 text-center text-xs">red-400</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-red-500"></div>
              <div className="p-1 text-center text-xs text-white">red-500</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-red-600"></div>
              <div className="p-1 text-center text-xs text-white">red-600</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-red-700"></div>
              <div className="p-1 text-center text-xs text-white">red-700</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-red-800"></div>
              <div className="p-1 text-center text-xs text-white">red-800</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-red-900"></div>
              <div className="p-1 text-center text-xs text-white">red-900</div>
            </div>
          </div>
        </div>

        {/* Other Color Scales */}
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Other Color Scales</h3>
          <p className="mb-4 text-sm">Each color has a complete scale from 50-900. Here are the 500 values.</p>
          <div className="flex flex-wrap gap-2">
            <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-orange-500"></div>
              <div className="p-1 text-center text-xs text-white">orange-500</div>
            </div>
            <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-yellow-500"></div>
              <div className="p-1 text-center text-xs">yellow-500</div>
            </div>
            <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-teal-500"></div>
              <div className="p-1 text-center text-xs text-white">teal-500</div>
            </div>
            <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-violet-500"></div>
              <div className="p-1 text-center text-xs text-white">violet-500</div>
            </div>
            <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-cyan-500"></div>
              <div className="p-1 text-center text-xs text-white">cyan-500</div>
            </div>
            <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-amber-500"></div>
              <div className="p-1 text-center text-xs">amber-500</div>
            </div>
            <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-pink-500"></div>
              <div className="p-1 text-center text-xs text-white">pink-500</div>
            </div>
            <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-purple-500"></div>
              <div className="p-1 text-center text-xs text-white">purple-500</div>
            </div>
          </div>
        </div>

        {/* Overlay colors */}
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Overlay Colors</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-2">White Overlay</h4>
              <div className="bg-gray-800 p-4 rounded">
                <div className="flex flex-wrap gap-2">
                  <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                    <div className="flex-1 bg-white-overlay-100"></div>
                    <div className="p-1 text-center text-xs bg-white">100</div>
                  </div>
                  <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                    <div className="flex-1 bg-white-overlay-300"></div>
                    <div className="p-1 text-center text-xs bg-white">300</div>
                  </div>
                  <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                    <div className="flex-1 bg-white-overlay-500"></div>
                    <div className="p-1 text-center text-xs bg-white">500</div>
                  </div>
                  <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                    <div className="flex-1 bg-white-overlay-700"></div>
                    <div className="p-1 text-center text-xs bg-white">700</div>
                  </div>
                  <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                    <div className="flex-1 bg-white-overlay-900"></div>
                    <div className="p-1 text-center text-xs bg-white">900</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">Black Overlay</h4>
              <div className="bg-gray-100 p-4 rounded">
                <div className="flex flex-wrap gap-2">
                  <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                    <div className="flex-1 bg-black-overlay-100"></div>
                    <div className="p-1 text-center text-xs">100</div>
                  </div>
                  <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                    <div className="flex-1 bg-black-overlay-300"></div>
                    <div className="p-1 text-center text-xs">300</div>
                  </div>
                  <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                    <div className="flex-1 bg-black-overlay-500"></div>
                    <div className="p-1 text-center text-xs">500</div>
                  </div>
                  <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                    <div className="flex-1 bg-black-overlay-700"></div>
                    <div className="p-1 text-center text-xs">700</div>
                  </div>
                  <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                    <div className="flex-1 bg-black-overlay-900"></div>
                    <div className="p-1 text-center text-xs text-white">900</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Semantic Colors */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Semantic Colors</h2>
          
          {/* Ink Colors */}
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Ink Colors (Text)</h3>
            <div className="flex flex-wrap gap-2">
              <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                <div className="flex-1 flex items-center justify-center bg-surface-white">
                  <span className="text-ink-white">Text</span>
                </div>
                <div className="p-1 text-center text-xs">ink-white</div>
              </div>
              <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                <div className="flex-1 flex items-center justify-center bg-surface-white">
                  <span className="text-ink-gray-8">Text</span>
                </div>
                <div className="p-1 text-center text-xs">ink-gray-8</div>
              </div>
              <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                <div className="flex-1 flex items-center justify-center bg-surface-white">
                  <span className="text-ink-blue-3">Text</span>
                </div>
                <div className="p-1 text-center text-xs">ink-blue-3</div>
              </div>
              <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                <div className="flex-1 flex items-center justify-center bg-surface-white">
                  <span className="text-ink-red-3">Text</span>
                </div>
                <div className="p-1 text-center text-xs">ink-red-3</div>
              </div>
              <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                <div className="flex-1 flex items-center justify-center bg-surface-white">
                  <span className="text-ink-green-3">Text</span>
                </div>
                <div className="p-1 text-center text-xs">ink-green-3</div>
              </div>
            </div>
          </div>
          
          {/* Surface Colors */}
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Surface Colors (Backgrounds)</h3>
            <div className="flex flex-wrap gap-2">
              <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                <div className="flex-1 bg-surface-white"></div>
                <div className="p-1 text-center text-xs">surface-white</div>
              </div>
              <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                <div className="flex-1 bg-surface-gray-1"></div>
                <div className="p-1 text-center text-xs">surface-gray-1</div>
              </div>
              <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                <div className="flex-1 bg-surface-blue-1"></div>
                <div className="p-1 text-center text-xs">surface-blue-1</div>
              </div>
              <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                <div className="flex-1 bg-surface-red-1"></div>
                <div className="p-1 text-center text-xs">surface-red-1</div>
              </div>
              <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                <div className="flex-1 bg-surface-green-1"></div>
                <div className="p-1 text-center text-xs">surface-green-1</div>
              </div>
            </div>
          </div>
          
          {/* Outline Colors */}
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Outline Colors (Borders)</h3>
            <div className="flex flex-wrap gap-2">
              <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                <div className="flex-1 border-4 border-outline-white bg-surface-gray-1"></div>
                <div className="p-1 text-center text-xs">outline-white</div>
              </div>
              <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                <div className="flex-1 border-4 border-outline-gray-1"></div>
                <div className="p-1 text-center text-xs">outline-gray-1</div>
              </div>
              <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                <div className="flex-1 border-4 border-outline-blue-1"></div>
                <div className="p-1 text-center text-xs">outline-blue-1</div>
              </div>
              <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                <div className="flex-1 border-4 border-outline-red-1"></div>
                <div className="p-1 text-center text-xs">outline-red-1</div>
              </div>
              <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                <div className="flex-1 border-4 border-outline-green-1"></div>
                <div className="p-1 text-center text-xs">outline-green-1</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Typography</h2>
        
        {/* Font Sizes */}
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Font Sizes</h3>
          <div className="space-y-3">
            <div>
              <span className="text-xs">Text XS</span>
              <div className="text-xs text-gray-500 mt-1">--text-xs-size: 12px</div>
            </div>
            <div>
              <span className="text-sm">Text SM</span>
              <div className="text-xs text-gray-500 mt-1">--text-sm-size: 13px</div>
            </div>
            <div>
              <span className="text-base">Text Base</span>
              <div className="text-xs text-gray-500 mt-1">--text-base-size: 14px</div>
            </div>
            <div>
              <span className="text-lg">Text LG</span>
              <div className="text-xs text-gray-500 mt-1">--text-lg-size: 16px</div>
            </div>
            <div>
              <span className="text-xl">Text XL</span>
              <div className="text-xs text-gray-500 mt-1">--text-xl-size: 18px</div>
            </div>
            <div>
              <span className="text-2xl">Text 2XL</span>
              <div className="text-xs text-gray-500 mt-1">--text-2xl-size: 20px</div>
            </div>
            <div>
              <span className="text-3xl">Text 3XL</span>
              <div className="text-xs text-gray-500 mt-1">--text-3xl-size: 24px</div>
            </div>
          </div>
        </div>

        {/* Font Weights */}
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Font Weights</h3>
          <div className="space-y-3">
            <div>
              <span className="font-light text-lg">Light (300)</span>
            </div>
            <div>
              <span className="font-normal text-lg">Normal (400)</span>
            </div>
            <div>
              <span className="font-medium text-lg">Medium (500)</span>
            </div>
            <div>
              <span className="font-semibold text-lg">Semibold (600)</span>
            </div>
            <div>
              <span className="font-bold text-lg">Bold (700)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Border Radius */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Border Radius</h2>
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-200 rounded-none"></div>
            <span className="text-sm mt-2">radius-none</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-200 rounded-sm"></div>
            <span className="text-sm mt-2">radius-sm</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-200 rounded"></div>
            <span className="text-sm mt-2">radius-default</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-200 rounded-md"></div>
            <span className="text-sm mt-2">radius-md</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-200 rounded-lg"></div>
            <span className="text-sm mt-2">radius-lg</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-200 rounded-xl"></div>
            <span className="text-sm mt-2">radius-xl</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-200 rounded-2xl"></div>
            <span className="text-sm mt-2">radius-2xl</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-200 rounded-full"></div>
            <span className="text-sm mt-2">radius-full</span>
          </div>
        </div>
      </section>

      {/* Shadows */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Box Shadows</h2>
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-white shadow-sm flex items-center justify-center">sm</div>
            <span className="text-sm mt-2">shadow-sm</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-white shadow flex items-center justify-center">default</div>
            <span className="text-sm mt-2">shadow</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-white shadow-md flex items-center justify-center">md</div>
            <span className="text-sm mt-2">shadow-md</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-white shadow-lg flex items-center justify-center">lg</div>
            <span className="text-sm mt-2">shadow-lg</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-white shadow-xl flex items-center justify-center">xl</div>
            <span className="text-sm mt-2">shadow-xl</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-white shadow-2xl flex items-center justify-center">2xl</div>
            <span className="text-sm mt-2">shadow-2xl</span>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Spacing</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-blue-300 p-0 border border-blue-500 w-16 h-16 flex items-center justify-center">
              <div className="bg-blue-500 w-full h-full"></div>
            </div>
            <span className="text-sm mt-2">p-0</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-300 p-1 border border-blue-500 w-16 h-16 flex items-center justify-center">
              <div className="bg-blue-500 w-full h-full"></div>
            </div>
            <span className="text-sm mt-2">p-1</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-300 p-2 border border-blue-500 w-16 h-16 flex items-center justify-center">
              <div className="bg-blue-500 w-full h-full"></div>
            </div>
            <span className="text-sm mt-2">p-2</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-300 p-4 border border-blue-500 w-16 h-16 flex items-center justify-center">
              <div className="bg-blue-500 w-full h-full"></div>
            </div>
            <span className="text-sm mt-2">p-4</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-300 p-8 border border-blue-500 w-16 h-16 flex items-center justify-center">
              <div className="bg-blue-500 w-full h-full"></div>
            </div>
            <span className="text-sm mt-2">p-8</span>
          </div>
        </div>
      </section>

      {/* Transitions & Animations */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Transitions & Animations
        </h2>
        <div className="flex flex-wrap gap-6">
          <div className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-300">
            <p>Hover me (transition)</p>
          </div>
          <div className="animate-pulse bg-blue-300 w-20 h-20 flex items-center justify-center">
            <span>Pulse</span>
          </div>
          <div className="animate-spin bg-blue-300 w-20 h-20 flex items-center justify-center">
            <span>Spin</span>
          </div>
          <div className="animate-bounce bg-blue-300 w-20 h-20 flex items-center justify-center">
            <span>Bounce</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThemeShowcase;
