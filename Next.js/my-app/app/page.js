//next.jsのリンクタグを使うため
import Link from "next/link"
//next.jsのイメージタグを使うための奴
import Image from "next/image"
//CSSをダウンロード
//import "./style.css"
import styles from './page.module.css'

export default function Page() {
  return(
    //LinkのなかのaタグはSEO対策用
    <div>
      
      <h1 >こんにちわ 世界</h1>
      
      <h1 className={styles.sitetitle}><Link href="about/"><a>ポートフォリオ</a></Link></h1>
      
      <Image src="/next.svg" width={150} height={60}></Image>
    </div>
  )
  
}
