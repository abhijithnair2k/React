import Count from "./Count"
import Button from "./Button"
import { useCallback, useState } from "react"
const Main=()=>{
    let [age,setAge]=useState(25)
    let [salary,setSalary]=useState(30000)
    let increAge=useCallback(()=>{setAge(age+1)},[age])
    let increSalary=useCallback(()=>{setSalary(salary+5000)},[salary])
    return(
        <div>
            <Count data={age}>Age</Count>
            <Button Fun={increAge}>Increment-Age</Button>
            <Count data={salary}>Salary</Count>
            <Button Fun={increSalary}>Increment-salary</Button>
        </div>
    )
}
export default Main