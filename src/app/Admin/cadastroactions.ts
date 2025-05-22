'use server'

import { supabase } from '@/lib/supabase/server'

export async function cadastrarServico(formData: FormData) {
  const nome = formData.get('nome') as string
  const preco = formData.get('preco') as string
  const descricao = formData.get('descricao') as string

  const { error } = await supabase.from('produtos').insert([
    { nome, preco, descricao }
  ])

  if (error) {
  
    throw new Error(error.message)
  }
}
