import Image from "next/image";
import Link from "next/link";

export default function CarType() {
  return (
    <div className="min-h-screen">
      <div className="carousel carousel-end p-4 space-x-4 bg-neutral rounded-box">
        {/* BMW */}
        <div className="carousel-item relative">
          <div className="absolute text-white p-4">
            <h1 className="text-4xl text-cyan-500">BMW</h1>
          </div>
          <Link href="/pages/buy">
            <img
              src="https://images.unsplash.com/photo-1538691096862-03e312a2d87f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="backgroundpic"
              height={800}
              width={400}
              className="rounded-lg"
            />
          </Link>
        </div>

        {/* JEEP */}
        <div className="carousel-item relative">
          <div className="absolute text-white p-4">
            <h1 className="text-4xl text-cyan-500">JEEP</h1>
          </div>
          <Link href="/pages/buy">
            <img
              src="https://images.unsplash.com/photo-1632067694873-89ac2dc45d75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="backgroundpic"
              height={800}
              width={400}
              className="rounded-lg"
            />
          </Link>
        </div>

        {/* BENZ */}
        <div className="carousel-item relative">
          <div className="absolute text-white p-4">
            <h1 className="text-4xl text-cyan-500">MERCEDES</h1>
          </div>
          <Link href="/pages/buy">
            <img
              src="https://images.unsplash.com/photo-1564705604164-90e6b60ad7cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
              alt="backgroundpic"
              height={800}
              width={400}
              className="rounded-lg"
            />
          </Link>
        </div>

        {/* Toyota */}
        <div className="carousel-item relative">
          <div className="absolute text-white p-4">
            <h1 className="text-4xl text-cyan-500">TOYOTA</h1>
          </div>
          <Link href="/pages/buy">
            <img
              src="https://images.unsplash.com/photo-1624951352908-3579b7df9c05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80"
              alt="backgroundpic"
              height={800}
              width={400}
              className="rounded-lg"
            />
          </Link>
        </div>

        {/* PORSCHE */}
        <div className="carousel-item relative">
          <div className="absolute text-white p-4">
            <h1 className="text-4xl text-cyan-500">PORSCHE</h1>
          </div>
          <Link href="/pages/buy">
            <img
              src="https://images.unsplash.com/photo-1604026289719-a60fd5374945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1919&q=80"
              alt="backgroundpic"
              height={800}
              width={400}
              className="rounded-lg"
            />
          </Link>
        </div>

        {/* Maserati  */}
        <div className="carousel-item relative">
          <div className="absolute text-white p-4">
            <h1 className="text-4xl text-cyan-500">MASERATI</h1>
          </div>
          <Link href="/pages/buy">
            <img
              src="https://images.unsplash.com/photo-1575888787260-41970fb14803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="backgroundpic"
              height={800}
              width={400}
              className="rounded-lg"
            />
          </Link>
        </div>

        {/* LAMBO */}
        <div className="carousel-item relative">
          <div className="absolute text-white p-4">
            <h1 className="text-4xl text-cyan-500">LAMBORGHINI</h1>
          </div>
          <Link href="/pages/buy">
            <img
              src="https://images.unsplash.com/photo-1619304290984-9345b8788868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="backgroundpic"
              height={800}
              width={400}
              className="rounded-lg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
