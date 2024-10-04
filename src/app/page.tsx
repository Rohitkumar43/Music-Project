import Herosection from "@/components/Herosection";
import Feauturedsection from '@/components/Feauturedsection';
import Whyus from '@/components/whyus'
import Backgroundgrid from '@/components/Backgroundgrid'

// this is the page where is the gloal layout is there 
export default function Home() {
  return(
    <main className="min-h-screen bg-black/[0.65] antialiased bg-grid-white/[0.02]">
      <Herosection/>
      <Feauturedsection/>
      <Whyus/>
      <Backgroundgrid/>

    </main>
  )
}
