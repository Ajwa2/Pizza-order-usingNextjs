import Image from 'next/image'
import photoPizza from '../assets/images/img-5.jpeg'
import Navbar from '../components/Navbar'

export default function OrderPage() {
    const temps = [
        {
            photo:{photoPizza},
            pizza_name:'Margherita',
            content:'Tomato, Mozzarella, Bell Peppers, Onions, Olives.',
            price:'150',
            status:'Ordered'
        },
        {
            photo:{photoPizza},
            pizza_name:'Margherita',
            content:'Tomato, Mozzarella, Bell Peppers, Onions, Olives.',
            price:'100',
            status:'Received'
        },
        {
            photo:{photoPizza},
            pizza_name:'Margherita',
            content:'Tomato, Mozzarella, Bell Peppers, Onions, Olives.',
            price:'250',
            status:'Received'
        },
        {
            photo:{photoPizza},
            pizza_name:'Margherita',
            content:'Tomato, Mozzarella, Bell Peppers, Onions, Olives.',
            price:'190',
            status:'Received'
        },
        {
            photo:{photoPizza},
            pizza_name:'Margherita',
            content:'Tomato, Mozzarella, Bell Peppers, Onions, Olives.',
            price:'200',
            status:'Ordered'
        },
        {
            photo:{photoPizza},
            pizza_name:'Margherita',
            content:'Tomato, Mozzarella, Bell Peppers, Onions, Olives.',
            price:'150',
            status:'Received'
        },
    ]

    return (
        <>
            <Navbar/>
            <div className='my-32 px-10'>
                <div className='pb-4'>
                    <p className='text-gray-400 font-semibold text-3xl'>Order History</p>
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
                                    <p className= {`font-semibold text-xl ${temp.status === 'Received'? 'text-green-400' : 'text-primary' }`}>{temp.status}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
        
    )
}
