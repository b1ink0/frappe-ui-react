import React from "react";

/**
 * A component that showcases all theme tokens from the design system.
 * Uses only static Tailwind classes to ensure compatibility with purging.
 */
const ThemeShowcase: React.FC = () => {
  return (
    <div className="theme-showcase p-8 bg-surface-white text-ink-gray-8 font-sans">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Theme Tokens</h1>
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
              <div className="p-1 text-center text-xs">black</div>
            </div>
            <div className="w-24 h-24 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-white"></div>
              <div className="p-1 text-center text-xs">white</div>
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
              <div className="flex-1 bg-red-500"></div>
              <div className="p-1 text-center text-xs text-white">red-500</div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-red-900"></div>
              <div className="p-1 text-center text-xs text-white">red-900</div>
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
              <div className="flex-1 bg-green-500"></div>
              <div className="p-1 text-center text-xs text-white">
                green-500
              </div>
            </div>
            <div className="w-16 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
              <div className="flex-1 bg-green-900"></div>
              <div className="p-1 text-center text-xs text-white">
                green-900
              </div>
            </div>
          </div>
        </div>

        {/* Semantic Colors */}
        <div className="mt-12 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Semantic Colors</h2>

          {/* Text Colors (Ink) */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-3">Text Colors (Ink)</h3>
            <div className="flex flex-wrap gap-2">
              <div className="w-28 h-16 p-2 flex flex-col justify-between rounded border border-outline-gray-1">
                <div className="text-ink-white bg-gray-800 p-1 rounded">
                  Text
                </div>
                <div className="text-xs">ink-white</div>
              </div>
              <div className="w-28 h-16 p-2 flex flex-col justify-between rounded border border-outline-gray-1">
                <div className="text-ink-gray-1 p-1 rounded">Text</div>
                <div className="text-xs">ink-gray-1</div>
              </div>
              <div className="w-28 h-16 p-2 flex flex-col justify-between rounded border border-outline-gray-1">
                <div className="text-ink-gray-5 p-1 rounded">Text</div>
                <div className="text-xs">ink-gray-5</div>
              </div>
              <div className="w-28 h-16 p-2 flex flex-col justify-between rounded border border-outline-gray-1">
                <div className="text-ink-gray-9 p-1 rounded">Text</div>
                <div className="text-xs">ink-gray-9</div>
              </div>
              <div className="w-28 h-16 p-2 flex flex-col justify-between rounded border border-outline-gray-1">
                <div className="text-ink-red-3 p-1 rounded">Text</div>
                <div className="text-xs">ink-red-3</div>
              </div>
              <div className="w-28 h-16 p-2 flex flex-col justify-between rounded border border-outline-gray-1">
                <div className="text-ink-green-3 p-1 rounded">Text</div>
                <div className="text-xs">ink-green-3</div>
              </div>
              <div className="w-28 h-16 p-2 flex flex-col justify-between rounded border border-outline-gray-1">
                <div className="text-ink-blue-2 p-1 rounded">Text</div>
                <div className="text-xs">ink-blue-2</div>
              </div>
              <div className="w-28 h-16 p-2 flex flex-col justify-between rounded border border-outline-gray-1">
                <div className="text-ink-blue-link p-1 rounded">Link</div>
                <div className="text-xs">ink-blue-link</div>
              </div>
            </div>
          </div>

          {/* Background Colors (Surface) */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-3">
              Background Colors (Surface)
            </h3>
            <div className="flex flex-wrap gap-3">
              <div className="w-28 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                <div className="flex-1 bg-surface-white"></div>
                <div className="p-1 text-center text-xs">surface-white</div>
              </div>
              <div className="w-28 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                <div className="flex-1 bg-surface-gray-1"></div>
                <div className="p-1 text-center text-xs">surface-gray-1</div>
              </div>
              <div className="w-28 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                <div className="flex-1 bg-surface-gray-3"></div>
                <div className="p-1 text-center text-xs">surface-gray-3</div>
              </div>
              <div className="w-28 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                <div className="flex-1 bg-surface-blue-1"></div>
                <div className="p-1 text-center text-xs">surface-blue-1</div>
              </div>
              <div className="w-28 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                <div className="flex-1 bg-surface-red-1"></div>
                <div className="p-1 text-center text-xs">surface-red-1</div>
              </div>
              <div className="w-28 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                <div className="flex-1 bg-surface-green-1"></div>
                <div className="p-1 text-center text-xs">surface-green-1</div>
              </div>
              <div className="w-28 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                <div className="flex-1 bg-surface-cards"></div>
                <div className="p-1 text-center text-xs">surface-cards</div>
              </div>
              <div className="w-28 h-16 flex flex-col rounded overflow-hidden border border-outline-gray-1">
                <div className="flex-1 bg-surface-modal"></div>
                <div className="p-1 text-center text-xs">surface-modal</div>
              </div>
            </div>
          </div>

          {/* Border Colors (Outline) */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-3">
              Border Colors (Outline)
            </h3>
            <div className="flex flex-wrap gap-2">
              <div className="w-28 h-16 flex items-center justify-center rounded border-2 border-outline-gray-1">
                <div className="text-center">
                  <div className="text-xs">outline-gray-1</div>
                </div>
              </div>
              <div className="w-28 h-16 flex items-center justify-center rounded border-2 border-outline-gray-3">
                <div className="text-center">
                  <div className="text-xs">outline-gray-3</div>
                </div>
              </div>
              <div className="w-28 h-16 flex items-center justify-center rounded border-2 border-outline-red-2">
                <div className="text-center">
                  <div className="text-xs">outline-red-2</div>
                </div>
              </div>
              <div className="w-28 h-16 flex items-center justify-center rounded border-2 border-outline-green-2">
                <div className="text-center">
                  <div className="text-xs">outline-green-2</div>
                </div>
              </div>
              <div className="w-28 h-16 flex items-center justify-center rounded border-2 border-outline-blue-1">
                <div className="text-center">
                  <div className="text-xs">outline-blue-1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Typography</h2>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Font Sizes</h3>
          <div className="flex flex-col gap-3">
            <p className="text-2xs">Text 2XS (2xs)</p>
            <p className="text-xs">Text Extra Small (xs)</p>
            <p className="text-sm">Text Small (sm)</p>
            <p className="text-base">Text Base (base)</p>
            <p className="text-lg">Text Large (lg)</p>
            <p className="text-xl">Text Extra Large (xl)</p>
            <p className="text-2xl">Text 2XL (2xl)</p>
            <p className="text-3xl">Text 3XL (3xl)</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Font Weights</h3>
          <div className="flex flex-col gap-3">
            <p className="font-thin">Font Thin (100)</p>
            <p className="font-extralight">Font Extra Light (200)</p>
            <p className="font-light">Font Light (300)</p>
            <p className="font-normal">Font Normal (400)</p>
            <p className="font-medium">Font Medium (500)</p>
            <p className="font-semibold">Font Semibold (600)</p>
            <p className="font-bold">Font Bold (700)</p>
            <p className="font-extrabold">Font Extra Bold (800)</p>
            <p className="font-black">Font Black (900)</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Paragraph Sizes</h3>
          <div className="flex flex-col gap-4">
            <p className="text-p-2xs">
              Text P-2XS: Reddit Sans is designed to look great in small sizes
              while maintaining readability.
            </p>
            <p className="text-p-xs">
              Text P-XS: Reddit Sans is designed for optimal legibility on
              screens across different devices.
            </p>
            <p className="text-p-sm">
              Text P-SM: Reddit Sans is a versatile font that works well for UI
              elements and short texts.
            </p>
            <p className="text-p-base">
              Text P-Base: Reddit Sans is the default font used across the
              application for better consistency.
            </p>
            <p className="text-p-lg">
              Text P-LG: Reddit Sans is great for emphasis and headers within
              content areas.
            </p>
            <p className="text-p-xl">
              Text P-XL: Reddit Sans maintains clarity at larger sizes.
            </p>
            <p className="text-p-2xl">
              Text P-2XL: Reddit Sans works well for headings.
            </p>
          </div>
        </div>
      </section>

      {/* Border Radius Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Border Radius</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-blue-300 w-20 h-20 border border-blue-500 rounded-none"></div>
            <span className="text-sm mt-2">rounded-none</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-300 w-20 h-20 border border-blue-500 rounded-sm"></div>
            <span className="text-sm mt-2">rounded-sm</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-300 w-20 h-20 border border-blue-500 rounded"></div>
            <span className="text-sm mt-2">rounded</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-300 w-20 h-20 border border-blue-500 rounded-md"></div>
            <span className="text-sm mt-2">rounded-md</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-300 w-20 h-20 border border-blue-500 rounded-lg"></div>
            <span className="text-sm mt-2">rounded-lg</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-300 w-20 h-20 border border-blue-500 rounded-xl"></div>
            <span className="text-sm mt-2">rounded-xl</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-300 w-20 h-20 border border-blue-500 rounded-2xl"></div>
            <span className="text-sm mt-2">rounded-2xl</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-300 w-20 h-20 border border-blue-500 rounded-full"></div>
            <span className="text-sm mt-2">rounded-full</span>
          </div>
        </div>
      </section>

      {/* Shadows Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Shadows</h2>
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col items-center">
            <div className="bg-white w-24 h-24 shadow-sm flex items-center justify-center">
              <span className="text-xs">Content</span>
            </div>
            <span className="text-sm mt-2">shadow-sm</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white w-24 h-24 shadow flex items-center justify-center">
              <span className="text-xs">Content</span>
            </div>
            <span className="text-sm mt-2">shadow</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white w-24 h-24 shadow-md flex items-center justify-center">
              <span className="text-xs">Content</span>
            </div>
            <span className="text-sm mt-2">shadow-md</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white w-24 h-24 shadow-lg flex items-center justify-center">
              <span className="text-xs">Content</span>
            </div>
            <span className="text-sm mt-2">shadow-lg</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white w-24 h-24 shadow-xl flex items-center justify-center">
              <span className="text-xs">Content</span>
            </div>
            <span className="text-sm mt-2">shadow-xl</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white w-24 h-24 shadow-2xl flex items-center justify-center">
              <span className="text-xs">Content</span>
            </div>
            <span className="text-sm mt-2">shadow-2xl</span>
          </div>
        </div>
      </section>

      {/* Spacing Section */}
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
