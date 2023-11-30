'use client';

import {useEffect, useState} from "react";

const images = [
    {
        original: "/images/banners/1.jpg",
        thumbnail: "/images/banners/1.jpg",
    },
    {
        original: "/images/banners/2.jpg",
        thumbnail: "/images/banners/2.jpg",
    },
    {
        original: "/images/banners/3.jpg",
        thumbnail: "/images/banners/3.jpg",
    },
    {
        original: "/images/banners/4.jpg",
        thumbnail: "/images/banners/4.jpg",
    },
    {
        original: "/images/banners/5.jpg",
        thumbnail: "/images/banners/6.jpg",
    },
];

export default function ListBanner() {
    const [selectedImage, setSelectedImage] = useState<string>(images[0].original);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        interval = setInterval(() => {
            const currentIndex = images.findIndex((item) => item.original === selectedImage);
            const nextIndex = (currentIndex + 1) % images.length;
            setSelectedImage(images[nextIndex].original);
        }, 3700);

        return () => clearInterval(interval);
    }, [images, selectedImage]);

    const changeImage = (imageSrc: string) => {
        setSelectedImage(imageSrc);
    };

    return (
        <div className='w-full flex flex-col justify-center items-center relative'>
            <img src={selectedImage} alt="Main Image" className='rounded w-full h-[430px] object-cover object-center'/>
            <div className="absolute bottom-0 flex max-w-lg px-2 sm:max-w-2xl xl:max-w-4xl flex-row items-center justify-center flex-wrap gap-2 sm:gap-4">
                    {images.map((image, index) => (
                        <span
                            key={index}           
                            className={`${selectedImage === image.original ? 'opacity-100' : 'opacity-30'} cursor-pointer h-[40px] xl:h-[50px] object-center object-cover rounded`}
                            onClick={() => changeImage(image.original)}
                        >⚪</span>
                    ))}
            </div>
        </div>
    )
}