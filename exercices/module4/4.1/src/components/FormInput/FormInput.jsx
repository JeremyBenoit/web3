const FormInput = ({value,changeValue,label})=>{
    return <div>
        {label} : <input type="text" value={value} onChange={changeValue}/>
    </div>
}
export default FormInput