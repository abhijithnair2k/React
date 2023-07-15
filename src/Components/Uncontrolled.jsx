import { useRef } from "react";
const Uncontrolled=()=>{
    let name=useRef()
    let email=useRef()
    let company=useRef()
    let salary=useRef()

    let formHandle=(e)=>{
        e.preventDefault()
        let nameData=name.current.value
        let emailData=email.current.value
        let companyData=company.current.value
        let salaryData=salary.current.value
        console.log(nameData)
        console.log(emailData)
        console.log(companyData)
        console.log(salaryData)

    }
    return(
        <div>
            <form action="">
                <label htmlFor="">Name</label>
                <input type="text" ref={name}/>
                <label htmlFor="">Email</label>
                <input type="text" ref={email}/>
                <label htmlFor="">Company</label>
                <input type="text" ref={company}/>
                <label htmlFor="">Salary</label>
                <input type="text" ref={salary}/>
                <button onClick={formHandle}>Submit</button>
            </form>
        </div>
    )
}
export default Uncontrolled
