import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import {FloatingNav}  from "@/components/ui/FloatingNav";
import Image from "next/image";
import { navItems } from "@/data";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";

export default function Home() {
  return (
    <main className="flex relative bg-black-100 justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
 
      <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems} />
       <Hero/>
       <Grid/>
       <RecentProjects/>
       <Clients/>
      </div>
    </main>
  );
}
