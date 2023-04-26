// import React from 'react'

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
        {/* left side */}
        <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
            <img className=" row-span-3 object-cover w-full h-full p-2" src="https://media.istockphoto.com/id/840269698/photo/beautiful-summer-tropical-beach-landscape-wooden-pier-turquoise-sea-water.jpg?b=1&s=170667a&w=0&k=20&c=7_bM4KB4CqvC85wYagIYYIBfyE9JsXk5Qp2pWKSC-oo=" alt="/" />
            <img className="row-span-2 object-cover w-full h-full p-2" src="https://media.istockphoto.com/id/153097375/photo/hammock-and-sunset.jpg?b=1&s=170667a&w=0&k=20&c=oQKI2RQfCyCmjn5Kg-cqzyo6u2nWzdF9lh_I1hLnCaM=" alt="/" />
            <img className="row-span-2 object-cover w-full h-full p-2" src="https://media.istockphoto.com/id/1453462927/photo/maldives-hotel-beach-resort-on-tropical-island-with-aerial-drone-view.jpg?b=1&s=170667a&w=0&k=20&c=xh0HJ_kx-DBhwy-4Q8wIqvHrfzelreFxhgsLmCNSb6k=" alt="/" />
            <img className="row-span-3 object-cover w-full h-full p-2" src="https://media.istockphoto.com/id/1031317238/photo/jetty-in-maldives-herathera-island-addu-atoll-maldives.jpg?b=1&s=170667a&w=0&k=20&c=NkV4GaocsSVJaQ5GVQDP-TQD7QvCNgI1yNuKwNjncUQ=" alt="/" />
            <img className="row-span-2 object-cover w-full h-full p-2" src="https://media.istockphoto.com/id/1054955966/photo/young-adult-woman-moving-down-to-the-sea.jpg?b=1&s=170667a&w=0&k=20&c=xWNBnwvHAdn7bBx8qwg_QhyNwtmrj4jNrdOiu6aWaQg=" alt="/" />
        </div>
        {/* right side */}
        <div className="flex flex-col h-full justify-center">
            <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
            <p className="text-2xl py-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, sint!</p>
            <p className="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minus in dicta quas distinctio officiis necessitatibus culpa harum dolore repellendus!</p>
            <div className="">
                <button className="border-black mr-4 hover:shadow-xl">Learn More</button>
                <button className="bg-black text-white border-black hover:shadow-xl" >Book Your Trip</button>
            </div>
        </div>
    </div>
  )
}

export default Plan