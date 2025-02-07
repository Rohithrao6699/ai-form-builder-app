import Image from "next/image";
import { Button } from "@/components/ui/button";
import FormGenerator from "./form-generator";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <FormGenerator />
      </main>
    </>
  );
}
