import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Form from 'next/form'
import Admins from './admin'
function Admin() {
  return (
    <section className='flex flex-col items-center w-full h-screen bg-purple-900'>
      <header className=' '>
       <Image
      src="/logo.png"
      width={200}
      height={200}
      alt='logo'
    />
      </header>
      <main>
        <h1 className='text-3xl font-bold text-gray-100'>Cadastrar Serviço</h1>
        <Card className='w-80 mt-4'>
          <CardHeader>
            <CardTitle>Cadastrar Serviços</CardTitle>
            <CardDescription>Cadastre seus serviços com facilidade</CardDescription>
          </CardHeader>
          <Admins />
          
        
          
        </Card>
      </main>
    </section>
  )
}

export default Admin