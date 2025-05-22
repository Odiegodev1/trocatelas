// app/servicos/page.tsx
import React from 'react'
import { TableBody, TableRow, TableCell } from '@/components/ui/table'
import { supabase } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'



export default async function ServicoCadastrado() {
  const { createClient } = await import('@supabase/supabase-js')

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const { data: produtos, error } = await supabase.from('produtos').select('*')

  if (error) {
    console.error('Erro ao buscar produtos:', error)
    return <div>Erro ao buscar produtos: {error.message}</div>
  }

  return (
    <TableBody>
      {produtos.map((produto: any) => (
        <TableRow key={produto.id} className="font-medium hover:bg-purple-950 text-zinc-100 text-xs">
          <TableCell>{produto.nome}</TableCell>
          <TableCell>{produto.descricao}</TableCell>
          <TableCell className="text-right">R$ {produto.preco}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}

