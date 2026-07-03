import Navbar from "@/components/(Common)/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-red-500">
            IgnytePlatform
          </h1>
        </div>
      </main>
    </>
  );
}