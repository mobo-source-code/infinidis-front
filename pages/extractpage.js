import Picker from "../components/picker"
import { Button } from "@mui/material";
import axios from "axios";

const ExtractPage = ({all_dels}) => {

    return (
            <Picker delis={all_dels} />
        )

}

export default ExtractPage;

export let getServerSideProps = async ({ req }) => {
    const res = await axios.get("https://infinidis-maroc-api.herokuapp.com/delivery/deliveries")
    const delis = res.data
        return {
          props: {
            all_dels: delis,
          },
        };
      }