interface InputProps{
    type : string;
    name : string;
    placeholder : string;
}

export default function Input({type, name, placeholder}:InputProps){
    return (
        <input className="focus:outline-none border border-gray-400 rounded px-2 py-4" type={type} name={name} placeholder={placeholder}/>
    )
}