"use client";

import React, { useState, useMemo } from 'react';
import GalleryGrid from '@/components/ui/GalleryGrid';

interface GalleryItem {
  imageUrl: string;
  title: string;
  category: string;
  projectUrl?: string;
}

interface GalleryClientProps {
  items: GalleryItem[];
}

const GalleryClient: React.FC<GalleryClientProps> = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Extract unique categories from items
  const categories = useMemo(() => {
    const uniqueCategories = new Set(items.map(item => item.category));
    return ["All", ...Array.from(uniqueCategories)];
  }, [items]);

  // Filter items based on selected category
  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") {
      return items;
    }
    return items.filter(item => item.category === selectedCategory);
  }, [items, selectedCategory]);

  return (
    <>
      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-brand-offWhite">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-brand-accent text-brand-white'
                    : 'bg-brand-white text-brand-secondary hover:bg-brand-accent hover:text-brand-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {filteredItems.length > 0 ? (
            <GalleryGrid items={filteredItems} columns={3} />
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-brand-secondary">
                No items found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default GalleryClient;
