import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <>
   <MaxWidthWrapper className="mb-12 mt-45 sm:mt-80 flex flex-col items-center justify-center text-center">
    {/* <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
      <p className="text-sm font-semibold text-gray-700">
        Grit is now public!
      </p>
    </div> */}
    <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
      {/* Apply to your dream <span className="text-blue-600">schools</span> in seconds. */}
      hello there.
    </h1>
    <h1 className="mt-9 max-w-7xl text-3xl font-bold md:text-6xl lg:text-4xl">
      {/* Apply to your dream <span className="text-blue-600">schools</span> in seconds. */}
      apply to graduate school in seconds.
    </h1>
    {/* <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">Grit gives you access the most extensive database of graduate schools in the country. Simply input some information and start your application immediately. </p>
     */}

    <Link className={buttonVariants({
      size:'lg',
      className:'mt-9',
      variant: 'outline'
    })} href='/dashboard' target='_blank'>
    let's go <ArrowRight className='ml-2 h-5 w-5'/>
    </Link>
  </MaxWidthWrapper>
  <div></div>
  </>
  );
}
