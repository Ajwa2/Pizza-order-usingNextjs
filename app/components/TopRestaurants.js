import Image from "next/image";
import profiles from '../assets/pp.png'
import battery from '../assets/battery.png'
import mask from '../assets/Mask group.png'

const cards =[
    {
        profile:{profiles},
        user_name: 'Azmera Pizza',
        content:'In publishing and graphic design, sslorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document the visual form of a document or a typeface without.',
        numberOfOrders:'2K'
    },
    {
        profile:{profiles},
        user_name: 'Azmera Pizza',
        content:'In publishing and graphic design, sslorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document the visual form of a document or a typeface without.',
        numberOfOrders:'2K'
    },
    {
        profile:{profiles},
        user_name: 'Azmera Pizza',
        content:'In publishing and graphic design, sslorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document the visual form of a document or a typeface without.',
        numberOfOrders:'2K'
    },
    {
        profile:{profiles},
        user_name: 'Azmera Pizza',
        content:'In publishing and graphic design, sslorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document the visual form of a document or a typeface without.',
        numberOfOrders:'2K'
    },
    {
        profile:{profiles},
        user_name: 'Azmera Pizza',
        content:'In publishing and graphic design, sslorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document the visual form of a document or a typeface without.',
        numberOfOrders:'2K'
    },
]

export default function TopRestaurants() {
    return (
        <div className="my-36 px-5 bg-gradient-to-b from-orange-100 via-orange-200 to-orange-100">
            <div>
                <p className='text-gray-400 font-semibold text-3xl'>Top Restaurants</p>
            </div>
            
            <div className="overflow-x-auto py-4 scrollbar-hide">
                <div className="flex space-x-3">
                    {cards.map((card,index)=>(
                    <div key={index} className="flex bg-white min-w-96 rounded-lg p-4 text-xs">
                        <div className="gap-3">
                            <div className="flex gap-3 pb-1">
                                <Image src={profiles} alt="profile" width={30} quality={100} className="rounded-2xl w-9 h-9"/>
                                <h3 className="font-bold pt-2">{card.user_name}</h3>
                            </div>
                            <p>{card.content.slice(0,50)}</p>
                        </div>
        
                        <div className="bg-topColor flex gap-2 w-3/5 p-2 rounded-lg">
                            <Image src={mask} alt="orders" width={10} quality={100} className="bg-orange-200 w-12 h-12 rounded-3xl "/>
                            <div className="">
                                <p style={{fontSize:9}}>Number Of Order</p>
                                <p className="text-primary font-bold text-2xl">{card.numberOfOrders}</p>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            
        </div>
    )
}