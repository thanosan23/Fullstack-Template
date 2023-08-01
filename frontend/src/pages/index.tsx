import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>App</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-10 min-h-screen bg-zinc-800 text-white">
          {/* Test out requests between frontend and backend (to test for CORS errors) */}
          <button onClick={async () => {
              const res = await fetch("http://localhost:8080");
              console.log(await res.json())
          }} className="px-2 py-3 bg-zinc-700 rounded hover:-translate-y-1 hover:opacity-70 opacity-100 transition">Click me!</button>
      </main>
    </>
  );
}
