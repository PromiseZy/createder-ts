export default function CardList() {
    return(
        <>
        <div className="lg:w-80 lg:h-[362px] md:w-[375px] mb:h-[396.94px] p-4 bg-white  shadow-md " style={{ fontFamily: 'Prompt' }}>
            <div className="rounded-[8px]">
                <img src="/Thumbnail.png" alt="Test" className="lg:w-72 lg:h-[162px] md:w-[343px] mb:h-[192.94px]" />
            </div>

            <div className="flex text-xs font-light space-x-4 py-4 text-slate-500">
                <div>
                    <p >Tawatchai Petkaew</p>
                </div>
                <div>
                    <p >5 เมษายน 66</p>
                </div>
            </div>

            <div className="flex-row text-neutral-900">
                <div className="flex-row ">
                    <div>
                        <h1 className="font-medium text-lg">ร้านอาหารเปิดเพจแบบไหนให้ปัง</h1>
                    </div>

                    <div>
                        <p className="font-normal text-base">จับกระแส “ฟูดออนไลน์” <br/> คัมภีร์เปิดเพจร้านอาหารออนไลน์อย่างไรให้...</p>
                    </div>
                </div>   

                <div className="flex space-x-4 pt-4 text-center">
                    <div className="py-1 px-2 lg:w-[65px] lg:h-7 rounded-lg text-sm border border-slate-900">
                        <p className="text-sm font-medium" >ออนไลน์</p>
                    </div>
                    <div className="py-1 px-2 lg:w-[65px] lg:h-7 rounded-lg text-sm border border-slate-900">
                        <p className="text-sm font-medium" >ยิงแอด</p>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}