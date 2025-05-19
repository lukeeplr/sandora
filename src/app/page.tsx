import LoginForm from "@/components/forms/LoginForm";

export default function Home() {
  return (
    <>
    <section className='hidden lg:flex items-center justify-center px-16 text-left mr-auto'>
      <div>
      <h1 className='font-bold text-5xl text-dark-neutral'>Bem-vindo(a) de volta!</h1>
      <p className='max-w-[40ch] mt-4 font-medium text-xl text-medium-neutral'>Faça login com seu e-mail  para acessar seus cursos.</p>
      </div>
    </section>

    <section className='flex bg-brand items-center justify-center'>
      <LoginForm />
    </section>
  </>
  );
}
