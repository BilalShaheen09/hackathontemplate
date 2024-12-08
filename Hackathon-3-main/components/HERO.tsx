import Link from "next/link"
import { Button } from "./ui/button"

export default function Hero() {
  return (
    <section className="flex flex-col items-center bg-[#fafafa] m-4">
      <div
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
        }}
      ></div>
      <div className="flex justify-center items-center flex-col p-10 text-center">
        <p className="text-sm">First Look</p>
        <h2 className="text-4xl font-bold uppercase">Nike Air Max Pulse</h2>
        <p className="text-sm leading-5 w-full pt-3 pb-2 text-center lg:w-[60%]">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
          —designed to push you past your limits and help you go to the max.
        </p>
        <div className="flex justify-center items-center gap-3">
          <Button>Notify Me</Button>
          <Button>Shop Air Max</Button>
        </div>
      </div>
    </section>
  );
}