import {AiOutlineUser, AiOutlineSearch} from "react-icons/ai"
import classNames from "classnames";

const TopBar = ({user}) => {
    return (
        <div className={classNames(
            "bg-top h-16 sticky top-0 w-full flex justify-between p-4 items-center",
    )}>
            <div className="flex h-8 bg-gray-200 rounded-lg p-4 text-sub text-sm font-light flex items-center">
                <AiOutlineSearch className="mr-2" />
                <input className="w-32 py-2 bg-transparent rounded-lg" placeholder="Rechercher" />
            </div>
            <ul className="flex space-x-6 font-source font-bold text-sm text-white">
                <li>Contact</li>
                <div>/</div>
                <li>Aide</li>
                <div>/</div>
                <li>FAQ</li>
            </ul>
            <div className="flex space-x-6 items-center">
                <AiOutlineUser className="text-white" size={28} />
                <div className="flex flex-col">
                    <p className="font-bold font-source text-sm text-white">Ziyad@gmail.com</p>
                    <p className="font-light font-source text-xs text-white">En Ligne</p>
                </div>
            </div>

        </div>
    )
}

export default TopBar;
