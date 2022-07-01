import AddDeliveryComponent from "../components/adddelivery";
import axios from "axios";

const AddDelivery = ({all_clients}) => {
    return (
        <AddDeliveryComponent clients={all_clients} />
    )
}

export default AddDelivery;

export let getServerSideProps = async ({ req }) => {
    const res = await axios.get("https://infinidis-maroc-api.herokuapp.com/delivery/clients")
    const clients = res.data
        return {
          props: {
            all_clients: clients,
          },
        };
      }