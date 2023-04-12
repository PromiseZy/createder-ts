import CardList from "@/components/Card"

export default function Home() {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-between p-24" style={{ fontFamily: 'Prompt' }}>
        <div className="">
            <p>
              หน้าหลักจ้า
            </p>
        <CardList/>
            
        </div>
      </div>
    </div>
  )
}
