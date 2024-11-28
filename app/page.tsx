export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center h-screen justify-center align-middle bg-[#ebdcc3]">
        <div className="text-9xl text-tealDark flex flex-col items-center justify-center">
          <span>BOX OF</span>
          <br />
          <span> WELLNESS</span>
        </div>

        <div className="bg-red-700">
          <button className="p-2 rounded-xl text-white">Order</button>
        </div>
      </div>
    </>
  );
}
