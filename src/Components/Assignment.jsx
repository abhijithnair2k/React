const Assignment=(x)=>{
    console.log(x) //Object {data:[]}
    console.log(x.data) //Array  [{},{},{}]
    console.log(x.data[0])  //Object {name:"",id:number}
    console.log(x.data[0].name)
    return(
        <div>
            <h1>{x.data[0].name} is for Structure</h1>
            <h1>{x.data[1].name} is for Styles</h1>
            <h1>{x.data[2].name} is for Functionality</h1>
        </div>
    )
}
export default Assignment