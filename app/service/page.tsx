import Image from "next/image";
import Service from "../components/Service";
import { title } from "process";
export default function Home() {
  const services = [
    {
      id: 1,
      image: "/carcash.jpg",
      title: "Collision Repai Service",
      description:
        "We offer full-body collision repair with certified technicians.",
    },
    {
      id: 2,
      image: "/engine.jpg",
      title: "Engine Service",
      description:
        "Keep your engine running smoothly with regular diagnostics and tune-ups.",
    },
    {
      id: 3,
      image: "/TireRotation.jpg",
      title: "Tire Rotation",
      description:
        "Extend the life of your tires with proper rotation and alignment.",
    },
  ];
  return (
    <div className=" grid grid-cols-3 gap-5">
      {services.map((service: any) => (
        <Service
          key={service.id}
          title={service.title}
          image={service.image}
          description={service.description}
        />
      ))}
    </div>
  );
}
