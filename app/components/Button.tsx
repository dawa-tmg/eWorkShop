interface PropsButton{
    text : any;
}

export default function Button({text}:PropsButton){
    return (
        <button className="bg-red-500 rounded text-xl text-white font-semibold flex justify-center gap-1 py-3 px-5">{text}</button>
    )
}