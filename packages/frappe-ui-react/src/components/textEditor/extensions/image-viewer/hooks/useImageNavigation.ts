import { useState, useEffect } from "react";

interface UseImageNavigationOptions {
  initialIndex: number;
  imageCount: number;
  onNavigate?: () => void;
}

export const useImageNavigation = ({
  initialIndex,
  imageCount,
  onNavigate,
}: UseImageNavigationOptions) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    onNavigate?.();
  }, [initialIndex, onNavigate]);

  const nextImage = () => {
    if (imageCount > 0) {
      setCurrentIndex((prev) => (prev + 1) % imageCount);
      onNavigate?.();
    }
  };

  const previousImage = () => {
    if (imageCount > 0) {
      setCurrentIndex((prev) => (prev - 1 + imageCount) % imageCount);
      onNavigate?.();
    }
  };

  return {
    currentIndex,
    nextImage,
    previousImage,
  };
};
