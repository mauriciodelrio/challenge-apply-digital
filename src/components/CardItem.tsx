import Image from 'next/image'
import { useAddToCartHook } from '@/hooks';
interface Props {
    genre: string;
    image: string;
    name: string;
    price: number;
    isNew?: boolean;
    description?: string;
}

export const CardItem = (props: Props) => {

    const { genre, image, name, price, isNew } = props;
    const { manageLocalStorage, addedToCart } = useAddToCartHook(props);

    return (
        <div className='relative flex flex-col p-6 gap-2 bg-white rounded-lg border border-0.5 md:w-card md:h-card w-m-card h-m-card'>
            <div className='rounded-t-lg'>
                {
                    isNew && <div className='absolute text-sm bg-stone-100 rounded-lg text-primary top-8 py-2 px-3 left-8 w-fit z-10'>New</div>
                }
                <div className='md:w-[332px] w-[279px] h-[240px] relative'>
                    <Image src={image} layout='fill' objectFit='cover' className='rounded-t-lg md:max-w-[332px] max-w-[279px] max-h-[240px]' alt="img-product" />
                </div>
            </div>
            <div className='text-neutral-500 font-bold'>{ genre }</div>
            <div className='flex justify-between items-center gap-8'>
                <div className='text-lg font-bold text-item-fill truncate md:max-w-[230px] max-w-[150px]'>{ name }</div>
                <div className='text-lg font-bold text-item-fill'>$ { price } </div>
            </div>
            <div className='flex justify-between items-center'>
                <button className={`px-6 py-4 rounded-lg w-full h-14 border rounded-lg border-cta-stroke-primary text-cta-stroke-secondary font-bold ${addedToCart && 'text-white bg-green-800'}`} onClick={manageLocalStorage}>
                    {
                        addedToCart ? 'Added to cart' : 'Add to cart'
                    }
                    </button>
            </div>
        </div>
    )
}
