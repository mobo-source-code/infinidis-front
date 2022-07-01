

const StatCard = ({label, number, tag}) => {
    return (
        <div className="p-4 flex items-center w-48 h-24 bg-white rounded-lg space-x-6">
            <div className="rounded-full h-12 w-12 bg-gray-200 flex items-center justify-center font-bold text-title text-3xl">
                {label} 
            </div>
            <div className="flex flex-col">
            <p className="font-bold text-xl text-source text-title">{number}</p>
            <p className="font-light text-md text-source text-gray-800">{tag}</p>
            </div>
        </div>
    )
}

export default StatCard;