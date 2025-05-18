'use client'

import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Eye, EyeOff } from 'lucide-react'

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function PasswordInput({ className, ...props}: PasswordInputProps) {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='relative'>
        <Input
            {...props}
            className={className}
            type={showPassword ? 'text' : 'password'}
            aria-label={showPassword ? 'Exibir senha' : 'Ocultar senha'}
        />
        <button
            type='button'
            onClick={() => setShowPassword((prev) => !prev)}
            className='absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer'
        >
            {showPassword ? <EyeOff className='text-dark-gray' aria-hidden size={18} /> : <Eye className='text-dark-gray' aria-hidden size={18} />}
        </button>
    </div>
  )
}

export default PasswordInput