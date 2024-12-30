import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen container flex flex-col items-center justify-center text-center">
      <h3 className="text-8xl font-bold">404</h3>
      <h2 className="text-4xl font-bold mb-5">Not Found</h2>
      <p className=" max-w-lg mb-10">
        Unfortunately, this is a invalid page url. You may have mistyped the
        address, or the page has been moved to another URL.
      </p>
      <Button asChild variant={"outline"} size={"lg"}>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
