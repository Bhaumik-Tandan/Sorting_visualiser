import {useContext} from 'react';
import Context from '../../context/context';
import {generateArray} from '../../utility/generateArray';
function GenerateNewArray()
{
    const { setArr,arrSize } = useContext(Context);
    return (
        <div
            style={{
                //make it clickable
                cursor: 'pointer',
            }}
        onClick={() => {
            setArr(generateArray(arrSize));
        }}>
            Generate New Array
        </div>
    );
}
export default GenerateNewArray;