import CardList from "@/components/Card"
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect,useState } from "react"
import axios from "axios";
import { useEffectOnce } from 'usehooks-ts'
import ReactMarkdown from "react-markdown";


export default function article() {

  const [artData,setArtData] = useState<any>();

  function getSlug(path:string){
    return "/article/"+path
  }

  function getImg(path:string){
    console.log("http://localhost:1337"+path);
    

    return "http://localhost:1337"+path
  }

  function getDate(date:string){

    const monthName:string[] =[      
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",]
    

    const year = date.substring(0,4)
    const m = parseInt(date.substring(5,7))
    const month = monthName[m-1]
    const day = date.substring(8,10)
    return day+" "+month+" "+year
  }

  async function getData() {
    try{
      const {data} = await axios.get("http://localhost:1337/api/articles?populate=*&locale=all")
      for(let i = 0;i<data.data.length;i++){
        console.log(getSlug(data.data[i].attributes.slug)===window.location.pathname);
        if(getSlug(data.data[i].attributes.slug)===window.location.pathname){
          setArtData(data.data[i])
        }
      }

    }catch(error){
      console.log(error)
    }
  }

  useEffectOnce(() => {
    getData()
  })



  if(!artData) return;
    return (
      <div>
        <div className="flex min-h-screen flex-col items-center justify-between " style={{ fontFamily: 'Prompt' }}>
            <div className="z-0 flex absolute w-full bg-orange-50" style={{width:"100%", height:"600px"}}>
              <div className="absolute right-0" style={{marginTop:"33.18px", marginRight:"96.43px"}}>
                <svg width="608" height="567" viewBox="0 0 608 567" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.05">
                <path d="M318.677 178.83V250.776C283.446 221.412 246.99 206.717 209.307 206.717C167.796 206.717 132.815 221.587 104.366 251.302C75.7658 280.841 61.4534 316.99 61.4534 359.747C61.4534 402.505 75.7658 437.602 104.366 466.64C132.966 495.679 168.046 510.174 209.557 510.174C231.026 510.174 249.242 506.694 264.255 499.735C272.637 496.255 281.294 491.574 290.302 485.666C299.285 479.758 308.743 472.624 318.702 464.287V537.536C283.822 557.187 247.19 567 208.807 567C151.056 567 101.788 546.923 60.978 506.769C20.3176 466.265 0 417.45 0 360.248C0 308.979 17.0148 263.268 51.0193 223.114C92.8807 173.923 147.053 149.34 213.511 149.34C250.903 149.34 284.848 159.153 318.702 178.805L318.677 178.83Z" fill="url(#paint0_linear_53_1355)"/>
                <path d="M318.725 372.723V0.176025H397.1C434.673 0.176025 464.368 3.88383 486.14 11.2764C509.516 18.5067 530.73 30.8122 549.76 48.1927C588.309 83.2551 607.571 129.348 607.571 186.449C607.571 243.55 587.495 290.038 547.32 325.424C527.152 343.129 506.03 355.435 483.933 362.341C463.276 369.27 434.022 372.723 396.124 372.723H318.702H318.725ZM375.096 319.886H400.492C425.82 319.886 446.871 317.221 463.648 311.914C480.424 306.283 495.574 297.361 509.12 285.125C536.864 259.865 550.736 226.981 550.736 186.449C550.736 145.918 537.027 112.454 509.608 87.0325C484.932 64.345 448.568 53.0129 400.492 53.0129H375.096V319.863V319.886Z" fill="url(#paint1_linear_53_1355)"/>
                </g>
                <defs>
                <linearGradient id="paint0_linear_53_1355" x1="159.351" y1="149.34" x2="159.351" y2="567" gradientUnits="userSpaceOnUse">
                <stop stop-color="#171717"/>
                <stop offset="1" stop-color="#737373"/>
                </linearGradient>
                <linearGradient id="paint1_linear_53_1355" x1="463.137" y1="0.176025" x2="319.225" y2="373.261" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF971A"/>
                <stop offset="1" stop-color="#FCD34D"/>
                </linearGradient>
                </defs>
                </svg>
              </div>
            </div>
            <div className="z-10 h-full" style={{width:"822px"}}>
              <div>
                <div className="flex mt-16">
                  <p className="text-slate-500">{artData.attributes.createBy}</p>
                  <p className="ml-4 text-slate-500">{getDate(artData.attributes.createdAt)}</p>
                </div>
                <div className="text-5xl font-medium mt-6" style={{lineHeight:"57.6px"}}>
                  <p>{artData.attributes.title}</p>
                </div>
                <div className="flex mt-6">
                  <p className="text-slate-500">หมวดหมู่ : </p>
                  {
                  artData.attributes.categories.data.map((cat:any) =>
                    <p className="pl-4 text-orange-400">{cat.attributes.name}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="z-20 mx-40 pt-9" style={{maxWidth:"960px",maxHeight:"502.4px"}}>
              <img style={{maxWidth:"960px",maxHeight:"502.4px"}} src={getImg(artData.attributes.photo.data[0].attributes.url)}></img>
            </div>
            <div className="h-full text-lg " style={{marginTop:"64.6px",marginLeft:"309px",marginRight:"309px",maxWidth:"822px"}}>
                <ReactMarkdown  children={artData.attributes.content}/>
              </div>
        </div>
        <div style={{ fontFamily: 'Prompt' }}>
          <div className="flex flex-col mx-20 h-40 mt-16 " style={{maxWidth:"1280px"}}>
                <div className="ml-6 p-4" style={{width:"228px",height:"68px"}} >
                  <p className="text-3xl font-medium">แท็กที่เกี่ยวข้อง</p>
                </div>
                <div className="ml-6">
                  <div className="p-4 flex mt-4 flex-row">
                    <div className="bg-orange-400 w-auto mr-4"style={{height:"44px",borderRadius:"32px"}}>
                      <p className="px-4 py-3 text-white">ยิงแอด</p>
                    </div>
                    <div className="bg-orange-400 w-auto mr-4"style={{height:"44px",borderRadius:"32px"}}>
                      <p className="px-4 py-3 text-white">ร้านอาหาร</p>
                    </div>
                    <div className="bg-orange-400 w-auto mr-4"style={{height:"44px",borderRadius:"32px"}}>
                      <p className="px-4 py-3 text-white">โคราช</p>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="flex flex-col pt-8 mx-20 " style={{marginBottom:"58px"}}>
                <div className="ml-6 p-4">
                  <p className="text-3xl font-medium">บทความอื่นๆ</p>
                </div>
                <div className="pl-10 pt-4 flex ">
                  <CardList/>
                  <CardList/>
                  <CardList/>
                  <CardList/>
                </div>
              </div>
          </div>
      </div>
    )
  }
  