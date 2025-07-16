import React from 'react';
import { getColor, getRadius, getShadow } from '../theme';
import type { ColorName, BorderRadiusKey, ShadowKey } from '../theme/themeTypes';

interface ThemeDemoProps {
  title?: string;
}

/**
 * Component demonstrating the use of the theme in React components
 */
export const ThemeDemo: React.FC<ThemeDemoProps> = ({ 
  title = 'Theme Demo',
}) => {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      
      {/* Color palette demo */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-3">Color Palette</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(['primary', 'secondary', 'success', 'error', 'warning', 'info', 'gray'] as ColorName[]).map((colorName) => (
            <div key={colorName} className="space-y-2">
              <h4 className="capitalize">{colorName}</h4>
              <div className="space-y-1">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                  <div 
                    key={`${colorName}-${shade}`}
                    className="h-8 rounded"
                    style={{ 
                      backgroundColor: getColor(colorName, shade),
                      boxShadow: getShadow('sm'),
                      borderRadius: getRadius('sm')
                    }}
                  >
                    <div className="px-2 py-1 text-xs text-white mix-blend-difference">
                      {shade}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Border radius demo */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-3">Border Radius</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(['none', 'sm', 'DEFAULT', 'md', 'lg', 'xl', '2xl', '3xl', 'full'] as BorderRadiusKey[]).map((radius) => (
            <div key={radius} className="text-center">
              <div 
                className="h-16 w-16 mx-auto mb-2"
                style={{ 
                  backgroundColor: getColor('primary', 500),
                  borderRadius: getRadius(radius)
                }}
              ></div>
              <div className="text-sm">{radius}</div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Shadow demo */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-3">Shadows</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {(['sm', 'DEFAULT', 'md', 'lg', 'xl', '2xl', 'inner', 'none'] as ShadowKey[]).map((shadow) => (
            <div key={shadow} className="text-center">
              <div 
                className="h-16 w-full bg-white mx-auto mb-2"
                style={{ 
                  boxShadow: getShadow(shadow),
                  borderRadius: getRadius('md')
                }}
              ></div>
              <div className="text-sm">{shadow}</div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Button showcase using theme */}
      <section>
        <h3 className="text-lg font-semibold mb-3">Theme-based Buttons</h3>
        <div className="flex flex-wrap gap-3">
          {(['primary', 'secondary', 'success', 'error', 'warning', 'info'] as ColorName[]).map((color) => (
            <button
              key={color}
              style={{
                backgroundColor: getColor(color, 600),
                color: '#fff',
                borderRadius: getRadius('md'),
                boxShadow: getShadow('md'),
                transition: 'all 150ms ease-in-out',
              }}
              className="px-4 py-2 hover:opacity-90 active:opacity-100"
            >
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ThemeDemo;
