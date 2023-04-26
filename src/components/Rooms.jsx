// import React from 'react'

const Rooms = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[15%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
        <div className="lg:top-20 relative lg:col-span-1 col-span-2">
            <h3 className="text-2xl font-bold">Find Interior Rooms</h3>
            <p className="pt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum perspiciatis voluptatum ipsam alias ut aliquam!</p>
        </div>
        <div className="grid grid-cols-2 col-span-2 gap-2">
            <img className="object-cover w-full h-full" src="https://media.istockphoto.com/id/488468230/photo/ocean-house.jpg?b=1&s=170667a&w=0&k=20&c=2p0DrnevbX6JqtUkMlRdv3wuu1lArNpu9JXnXGYmVn4=" alt="/" />
            <img className=" row-span-2 object-cover w-full h-full" src="https://media.istockphoto.com/id/160134976/photo/hotel-room-and-beach-landscape.jpg?b=1&s=170667a&w=0&k=20&c=nJfMIMHSBBWA2QyxmD33ZHYbpzDrfEC50iSqy-tLvXk=" alt="/" />
            <img className="object-cover w-full h-full" src="https://media.istockphoto.com/id/137212753/photo/luxury-vacation-suite-with-a-sunny-water-view.jpg?b=1&s=170667a&w=0&k=20&c=C2NYkPd9J79dmaPfPBkevLPzZ1kFh4ypAeFjUVEBPvI=" alt="/" />
        </div>
    </div>
  )
}

export default Rooms