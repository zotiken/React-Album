import React, {useState,useEffect} from "react";

import "./Photos.scss";

import Aux from "../../hoc/hocAux";
import Overlay from "../Overlay/Overlay";

const PhotoFullSize = props => {
  const [state, setstate] = useState(0);

  useEffect(() => {
    setstate(0)
  }, [props.url])

  function list(listId,count) {
let vr = listId + state
    if (count === -1) {
      if (vr === 0) {
        setstate(props.photos.length-1 - listId)
      } else {
        setstate(state+count)
      }

    } else if (count === 1) {
      if (vr === props.photos.length-1) {
        setstate(0 - listId)
      } else {
        setstate(state+count)
      }
    }
  }
return(
  
    props.show ?
        <Aux>
            <Overlay show={props.show} close={props.close} />
            <div className="fullSize" >
                <img src={props.photos[props.url+state].url} alt='' />
                <button className="prev" onClick={() => list(((props.url)),-1)}>prev</button>
                <button className="next" onClick={() => list(((props.url)),1)}>next</button>
            </div>
        </Aux>
    : null)
};


export default PhotoFullSize;
