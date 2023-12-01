import Image from "next/image";
import { Inter } from "next/font/google";
import supabase from "@/utils/supabase";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section>
      <H1>To Do App ✅</H1>
    </section>
  );
}
