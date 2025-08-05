interface PropsButton{
    text : any;
}

export default function Button({text}:PropsButton){
    return (
        <button className="bg-red-500 py-3 px-5 text-xl text-white font-semibold flex gap-1 justify-center">{text}</button>
    )
}