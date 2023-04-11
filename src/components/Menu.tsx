import Link from "next/link";

export default function Menu(){
    return(
        <div className="bg-white" style={{ }}>
            <div className="text-neutral-800">
                <ul className="md:flex md:items-center md:justify-between">
                    <ul className="pt-6 pb-4 md:pl-24 pl-2 ">
                        <svg width="84" height="56" viewBox="0 0 84 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.8129 6.25371V5.08287H28.9443C30.5533 5.08287 31.9339 5.24593 33.0759 5.58179H44.9982V9.05978H37.1086C37.4302 9.83321 37.5907 10.6908 37.5907 11.6301C37.5907 12.5956 37.4168 13.4826 37.0672 14.2878H41.4929V17.0958H34.6107C34.1016 17.4026 33.5415 17.6374 32.9313 17.8L37.2813 23.6705H41.5419L49.0083 5.59091V5.55701L76.2987 5.55035V9.04539H62.6908V23.6705H76.3V27.0322H62.1579L58.9311 27.0322V9.04556L50.3786 9.05119L57.3893 27.0376L57.3271 27.061H57.327L57.2648 27.0843L57.2557 27.061H40.0143L39.9988 27.0906L39.9395 27.061L39.8821 27.0322L39.7723 27.0322H35.0763L28.8333 18.2622H28.6445V27.0322H24.8129V25.8525C23.0365 26.7584 21.1738 27.2125 19.2279 27.2125C16.0838 27.2125 13.3933 26.1386 11.17 23.9951L11.1688 23.994C8.95388 21.832 7.84363 19.2187 7.84363 16.1646C7.84363 13.4262 8.77316 10.9819 10.6233 8.84127L10.6237 8.84079C12.9049 6.21415 15.8644 4.9 19.4784 4.9C21.3175 4.9 23.0963 5.3527 24.8129 6.25371ZM24.8129 10.5775C23.0041 9.12725 21.1528 8.41587 19.2546 8.41587C17.1163 8.41587 15.3235 9.16307 13.8594 10.6614L13.8584 10.6625C12.3858 12.1528 11.6486 13.9727 11.6486 16.1385C11.6486 18.3028 12.3847 20.0674 13.8568 21.532C15.3284 22.996 17.1273 23.7253 19.2679 23.7253C20.3833 23.7253 21.3127 23.5481 22.0682 23.2049L22.0731 23.2027L22.0781 23.2006C22.5064 23.0265 22.9526 22.7905 23.4208 22.4896C23.8603 22.2064 24.3239 21.8665 24.8129 21.47V10.5775ZM52.308 23.3779H45.4598L48.9642 14.6859L52.308 23.3779ZM28.6445 8.64445V14.9213H29.4252C30.9609 14.9213 32.0637 14.6324 32.7778 14.0973C33.4784 13.5724 33.8444 12.7802 33.8444 11.6719C33.8444 10.6411 33.4915 9.90495 32.8131 9.41562C32.1196 8.91527 31.0471 8.64445 29.5531 8.64445H28.6445ZM71.5358 14.2878H63.2717V17.0958H71.5358V14.2878Z" fill="#3F3F3F"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.7654 51.1V30.1041H30.2592C32.4134 30.1041 34.1161 30.3131 35.3644 30.7297C35.624 30.8086 35.879 30.8983 36.1293 30.9986V30.9739H48.2916H49.7385H51.7649C54.3601 30.9739 56.2346 31.4597 57.3884 32.4327C58.6607 33.5154 59.2962 34.9443 59.2962 36.7192C59.2962 38.1062 58.8979 39.2973 58.0998 40.2951C57.3018 41.2929 56.2506 41.9316 54.945 42.2098L61.0268 50.5541H57.4004L51.7902 42.5389H51.2559V50.5541H49.131V50.5554H35.1112C33.935 50.9189 32.2998 51.1 30.2032 51.1H25.7654ZM39.7077 47.6299H48.2916V33.8132H39.994C41.3709 35.4293 42.1381 37.3881 42.2962 39.6892H46.7995V41.9747H42.2531C42.0093 44.1794 41.161 46.0679 39.7077 47.6299ZM28.9975 48.1223H30.4537C31.9058 48.1223 33.1129 47.9721 34.0748 47.673C35.0367 47.3556 35.9053 46.8528 36.6821 46.1632C38.2728 44.7396 39.0682 42.8863 39.0682 40.6021C39.0682 38.3178 38.2821 36.4319 36.71 34.9991C35.2952 33.7205 33.2101 33.0819 30.4537 33.0819H28.9975V48.121V48.1223ZM51.2559 39.9647H52.1978C55.0049 39.9647 56.4092 38.895 56.4092 36.7557C56.4092 34.7523 55.0436 33.7505 52.3124 33.7505H51.2559V39.9647Z" fill="#FF971A"/>
                        </svg>
                    </ul>
                    <div className="md:hidden absolute mt-3 top-0 right-0">
                        <button className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 13.5H40.5M7.5 24H40.5M7.5 34.5H40.5" stroke="#262626" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div className="md:flex md:flex-row md:pt-6 md:pb-4 md:pr-24 md:static absolute 
                    bg-white w-full left-0 md:w-auto md:opacity-100 opacity-0" style={{fontFamily: 'Prompt' }}>
                        <li className="md:mx-5 mx-7">
                            <Link href="/">หน้าหลัก</Link>
                        </li>
                        <li className="md:mx-5 mx-7">
                            <Link href="/serve">บริการ</Link>
                        </li>
                            <li className="md:mx-5 mx-7">
                            <Link href="/article">บทความ</Link>
                        </li>
                        <li className="md:mx-5 mx-7">
                            <Link href="/contact">ติดต่อเรา</Link>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    )

}