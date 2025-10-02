import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Image
        src="/DA9B24DA-65C3-44D8-8F38-05FA69314460.jpeg"
        alt="Jon's Blackjack"
        width={800}
        height={600}
        className="max-w-full h-auto rounded-lg shadow-lg"
        priority
      />
    </div>
  );
}