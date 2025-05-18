import RegisterForm from '@/components/forms/RegisterForm'
import React from 'react'

function Page() {
  return (
  <>
    <section className='hidden lg:flex items-center justify-center px-16'>
      <div>
        <h1 className='font-bold text-5xl text-dark-neutral'>Crie sua conta e comece a <span className='text-brand'>aprender</span></h1>
        <p className='max-w-[40ch] mt-4 font-medium text-xl text-light-neutral'><span className='text-brand'>Crie sua conta em poucos segundos</span> e comece sua jornada de aprendizado.</p>
      </div>
    </section>

    <section className='flex bg-brand items-center justify-center'>
      <RegisterForm />
    </section>
  </>
  )
}

export default Page