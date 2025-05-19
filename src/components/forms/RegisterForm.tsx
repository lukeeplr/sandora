'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Logo from '../shared/Logo'
import { Input } from '../ui/input'
import PasswordInput from '../shared/PasswordInput'
import { Button } from '../ui/button'
import Link from 'next/link'
import { toast } from 'sonner'


const formSchema = z.object({
    fullName: z.string().min(1, 'Informe um nome válido'),
    firm: z.string().min(1, 'Informe uma empresa válida'),
    email: z.string().email('Informe um e-mail válido'),
    password: z.string().min(6, 'Sua senha deve ter pelo menos 6 caracteres'),
    confirmPassword: z.string(),

}).refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword']
})

function RegisterForm() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        fullName: '',
        firm: '',
        email: '',
        password: '',
        confirmPassword: ''
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
            <CardTitle className='font-semibold text-xl sm:text-3xl'>Cadastro</CardTitle>
        </CardHeader>

        <CardContent className='space-y-4 sm:space-y-6'>
                    <FormField
                        control={form.control}
                        name='fullName'
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className='input-label'>Nome Completo</FormLabel>
                                <FormControl>
                                    <Input placeholder='Como você será identificada na plataforma.' {...field}
                                    className='text-input' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />

                        <FormField
                        control={form.control}
                        name='firm'
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className='input-label'>Empresa</FormLabel>
                                <FormControl>
                                    <Input placeholder='Insira o nome da empresa.' {...field}
                                    className='text-input' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />

                        <FormField
                        control={form.control}
                        name='email'
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className='input-label'>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder='Será usado para login e comunicações.' {...field}
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
                                    <PasswordInput placeholder='(mín. 6 caracteres)' {...field} type='password'
                                    className='password-input' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />

                        <FormField
                        control={form.control}
                        name='confirmPassword'
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Confirmar Senha</FormLabel>
                                <FormControl>
                                    <PasswordInput placeholder='(mín. 6 caracteres)' {...field} type='password'
                                    className='password-input' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
            <p className='mt-4 font-semibold text-medium-gray text-[10px]'>Ao criar sua conta você concorda com nossos <Link href={'/'} className='text-brand underline'>Termos de Uso</Link> e <Link href={'/'} className='text-brand underline'>Política de Privacidade</Link>.</p>
        </CardContent>
        <CardFooter className='flex flex-col gap-4'>
            <Button
                type='submit'
                className='bg-brand hover:bg-brand/90 cursor-pointer w-full uppercase font-medium text-sm sm:text-lg text-background py-6 transition-all'>
                Criar conta
            </Button>
            <Link href={'/'} className='underline font-medium text-[12px] sm:text-sm text-medium-gray mx-auto'>
                Já tem uma conta? Entrar
            </Link>
        </CardFooter>
        </Card>
        </form>
    </Form>
  )
}

export default RegisterForm