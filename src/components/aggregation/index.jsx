import { useEffect } from "react";
import './style.css'

function AggregationDropDrown({aggregation,currency,resetAgg,changeAgg}){
    useEffect(() =>{
      resetAgg()
    }, [currency])

    return (
        <div className="ladderviewdisplay-tables">
     
            <div id="aggregationdropdown-label" >
                Aggregation
            </div>
            <div>
                <select id="aggregationdropdown-selection" value={aggregation}
                onChange={changeAgg}>
                    <option value={.01}>
                        .01
                    </option>
                    <option value={.05}>
                        .05
                    </option>
                    <option value={.10}>
                        .10
                    </option>
           
                </select>  
            </div>
        </div>
    )
}

export default AggregationDropDrown;