export default function CardList() {
    return(
        <>
        <div className="w-80 p-4 bg-white h-[362px] shadow-md " style={{ fontFamily: 'Prompt' }}>
            <div className="w-72 h-[162px] rounded-[8px]">
                <img src="/Thumbnail.png" alt="Test" />
            </div>

            <div className="flex text-xs font-light py-4 space-x-4 text-slate-500">
                <div>
                    <p >Tawatchai Petkaew</p>
                </div>
                <div>
                    <p >5 เมษายน 66</p>
                </div>
            </div>

            <div className="flex-row text-neutral-900">
                <div className="space-y-1 ">
                    <div>
                        <h1 className="font-medium text-lg">ร้านอาหารเปิดเพจแบบไหนให้ปัง</h1>
                    </div>

                    <div>
                        <p className="font-normal text-base">จับกระแส “ฟูดออนไลน์” <br/> คัมภีร์เปิดเพจร้านอาหารออนไลน์อย่างไรให้...</p>
                    </div>
                </div>   

                <div className="flex space-x-4 pt-3 text-center">
                    <div className="py-1 px-2 w-[65px] rounded-lg text-sm border border-slate-900">
                        <p className="text-sm font-medium" >ออนไลน์</p>
                    </div>
                    <div className="py-1 px-2 w-[65px] rounded-lg text-sm border border-slate-900">
                        <p className="text-sm font-medium" >ยิงแอด</p>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}