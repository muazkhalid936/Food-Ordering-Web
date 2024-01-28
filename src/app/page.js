import Homemenu from "@/components/layout/Homemenu";
import Sectionheader from "@/components/layout/Sectionheader";
import Hero from "@/components/layout/hero";

export default function Home() {
  return (
    <div>
   
      <Hero />
      <Homemenu />
      <section>
        <Sectionheader subheader={"Our Story"} mainheader={"About Us"} />
      </section>
      <div>
        <p className=" text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
          accusantium veritatis necessitatibus maxime consequatur, nihil
          quisquam odio eos, illo, quae animi eaque fuga? Corporis, eveniet
          totam iure velit iusto explicabo.
        </p>

        <p className=" text-center mt-2">
          Another option you have is choosing the number of syllables in the
          words you speak. You probably have never considered this option
          before, but you have it every time you open your mouth and speak.
        </p>
        <p className=" text-center mt-4">
          You make so many choices like this that you never even think about,
          but you have the choice with each one. What are you going to do with
          this knowledge?
        </p>

        <Sectionheader subheader={"DON\'T HESITATE"} mainheader={"Contact us"} />
        <p className="text-center text-2xl underline text-gray-500">+92 348 4600531</p>
      </div>
    </div>
  );
}
