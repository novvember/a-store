import { Gallery as GalleryComponent } from '@alfalab/core-components/gallery';
import { useMemo, useState } from 'react';
import './Gallery.css';

type GalleryProps = {
  images: string[];
  title: string;
};

function Gallery({ images, title }: GalleryProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  const openGallery = (slideIndex: number) => {
    setInitialSlide(slideIndex);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setInitialSlide(0);
    setIsGalleryOpen(false);
  };

  const galleryImages = useMemo(
    () =>
      images.map((src) => {
        return {
          name: title,
          src,
          canDownload: false,
        };
      }),
    [images, title],
  );

  return (
    <>
      <div className="gallery">
        {images.map((src, index) => (
          <img
            src={src}
            alt="Вид товара"
            className="gallery__image"
            onClick={() => openGallery(index)}
            key={src}
          />
        ))}
      </div>

      <GalleryComponent
        open={isGalleryOpen}
        onClose={closeGallery}
        images={galleryImages}
        initialSlide={initialSlide}
        loop={true}
      />
    </>
  );
}

export default Gallery;
