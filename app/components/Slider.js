"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';
import img1 from '../assets/images/img-1.jpeg'
import img2 from '../assets/images/img-2.jpeg'
import img3 from '../assets/images/img-3.jpeg'
import heroImg from '../assets/images/img-hero.png'


const cards = [
    {
        title: 'Make Your First Order and Get',
        price: '50% off',
        content: 'In publishing and graphic designs, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document the visual form of a document or a typeface without.',
        image: {img1},
        background:'bg-slideOne'
    },
    {
        title: 'Make Your First Order and Get',
        price: '50% off',
        content: 'In publishing and graphic design, sslorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document the visual form of a document or a typeface without.',
        image: {img2},
        background:'bg-slideTwo'
    },
    {
        title: 'Make Your First Order and Get',
        price: '50% off',
        content: 'In publishings and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document the visual form of a document or a typeface without.',
        image: {img3},
        background:'bg-slideThree'
    },
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }, 2000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const handleIndicatorClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full mx-auto px-20 my-12">
            <div className='mb-4'>
                <p className='text-gray-600 font-semibold text-4xl'>Featured pizza</p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {cards.map((card, index) => (
                        <div key={index} className="min-w-full">
                            <div className={`flex ${cards[currentIndex].background}`}>
                                <div className="p-4 py-5 rounded-b-lg text-white" >
                                    <h2 className="text-3xl font-bold">{card.title}</h2>
                                    <div className="text-primary text-2xl">{card.price}</div>
                                    <div className="mt-2">{card.content}</div>
                                    <button className='btn bg-primary text-white font-semibold py-3 px-10 mt-5 rounded-lg'>Order Now</button>
                                </div>
                                <Image src={heroImg} width={200} alt="image" className="w-full h-52 object-cover rounded-lg" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-4">
                {cards.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2 mx-1 rounded-full transition-all duration-300 ${
                            currentIndex === index ? 'bg-primary' : 'bg-gray-400'
                        }`}
                        onClick={() => handleIndicatorClick(index)}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;