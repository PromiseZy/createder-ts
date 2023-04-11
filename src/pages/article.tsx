import CardList from "@/components/Card"

export default function article() {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-between p-24" style={{ fontFamily: 'Prompt' }}>
        <div className="">
            <p>บทความของเราจ้า</p>
            <CardList/>
        </div>
      </div>
    </div>
  )
}
