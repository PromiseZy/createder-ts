export default function CardList() {
    return(
        <>
        <div className="lg:w-80 lg:h-auto md:w-[375px] md:h-[396.94px] min-[375px]:w-[375px] p-4 bg-white  " style={{ fontFamily: 'Prompt' }}>
            <div className="flex flex-row-reverse md:flex-col">
                
                <div className="lg:w-72 lg:h-[162px] md:h-[192.94px] md:w-[343px] w-[120px] h-[67.5px] rounded-[8px] ">
                    <img src="/Thumbnail.png" alt="Test" className="lg:w-72 lg:h-[162px] w-[343px] mb:h-[192.94px]" />
                </div>

                <div>
                    <div className="flex text-xs font-light space-x-4 py-4 text-slate-500 max-md:hidden ">
                        <div>
                            <p >Tawatchai Petkaew</p>
                        </div>
                        <div>
                            <p >5 เมษายน 66</p>
                        </div>
                    </div>

                    <div className="flex-row text-neutral-900">
                        <div className="flex-row max-sm:pr-4">
                            <div>
                                <h1 className="font-medium max-sm:text-base">ร้านอาหารเปิดเพจแบบไหนให้ปัง</h1>
                            </div>

                            <div>
                                <p className="font-normal text-base max-sm:text-sm">จับกระแส “ฟูดออนไลน์” <br/> คัมภีร์เปิดเพจร้านอาหารออนไลน์อย่างไรให้...</p>
                            </div>
                        </div>   

                        <div className="flex space-x-4 pt-4 text-center max-md:hidden">
                            <div className="py-1 px-2 lg:w-[65px] lg:h-7 rounded-lg text-sm border border-slate-900">
                                <p className="text-sm font-medium" >ออนไลน์</p>
                            </div>
                            <div className="py-1 px-2 lg:w-[65px] lg:h-7 rounded-lg text-sm border border-slate-900">
                                <p className="text-sm font-medium" >ยิงแอด</p>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
            
            
        </div>
        </>
    )
}