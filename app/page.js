import { Button } from "@/components/ui/button"

export default function Home()
{
   return (
    <>  
      <div className="w-full h-screen bg-red-400 items-center text-center">
            <nav className="flex justify-between px-9 py-4 bg-amber-400 items-center text-center">
                <h2 className="text-purple-950 font-bold text-2xl">
                Logo
                </h2>

                <div className="flex gap-3">
                 <a>Hello</a>
                 <a>Hello</a>
                 <a>Hello</a>
                 <a>Hello</a>
                 <a>Hello</a>
                 <a>Hello</a>
                </div>

                <div className=" flex gap-2">
                  <Button>
                    Login
                  </Button>
                  <Button>
                    Profile
                  </Button>
                </div>
            </nav>
      </div>  
    </>
   )
}
