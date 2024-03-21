export default function Input({label,value, setValue}){
    return(
        <div>
        <label htmlFor={label}>{label}:</label>
        <input type="text" id={value} name={label} value={value} onChange={(ev) => setValue(ev.target.value)}/>
      </div>
    )
}