function Homepage(){
  return(
    <main className="mt-10 mx-20">
      <section className="flex items-center gap-7">
        {/*left box*/}
        <div className="flex-1">
        <h1 className="font-bold text-xl">Welcome to my website</h1>
        <p className="text-gray-600 mt-3">this is my first website,my project is very simple and one page becouse my 
          first practice page, in next j.s so im very exited on my project.
        </p>
        <button className="mt-3 bg-gray-700 py-1 px-1 rounded-md text-black font-bold">Read more</button>
        </div>
        {/*right box*/}
        <div className="flex-1">
          <img src="/rey.png"  width={500} height={500}alt="my image"/>
        </div>
      </section>
    </main>
  )
}
export default Homepage;