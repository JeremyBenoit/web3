const FormInput = ({value,changeValue,label})=>{
    return <div>
        {label} : <input value={value} onChange={changeValue}/>
    </div>
}
export default FormInput