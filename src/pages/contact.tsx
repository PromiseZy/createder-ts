import Form from "@/components/Form"

export default function contact() {
  return (
    <div>
      <div className="md:flex hidden min-h-screen flex-col items-center justify-between" style={{ fontFamily: 'Prompt' }}>
        <div className="bg-orange-100 " style={{ width: '100%',height: "398px" }}>
              <div className="" style={{paddingLeft: "135px" ,paddingTop: "198px"}}>
                  <p className="text-lg font-medium" style={{paddingBottom:"17px"}}>ติดต่อพวกเรา</p>
                  <p className="text-4xl font-medium">รับคำปรึกษา</p>
                  <p className="text-4xl font-medium">การทำการตลาดออนไลน์</p>
              </div>
        </div>
        <div className="flex flex-row" style={{ width: '100%',height: "380px" }}>
              <div className="flex flex-row"style={{ width: '330px',height: "114px", marginLeft:"135px",marginTop:"70px"}}>
                <div className="">
                  <svg width="37" height="43" viewBox="0 0 37 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_29_363)">
                  <path d="M18.5002 0.710941C10.8986 0.710941 4.66425 6.72657 4.66425 14.0547C4.66425 19.9063 13.0314 29.5859 16.6408 33.5234C17.133 34.0703 17.7892 34.3438 18.5002 34.3438C19.2111 34.3438 19.8674 34.0703 20.3596 33.5234C23.9689 29.6406 32.3361 19.9063 32.3361 14.0547C32.3361 6.67188 26.1017 0.710941 18.5002 0.710941ZM18.9377 32.2109C18.6642 32.4844 18.2814 32.4844 18.0627 32.2109C15.383 29.3125 6.57831 19.3594 6.57831 14.0547C6.57831 7.71094 11.9377 2.625 18.5002 2.625C25.0627 2.625 30.4221 7.76563 30.4221 14.0547C30.4221 19.3594 21.6174 29.2578 18.9377 32.2109Z" fill="#FB923C"/>
                  <path d="M18.5002 8.58594C15.2736 8.58594 12.5939 11.2109 12.5939 14.4922C12.5939 17.7188 15.2189 20.3984 18.5002 20.3984C21.7814 20.3984 24.4064 17.7734 24.4064 14.4922C24.4064 11.2109 21.7267 8.58594 18.5002 8.58594ZM18.5002 18.4297C16.3127 18.4297 14.508 16.625 14.508 14.4375C14.508 12.25 16.3127 10.4453 18.5002 10.4453C20.6877 10.4453 22.4924 12.25 22.4924 14.4375C22.4924 16.625 20.6877 18.4297 18.5002 18.4297Z" fill="#FB923C"/>
                  </g>
                  <defs>
                  <filter id="filter0_d_29_363" x="-3" y="0" width="43" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  {/* <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/> */}
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_29_363"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_29_363" result="shape"/>
                  </filter>
                  </defs>
                  </svg>
                </div>
                <div style={{paddingLeft:"40px"}}>
                  <p className="text-lg font-semibold" style={{paddingBottom:"14px"}}>บริษัท ครีเอทเดอร์ จำกัด</p>
                  <p className="text-base font-normal">เลขที่ 179/88 ซอยมิตรภาพ 4</p>
                  <p className="text-base font-normal">ตำบล ในเมือง อำเภอเมืองนครราชสีมา </p>
                  <p className="text-base font-normal">จังหวัดนครราชสีมา 30000</p>

                </div>
              </div>
              <div className="flex flex-row"style={{ width: '270px',height: "95px", marginLeft:"70px",marginTop:"70px"}}>
                <div>
                  <svg width="34" height="25" viewBox="0 0 34 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z" fill="#FB923C"/>
                  </svg>
                </div>
                <div style={{paddingLeft:"40px"}}>
                  <p className="text-lg font-semibold" style={{paddingBottom:"14px"}}>บริษัท ครีเอทเดอร์ จำกัด</p>
                  <p className="text-base font-normal">092-793-9094</p>
                  <p className="text-base font-normal">Createder66@gmail.com</p>
                </div>
              </div>
        </div>
        <div className="absolute right-0" style={{marginTop:"81px", marginRight:"135px"}}>
          <Form/>
        </div>
      </div>
      <div className="md:hidden flex justify-center">
        <Form/>
      </div>
    </div>
  )
}
