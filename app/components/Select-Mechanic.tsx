export default async function SelectMechanic() {
    //Get Mechanic
    const response = await fetch('http://localhost:3000/api/mechanic')
    if(!response.ok){
        return <h1>Error Fetching Data...</h1>
    }
    const { mechanics } = await response.json()

    return (
        <select className="focus:outline-none border rounded text-lg p-2" name="mechanic_id" id="">
            <option>Assign Mechanic </option>
            {mechanics.map((mechanic)=>{
                <option key={mechanic.mechanic_id} value={mechanic.mechanic_id}>{mechanic.name}</option>
            })}
        </select>
    )
}