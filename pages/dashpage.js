import Dash from "../components/dash";
import axios from "axios";

const DashPage = ({all_dels}) => {
    return (
        <Dash all_dels={all_dels} />
    )
}

export default DashPage;

export async function getServerSideProps() {
    const res = await axios.get("https://infinidis-maroc-api.herokuapp.com/delivery/deliveries")
    const dels = res.data
      return {
        props: {
          all_dels: dels
        }
      }
  }