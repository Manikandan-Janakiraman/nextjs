"use client"
import Image from 'next/image'



export default function blog() {

   


    return (
        <>

            <div className='flex flex-col justify-center text-center mt-20 -mb-15'>
                <h1 className='text-center font-bold text-4xl mb-2'>Our Blog</h1>
                <p>We provide the list of blogs based category</p>
            </div>

            <div className="flex flex-row p-30 gap-5 justify-around">

                <div className="bg-blue-200 bg-border-1 w-100 h-95 text-black flex flex-col gap-2 p-3 rounded-xl">
                    <Image src="/images.jpg" alt="Picture of the author" width={600} height={600}
                    />
                    <h1 className="font-bold">Welcome to the Next Js World</h1>
                    <p>Next Js is the server side rendering javascript.
                        Create backend APIs and inside the same project.
                    </p>
                    <button className="bg-red-500 text-white text-center p-2 rounded w-30">Read More</button>
                </div>

                <div className="bg-blue-200 w-100 h-95 text-black flex flex-col gap-2 p-3 rounded-xl">
                    <Image src="/images.jpg" alt="Picture of the author" width={600} height={600}
                    />
                    <h1 className="font-bold">Welcome to the Next Js World</h1>
                    <p>Next Js is the server side rendering javascript.
                        Create backend APIs inside the same project.
                    </p>
                    <button className="bg-red-500 text-white text-center p-2 rounded w-30">Read More</button>
                </div>

                <div className="bg-blue-200 w-100 h-95 text-black flex flex-col gap-2 p-3 rounded-xl">
                    <Image src="/images.jpg" alt="Picture of the author" width={600} height={600}
                    />
                    <h1 className="font-bold">Welcome to the Next Js World</h1>
                    <p>Next Js is the server side rendering javascript.
                        Create backend APIs inside the same project.
                    </p>
                    <button className="bg-red-500 text-white text-center p-2 rounded w-30">Read More</button>
                </div>

                <div className="bg-blue-200 w-100 h-95 text-black flex flex-col gap-2 p-3 rounded-xl">
                    <Image src="/images.jpg" alt="Picture of the author" width={600} height={600}
                    />
                    <h1 className="font-bold">Welcome to the Next Js World</h1>
                    <p>Next Js is the server side rendering javascript.
                        Create backend APIs inside the same project.
                    </p>
                    <button className="bg-red-500 text-white text-center p-2 rounded w-30">Read More</button>
                </div>


            </div>


            <div className="flex flex-row p-30 -mt-55 gap-5 justify-around">

                <div className="bg-blue-200 w-100 h-95 text-black flex flex-col gap-2 p-3 rounded-xl">
                    <Image src="/images.jpg" alt="Picture of the author" width={600} height={600}
                    />
                    <h1 className="font-bold">Welcome to the Next Js World</h1>
                    <p>Next Js is the server side rendering javascript.
                        Create backend APIs inside the same project.
                    </p>
                    <button className="bg-red-500 text-white text-center p-2 rounded w-30">Read More</button>
                </div>

                <div className="bg-blue-200 w-100 h-95 text-black flex flex-col gap-2 p-3 rounded-xl">
                    <Image src="/images.jpg" alt="Picture of the author" width={600} height={600}
                    />
                    <h1 className="font-bold">Welcome to the Next Js World</h1>
                    <p>Next Js is the server side rendering javascript.
                        Create backend APIs inside the same project.
                    </p>
                    <button className="bg-red-500 text-white text-center p-2 rounded w-30">Read More</button>
                </div>

                <div className="bg-blue-200 w-100 h-95 text-black flex flex-col gap-2 p-3 rounded-xl">
                    <Image src="/images.jpg" alt="Picture of the author" width={600} height={600}
                    />
                    <h1 className="font-bold">Welcome to the Next Js World</h1>
                    <p>Next Js is the server side rendering javascript.
                        
                    </p>
                    <button className="bg-red-500 text-white text-center p-2 rounded w-30">Read More</button>
                </div>

                <div className="bg-blue-200 w-100 h-95 text-black flex flex-col gap-2 p-3 rounded-xl">
                    <Image src="/images.jpg" alt="Picture of the author" width={600} height={600}
                    />
                    <h1 className="font-bold">Welcome to the Next Js World</h1>
                    <p>Next Js is the server side rendering javascript.
                        Create backend APIs inside the same project.
                    </p>
                    <button className="bg-red-500 text-white text-center p-2 rounded w-30">Read More</button>
                </div>


            </div>



        </>
    )
}