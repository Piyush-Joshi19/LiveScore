import React ,{ useEffect, useState  } from "react";
import Collapsesecond from "./Collapsesecond";
import {getMatches} from "./api/Api";
import {Grid} from "@material-ui/core"

const Matches = () => {
    const [matches,setMatche] = useState([]);
    useEffect(() => {
        getMatches()
            .then((data) => {
                setMatche(data.matches)
                console.log(data.matches);
            })
            .catch();
    },[]);
    return(
        <>
        <Grid container>
             <Grid sm = "2"></Grid>
             <Grid sm = "8">
         {
           matches.map((match) => (
               <Collapsesecond key = {match.unique_id} match = {match} />
           ))

       }
        </Grid>
         </Grid>
        </>
    )

}


export default Matches;