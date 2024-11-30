import Link from 'next/link'

export default function Header() {
  return (
    <header className='relative flex flex-wrap items-center justify-between w-full bg-white group py-7 shrink-0'>
      <div>
        <Link href='/'>Logo</Link>
      </div>
      <div className='items-center hidden gap-8 md:flex'>
        <Link href='/login' className='flex items-center text-sm font-normal text-gray-800'>
          Log In
        </Link>
        <Link href='/signup' className='flex items-center text-sm font-normal text-gray-800'>
          Sign Up
        </Link>
      </div>
    </header>
  )
}
