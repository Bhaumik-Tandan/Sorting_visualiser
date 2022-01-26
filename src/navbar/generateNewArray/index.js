function GenerateNewArray()
{
    return (
        <div
            style={{
                //make it click able
                cursor: 'pointer',
            }}
        onClick={() => {
            const array = [];
            for (let i = 0; i < 10; i++) {
                array.push(Math.floor(Math.random() * 100));
            }
            console.log(array);
        }}>
            Generate New Array
        </div>
    );
}
export default GenerateNewArray;