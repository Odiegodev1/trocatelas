import React from 'react'
import Image from 'next/image'
import ServicoCadstrado from './servicocastrado'
import { supabase } from '@/lib/supabase/server'
import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
 
} from "@/components/ui/table"

export default async function page() {
    const { data: produtos, error } = await supabase.from('produtos').select('*')
  
    if (error) {
      console.error('Erro ao buscar produtos:', error)
      return <div>Erro ao buscar produtos: {error.message}</div>
    }
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
 <TableBody>
      {produtos.map((produto: any) => (
        <TableRow key={produto.id} className="font-medium hover:bg-purple-950 text-zinc-100 text-xs">
          <TableCell>{produto.nome}</TableCell>
          <TableCell>{produto.descricao}</TableCell>
          <TableCell className="text-right">R$ {produto.preco}</TableCell>
        </TableRow>
      ))}
    </TableBody>
        </Table>
    </main>
    </section>
  )
}

