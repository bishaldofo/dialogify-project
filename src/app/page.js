const HomePage = () => {
  return (
      <section>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-green-300 h-[500px]">
        <h2>Left side</h2>
       </div>
       <div className="md:col-span-2 ">
         <div className="">
          Main contents are comes here
         </div>
       </div>
       <div className="bg-orange-200 h-[500px]">
          <h2>Right Side</h2>
       </div>
         </div>
      </section>
  )
}

export default HomePage;
