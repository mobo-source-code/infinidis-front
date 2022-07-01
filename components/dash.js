import { useContext, useMemo, useEffect } from "react";
import AuthContext from "../hooks/useAuth";
import StatCard from "./statcard";

import TableList from "./tablelist";

import SelectColumnFilter from "./selectcolumnfilter";
import StatusPill from "./statuspill";

import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";



const Dash = ({all_dels}) => {

  useEffect(() => {
    console.log(all_dels)
  }, [])


    const ready_data = all_dels.map( del => ({
      id_del : del.id,
      num_facture: del.num_facture,
      destinataire: del.destinataire,
      status: del.status,
      bon_de_livraison: del.bon_de_livraison
    }))


  const getData = () => ready_data;

    const {toLogout} = useContext(AuthContext)
    

    const columns = useMemo(
        () => [
            {
                Header: "Num Facture",
                accessor: "num_facture",
              },
              {
                Header: "Destinataire",
                accessor: "destinataire",
              },
              {
                Header: "Status",
                accessor: "status",
                Filter: SelectColumnFilter,
                filter: 'includes',
                Cell: StatusPill,
              },
              {
                Header: "Bon Livraison",
                accessor: "bon_de_livraison",
              },
              {
                Header: "Visiter",
                accessor: "id_del", 
                Cell: ({row}) => (        
                  <Link href={`/deliveries/${row.original.id_del}`}>
                    <div className="bg-blue-800 cursor-pointer text-white active:bg-blue-600 font-bold uppercase text-xs text-center py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                      Voir
                    </div>
                  </Link>
                )
              },
        ], []
    );

    const data = useMemo(() => getData(), [])

    const handleLogout = async e => {
        e.preventDefault();
        await toLogout()
    }


    return (
        <div className="p-8 flex flex-col space-y-10">
            <h1 className="text-source font-bold text-4xl text-title">Tableau de bord</h1>
            <div className="flex justify-left space-x-20 items-left">
                <StatCard label={"C"} number={"152"} tag={"Clients"} />
                <StatCard label={"D"} number={"282"} tag={"Livraisons"} />
                <StatCard label={"D"} number={"114"} tag={"En cours"} />
                <StatCard label={"D"} number={"102"} tag={"Livré"} />
            </div>
            <TableList columns={columns} data={data} />
        </div>
    );
}


export default Dash;

export async function getServerSideProps() {
  const res = await axios.get("http://127.0.0.1:8000/delivery/deliveries")
  console.log(res.data)
}
