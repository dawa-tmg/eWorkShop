import Members from "../components/Team"

export default function Team(){
  const members = [
      { 
        name: 'Tom', 
        imageURL: "https://static.vecteezy.com/system/resources/previews/019/514/242/non_2x/confused-tom-cartoon-expression-free-vector.jpg",
        contact: '123-456-7890', 
        email: 't@tom.com' 
      },
      { name: 'Jerry', 
        imageURL: "https://www.lesdentsdelait.com/wp-content/uploads/2020/04/jerry.jpg", 
        contact: '987-654-3210', 
        email: 'j@jerry.com' 
      },
      { 
        name: 'Spike', 
        imageURL: "https://www.nicepng.com/png/detail/62-628243_tom-and-jerrys-spike-spike-tom-y-jerry.png", 
        contact: '555-123-4567', 
        email: 's@spike.com' 
      },
    ];
  return (
    <>
      {members.map((member, index) => (
        <Members
          key={index}
          name={member.name}
          imageURL={member.imageURL}
          contact={member.contact}
          email={member.email}
        />
      ))}
    </>
  )
}