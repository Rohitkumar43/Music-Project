import Herosection from "@/components/Herosection";
import Feauturedsection from '@/components/Feauturedsection';


export default function Home() {
  return(
    <main className="min-h-screen bg-black/[0.65] antialiased bg-grid-white/[0.02]">
      <Herosection/>
      <Feauturedsection/>
    </main>
  )
}
