interface TeamProps{
    name : string;
    imageURL : string;
    contact : string;
    email : string;
}

export default function Members({name, imageURL, contact, email}:TeamProps){
    return (
        <div className="w-250 mt-10 mx-auto">
			<div className="h-40 bg-[#121e30] flex justify-between rounded-t-xl ">
				<h2 className="text-3xl text-[#eee] font-bold mx-5 my-5">{name}</h2>
				<img className="h-40 w-40 rounded-full transform translate-x-[-50%] translate-y-[50%]" src={imageURL} alt="avatar.png" width="200px" />
			</div>
			<div className="h-40 bg-[#2e3a4d] rounded-b-xl py-5 px-5">
				<p className="text-lx text-[#eee] font-semibold">{contact}</p>
				<p className="text-lx text-[#eee] font-semibold">{email}</p>
			</div>
		</div>
    )
}
