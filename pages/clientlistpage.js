import ClientListComponent from "../components/clientlist";
import axios from "axios";


const ClientList = ({all_clients}) => {
    return (
        <ClientListComponent clients={all_clients} />
    )
}

export default ClientList;

export let getServerSideProps = async ({ req }) => {
    const res = await axios.get("https://infinidis-maroc-api.herokuapp.com/delivery/clients")
    const clients = res.data
        return {
          props: {
            all_clients: clients,
          },
        };
      }