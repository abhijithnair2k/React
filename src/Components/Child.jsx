const Child=(x)=>{
    console.log(x);
    return(
        <div>
            {/* {x.data[1]} good morning */}
            <h2>Name: {x.data.name}</h2>
            <h2>id: {x.data.id}</h2>
            <h2>salary: {x.data.salary}</h2>
            <h2>skills: {x.data.skills[2]}</h2>
            <h2>city: {x.data.address.city}</h2>
        </div>
    )
}
export default Child