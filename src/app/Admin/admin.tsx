"use client"

import React from 'react'
import { CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Form from 'next/form'
import Link from 'next/link';
import { cadastrarServico } from './cadastroactions';
function admin() {
  return (
    <CardContent className=''>
            <Form action={cadastrarServico}
                
                className='space-y-4'>
            <div>
              <Label  className='text-zinc-800 mb-2 font-bold'>
                Nome do Serviço
              </Label>
              <Input name='nome' type='text' placeholder='ex: Formatação ' />
            </div>
            <div>
              <Label  className='text-zinc-800 mb-2 font-bold'>
                Preço
              </Label>
              <Input name='preco' type='number' placeholder='R$ 19,00' />
            </div>
            <div>
              <Label className='text-zinc-800 mb-2 font-bold'>
                Descrição do serviço
              </Label>
              <Input name='descricao' type='text' placeholder='ex: formatação + pacote office etc....' />
            </div>
            <div className='flex  flex-col gap-2'>
            <Button type='submit' className='bg-purple-900 hover:bg-purple-950'>Cadastrar</Button>
             <Link href="/Admin/servico" className='w-full'>
             <Button   className='bg-purple-900 hover:bg-purple-950 w-[63%]'>
             
              ver serviços cadastrados
            </Button>
            </Link>
            </div>
            </Form>
          </CardContent>
  )
}

export default admin