import Image from 'next/image'
export default function setting() {

    return (
        <>



            <div className="flex flex-row p-30 gap-5 justify-around min-h-screen">

                <div className="w-200 h-125 text-black flex flex-col gap-2 p-3 rounded-xl">

                    <h1 className="font-bold text-5xl">Setting</h1>
                    <p>
                        Our platform is built to bring the warmth and authenticity of home-cooked food to people’s everyday lives. In a fast-paced world where time is limited, we aim to provide meals that feel just like they are made at home—fresh, comforting, and full of care. We believe food is not just about eating, but about experience, health, and connection.
                    </p>
                    <p>
                        We connect users with talented home chefs who are passionate about cooking and sharing their unique recipes. From traditional meals to modern healthy options, our platform offers a wide variety of dishes that cater to different tastes and lifestyles. Whether it’s a simple lunch, a special dinner, or a fitness-focused meal plan, we make it easy to find the right food.

                    </p>
                    <p>
                        Quality and hygiene are at the core of everything we do. We ensure that every meal prepared by our chefs follows proper safety standards and maintains consistent taste and freshness. Our goal is to build trust with every order, so customers can enjoy their food without any concerns.

                    </p>
                    <p>
                        In addition to serving customers, we are also dedicated to empowering home chefs and creating opportunities for them to grow. By providing a platform to showcase their skills, we help them turn their passion into a reliable source of income, while reaching a wider audience in their local community.
                    </p>

                    <p>
                        Our mission is to redefine food delivery by focusing on health, authenticity, and convenience. We strive to create a community where people can enjoy homemade food every day, support local talent, and experience the joy of meals that truly feel like home.
                    </p>

                </div>

                <div className="w-200 h-95 text-black flex flex-col gap-2">
                    <Image src="/images.jpg" alt="Picture of the author" width={800} height={800} className='rounded-2xl'
                    />

                </div>

            </div >


        </>
    )
}