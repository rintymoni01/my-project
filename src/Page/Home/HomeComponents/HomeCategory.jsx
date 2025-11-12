import { Link } from "react-router-dom";
import useData from "../../../Hooks/useData";

const HomeCategory = () => {
    const { categories } = useData();

    return (
        <div className="mb-10">
            <div className='container mx-auto px-4 sm:px-6 lg:px-18'>
                <div className='flex lg:justify-center gap-4 sm:gap-6 lg:gap-8 overflow-x-auto lg:overflow-x-visible scrollbar-hide py-2'>
                    {categories.map((category, index) => (
                        <Link to="/shop" key={index}>
                            <div className='flex flex-col items-center flex-shrink-0 hover:scale-110 duration-500 transition-all bg-gray-100 rounded-md px-4 sm:px-6 py-3 sm:py-4 mx-auto w-24 sm:w-28 lg:w-32'>
                                <img className='w-12 h-12 sm:w-16 sm:h-14 mb-2 sm:mb-3' src={category.image} alt={category.name} />
                                <p className='text-gray-600 text-sm sm:text-base'>{category.name}</p>
                                <p className='text-xs text-gray-500'>{category.items}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeCategory;
