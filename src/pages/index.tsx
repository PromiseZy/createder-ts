import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

import Menu from "@/components/Menu"

export default function Home() {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-between p-24" style={{ fontFamily: 'Prompt' }}>
        <div className="">
            <p>
              หน้าหลักจ้า
            </p>
        </div>
      </div>
    </div>
  )
}
