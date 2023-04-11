export default function CardRow() {
    return(
        <>
        <div className="flex space-x-4 w-[375px] h-[112px] p-4 bg-white  shadow-md " style={{ fontFamily: 'Prompt' }}>
            <div className="rounded-[8px]">
                <img src="/Thumbnail.png" alt="Test" className=" w-[142.22px] h-20" />
            </div>

            <div className="flex-row w-[184.78px]">
                    <div>
                        <h1 className="font-medium text-base">ร้านอาหารเปิดเพจแบบไหน...</h1>
                    </div>

                    <div>
                        <p className="font-normal text-sm">จับกระแส “ฟูดออนไลน์” <br/> คัมภีร์เปิดเพจร้านอาหารออนไลน์...</p>
                    </div>
            </div>   

            
            
        </div>
        </>
    )
}