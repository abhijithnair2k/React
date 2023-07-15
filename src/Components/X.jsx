import Y from "./Y"
const X=(prop)=>{
    console.log(prop)
    return(
        <div>
            <Y data1={prop.data}/>
        </div>
    )
}
export default X