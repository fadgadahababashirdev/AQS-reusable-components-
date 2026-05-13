interface heading {
    children:React.ReactNode
}
export function TypographyH1({children}:heading) {
  return (
    <h1 className="scroll-m-20 text-start  text-lg md:text-2xl ml-5 mt-12  font-bold tracking-tight text-balance">
     {children}
    </h1>
  )
}
