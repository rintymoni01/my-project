import useData from "../../../Hooks/useData";


const HomeCategory = () => {
    const {categories}= useData()
    return (
        <div >
             <div className='container mx-auto px-18'>
                <div className='flex justify-center gap-8'>
                    {categories.map(category=>(
                        <div className='flex-col flex bg-gray-100  rounded-md px-15 py-4 items-center   mx-auto '>
                            <img className='w-16 h-14 mb-3' src={category.image} alt="" />
                            <p className='text-gray-600'>{category.name}</p>
                            <p className='text-xs tc'>{category.items}</p>
                        </div>

                    ))}
                </div>
                
             </div>
            
        </div>
    );
};

export default HomeCategory;