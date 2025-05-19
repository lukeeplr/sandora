'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import Link from 'next/link'

import Logo from '../shared/Logo'
import PasswordInput from '../shared/PasswordInput'
import { toast } from 'sonner'


const formSchema = z.object({
    email: z.string().email('Informe um e-mail válido'),
    password: z.string().min(6, 'Informe uma senha válida'),
})

function LoginForm() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        email: '',
        password: '',
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast('Enviado')
  }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
    <Card className='bg-background text-dark-slate w-[95vw] max-w-md py-8'>
        <CardHeader>
            <Logo className='w-32 h-7 mx-auto lg:hidden mb-4'/>
            <CardTitle className='font-semibold text-xl sm:text-3xl'>Login</CardTitle>
        </CardHeader>

        <CardContent className='space-y-4 sm:space-y-6'>
                        <FormField
                        control={form.control}
                        name='email'
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className='input-label'>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder='Insira seu email cadastrado' {...field}
                                    className='text-input' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />

                        <FormField
                        control={form.control}
                        name='password'
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className='input-label'>Senha</FormLabel>
                                <FormControl>
                                    <PasswordInput placeholder='Insira sua senha' {...field} type='password'
                                    className='password-input' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
            <Link href={'/'} >
                <p className='underline font-semibold text-medium-gray text-xs'>Esqueci minha senha</p>
            </Link>
        </CardContent>
        <CardFooter className='flex flex-col gap-4'>
            <Button
                type='submit'
                className='bg-brand hover:bg-brand/90 cursor-pointer w-full uppercase font-medium text-sm sm:text-lg text-background py-6 transition-all'>
                Fazer login
            </Button>
            <Link href={'/cadastro'} className='underline font-medium text-[12px] sm:text-sm text-medium-gray mx-auto'>
                Não possui conta? Cadastre-se
            </Link>
        </CardFooter>
        </Card>
        </form>
    </Form>
  )
}

export default LoginForm