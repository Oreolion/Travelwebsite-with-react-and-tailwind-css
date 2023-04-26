// import React from 'react'
import {BsChevronCompactLeft,  BsChevronCompactRight } from "react-icons/bs"
import {RxDotFilled} from "react-icons/rx"
import { useState } from "react";






const ImageSlider = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const slides = [
       {
        url:"https://media.istockphoto.com/id/686475482/photo/delicious-fresh-cooked-and-grilled-lobster.jpg?s=612x612&w=0&k=20&c=nk0ItKyMp5GiOvMFMrGaugyhpsr11I8z82fkRQg_BCs=" ,
        title: "Lobster",
       } ,
       {
        url:"https://media.istockphoto.com/id/1053854120/photo/sushi-set-at-japanese-restaurant.jpg?s=612x612&w=0&k=20&c=quEA9v6uMkudELVsJYGJGrDPkuh0gaTQQkrLAwum_ZI=" ,
        title: "Sushi",
       } ,
       {
        url:"https://media.istockphoto.com/id/637214478/photo/pasta-plate.jpg?s=612x612&w=0&k=20&c=oebCQG_Zfv2zJpobSzpF6JFNdsBQUjG6MdQh-En5l3c=",
        title: "Pasta",
       } ,
       {
        url:"https://media.istockphoto.com/id/1214416414/photo/barbecued-salmon-fried-potatoes-and-vegetables-on-wooden-background.jpg?s=612x612&w=0&k=20&c=Y8RYbZFcvec-FXMMuoU-qkprC3TUFNiw3Ysoe8Drn6g=",
        title: "Salmon",
       } ,
    ];


    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)

    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    

  return (
    <div className="max-w-[1000px] h-[480px] w-full m-auto py-16 px-4 relative group">
        <div style= {{ backgroundImage: `url(${slides[currentIndex].url})` }}className="w-full h-full rounded-2xl bg-center bg-cover duration-500">

        </div>
        {/* left arrow */}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div >
        {/* right arrow */}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>
        <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) =>  (
               <div className="text-2xl cursor-pointer" key={slideIndex} onClick={()=>{goToSlide(slideIndex)}}>
                    <RxDotFilled/>
               </div> 
            ))}
        </div>
        <div></div>
    </div>
  )
}

export default ImageSlider