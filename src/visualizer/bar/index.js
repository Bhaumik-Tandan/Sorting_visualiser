import React,{useContext} from 'react';
import Context from '../../context/context';
function Bar(props) {
    const {arrSize} = useContext(Context);
    const color=require('../../config.json')['color'][props.color];
  return( 
    <div
        className="bar"
        style={{
            height: `${props.value * 0.9}vh`,
            //set rgba as background color
            backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
            width: `${50 / arrSize}%`,
            margin: `0px ${10/arrSize}vh`,
            display: "inline-block",
            
        }}
    >
        <div
        style={
            {
                lineHeight: `${props.value * 0.9}vh`,
                color: "white",
                fontSize: `${30 / arrSize}vh`,
                textAlign: "center",
                fontWeight: "bold"
            }
        }
        >{props.value}
        </div>
    </div>
  );
}

export default Bar;
