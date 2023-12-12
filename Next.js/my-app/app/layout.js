import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
//下の奴でhtmlでいうheadタグの要素の部分になっている
export const metadata = {
  title: 'ガネーシャnext.jsトレーニング',
  description: '初めてのnext.jsです！',
}
//下で
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>bodyの中</h1>
        {children}
      </body>
        
    </html>
  )
}
