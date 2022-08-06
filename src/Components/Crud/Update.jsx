
const Update =()=>{
    // const mystyle = {
    //     background: 0,
    //     width: '200px',
    //     outline: 0,
    //     border: 0,
    //     borderBottom: '2px solid rgba(255,255,255, 0.3)',
    // margin: '20px 0',
    // paddingBottom: '10px',
    // fontSize: '18px',
    // fontWeight: 'bold',
    // color: 'rgba(255,255,255, 0.8)',
    // }
    return(
        <>
            <h3>tools</h3>
            <input className={"inputGlass"} type="text" placeholder="enter name" /><br/>

            <table className={"tableGlass"}>
                <thead>
                <tr>
                    <th>Column 1</th>
                    <th>Column 2</th>
                    <th>Column 3</th>
                    <th>Column 4</th>
                    <th>Column 5</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                    <td>Cell 4</td>
                    <td>Cell 5</td>
                </tr>
                <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                    <td>Cell 4</td>
                    <td>Cell 5</td>
                </tr>
                </tbody>
            </table>

            <br/>
            <br/>
            <br/>

            <button className="buttonGlass glass clear-a" type="button">Clear A</button><br/>
            <button className="buttonGlass glass red-a" type="button">Red A</button><br/>
            <button className="buttonGlass glass green-a" type="button">Green A</button><br/>
            <button className="buttonGlass glass blue-a" type="button">Blue A</button>

        <button className="buttonGlass glass clear-b" type="button">Clear B</button><br/>
        <button className="buttonGlass glass red-b" type="button">Red B</button><br/>
        <button className="buttonGlass glass green-b" type="button">Green B</button><br/>
        <button className="buttonGlass glass blue-b" type="button">Blue B</button>



        </>
    )
}
export default Update;