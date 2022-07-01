import {FaTruckMoving, FaUserPlus, FaRegListAlt, FaClipboardList, FaFileExport, FaDeezer}  from "react-icons/fa";
import Image from "next/image";
import {HiLogin} from "react-icons/hi"
import Link from "next/link";
import TopBar from "./topbar";
import AuthContext from "../hooks/useAuth";
import { useContext, useEffect } from "react";

import classNames from "classnames";



const Sidebar = ({user, children}) => {

    const menuItems = [
        {
            href: '/',
            // title: 'Stats',
            icons: <FaDeezer size={28} />
        },
        {
            href: '/adddeliverypage',
            // title: 'Ajouter Livraison',
            icons: <FaTruckMoving size={28} />
        },
        {
            href: '/addclientpage',
            // title: 'Ajouter Client',
            icons: <FaUserPlus size={28} />
        },
        {
            href: '/clientlistpage',
            // title: 'Liste Clients',
            icons: <FaRegListAlt size={28} />
        },
        {
          href: '/extractpage',
          icons: <FaFileExport size={28} />
        }
    ]
    
    const {toLogout, setUser} = useContext(AuthContext)

    useEffect(() => {
        setUser(user);
      }, [])
    

    return (

        <>
                <div className="min-h-screen flex flex-col">
            <div className="flex flex-col md:flex-row flex-1">
                <aside className={classNames(
                    "w-full h-screen sticky top-0 md:w-36 bg-side flex flex-col justify-between items-center py-4",
                )}>
                    <div>
                        <Image height={56} width={101} src="https://treurgia.sirv.com/infinidis/logoinf1.png" />
                    </div>
                    <nav>
                        <ul className="space-y-6">
                            {menuItems.map(({href, title, icons}) => (
                            <li>
                                <Link href={href}>
                                    <div className="flex items-center space-x-4 p-2 rounded hover:bg-gray-200 cursor-pointer">
                                        <div className="text-title">{icons}</div> 
                                    </div>
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="flex items-center space-x-4 hover:bg-gray-200 cursor-pointer p-2 rounded">
                        <HiLogin className="text-title" size={28} />
                    </div>
                </aside>
                <main className="flex-1 m:ml-36">
                    <>
                    <TopBar user={user} />
                    {children}
                    </>
                    
                </main>
            </div>
        </div>
        </>
    )
}

export default Sidebar

export let getServerSideProps = async ({ req }) => {
    const cookies = cookie.parse(req.headers.cookie);
    if (cookies.refresh) {
      const body = {
        refresh: cookies.refresh,
      };
      const { data } = await axios.post(
        "http://127.0.0.1:8000/users/dj-rest-auth/token/refresh/",
        body
      );
      if (data && data.access) {
        const userConfig = {
          headers: {
            Authorization: "Bearer " + data.access,
          },
        };
        console.log(userConfig);
        const { data: userData } = await axios.get(
          "http://127.0.0.1:8000/users/dj-rest-auth/user/",
          userConfig
        );
        return {
          props: {
            user: userData,
          },
        };
      }
    } else {
      return {
        props: {
          user: null,
        },
      };
    }
    // return {
    //   props: {
    //     user: userData
    //   },
    // }
  };
