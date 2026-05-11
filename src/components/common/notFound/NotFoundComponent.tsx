'use client'

import { useRouter } from 'next/navigation';
import { AlertTriangle, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFoundComponent() {
  
  const router = useRouter()
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-5">
      
      <div className="bg-white rounded-2xl shadow-md p-10 w-full max-w-[500px] text-center">
        
        <div className="flex justify-center mb-5">
          <div className="w-[80px] h-[80px] rounded-full bg-red-100 flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-red-500" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-3">
          404
        </h1>
        
        <p className="text-xl font-semibold mb-2">
          페이지를 찾을 수 없습니다
        </p>
        
        <p className="text-gray-500 mb-8">
          요청하신 페이지가 존재하지 않거나
          이동되었어요.
        </p>
        
        <Button
          className="w-full"
          onClick={() => router.replace("/")}
        >
          <Home className="mr-2 w-4 h-4" />
          홈으로 이동
        </Button>
      
      </div>
    </div>

  )
}