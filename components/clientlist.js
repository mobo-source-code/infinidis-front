import TableList from "./tablelist";
import AuthContext from "../hooks/useAuth";

import { useContext, useMemo } from "react";



import SelectColumnFilter from "./selectcolumnfilter";
import StatusPill from "./statuspill";

const ClientListComponent = ({clients}) => {

  
  const getData = () => clients;

    const columns = useMemo(
        () => [
            {
                Header: "Nom Client",
                accessor: "nom",
              },
              {
                Header: "Nom Contact",
                accessor: "contact",
              },
              {
                Header: "Adresse",
                accessor: "adresse",
              },
              {
                Header: "Téléphone",
                accessor: "tel",
              },
        ], []
    );
    
    const data = useMemo(() => getData(), [])

    return (
        <div className="p-8 flex flex-col space-y-10">
            <h1 className="text-source font-bold text-4xl text-title">Liste des clients</h1>
            <TableList columns={columns} data={data} />
        </div>
    ) 
}

export default ClientListComponent;