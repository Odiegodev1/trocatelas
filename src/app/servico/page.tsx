import React from 'react'
import Image from 'next/image'
import ServicoCadstrado from './servicocastrado'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function page() {
  return (
    <section className='flex flex-col  items-center w-full h-screen bg-purple-900'>
      <Image
           src="/logo.png"
           width={200}
           height={200}
           alt='logo'
         />
    <main>
        <Table className='w-[300px] mt-4'>
            <TableCaption className='text-gray-100'>Serviços cadastrados</TableCaption>
            <TableHeader>
    <TableRow className=' text-xl font-bold'>
      <TableHead className="w-[100px] text-zinc-950 ">serviços</TableHead>
      <TableHead>Descriçao</TableHead>
      
      <TableHead className="text-right">Preço</TableHead>
    </TableRow>
  </TableHeader>
<ServicoCadstrado />
        </Table>
    </main>
    </section>
  )
}

export default page