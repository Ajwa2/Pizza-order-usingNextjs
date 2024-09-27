import Image from 'next/image'
import photoPizza from '../assets/images/img-5.jpeg'
import profiles from '../assets/pp.png'

export default function PopularPizzas() {
    const temps = [
        {
            photo:{photoPizza},
            pizza_name:'Margherita',
            content:'Tomato, Mozzarella, Bell Peppers, Onions, Olives.',
            price:'150',
            profile:{profiles},
            user_name:'Azmera Pizza'
        },
        {
            photo:{photoPizza},
            pizza_name:'Margherita',
            content:'Tomato, Mozzarella, Bell Peppers, Onions, Olives.',
            price:'150',
            profile:{profiles},
            user_name:'Azmera Pizza'
        },
        {
            photo:{photoPizza},
            pizza_name:'Margherita',
            content:'Tomato, Mozzarella, Bell Peppers, Onions, Olives.',
            price:'150',
            profile:{profiles},
            user_name:'Azmera Pizza'
        },
        {
            photo:{photoPizza},
            pizza_name:'Margherita',
            content:'Tomato, Mozzarella, Bell Peppers, Onions, Olives.',
            price:'150',
            profile:{profiles},
            user_name:'Azmera Pizza'
        },
        {
            photo:{photoPizza},
            pizza_name:'Margherita',
            content:'Tomato, Mozzarella, Bell Peppers, Onions, Olives.',
            price:'150',
            profile:{profiles},
            user_name:'Azmera Pizza'
        },
        {
            photo:{photoPizza},
            pizza_name:'Margherita',
            content:'Tomato, Mozzarella, Bell Peppers, Onions, Olives.',
            price:'150',
            profile:{profiles},
            user_name:'Azmera Pizza'
        },
    ]

    return (
        <div className='my-32 px-10'>
            <div className='pb-4'>
                <p className='text-gray-400 font-semibold text-3xl'>Popular Pizzas</p>
            </div>

            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {temps.map((temp, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-4 flex flex-col">
                            <div className="flex justify-center items-center mb-2">
                                <Image src={photoPizza} alt="profile" width={200} height={200} className="rounded-full" />
                            </div>
                            <h3 className="font-bold ">{temp.user_name}</h3>
                            <p className="flex-grow">{temp.content.slice(0, 50)}...</p>
                            <div className="flex justify-between mt-1">
                                <p className='text-green-500 text-2xl font-semibold'>{temp.price}<sup className='text-gray-800 text-xs'>Birr</sup></p>
                                <button className="btn bg-primary text-white font-semibold text-xl py-1 px-6 rounded-lg">Order</button>
                            </div>
                            <div className='h-0.5 bg-gray-300 my-3'></div>
                            <div className="flex justify-between pb-1">
                                <Image src={profiles} alt="profile" width={30} quality={100} className="rounded-2xl w-9 h-9"/>
                                <h3 className="font-bold pt-2">{temp.user_name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
