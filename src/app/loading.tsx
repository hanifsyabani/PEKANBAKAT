export default function Loading(){
  return(
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex justify-center items-center loader"></div>
      <h1 className="text-center text-lg mt-2 font-extrabold text-primary">
        Tunggu Sebentar yaa...
      </h1>
    </div>
  )
}