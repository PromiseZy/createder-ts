import React,{useEffect,useState} from "react"
import axios from "axios";
import { log } from "console";

interface Data{
    name: string;
    email: string;
    tel: string;
    context: string;
}

const initialData:Data = {
    name: "",
    email: "",
    tel: "",
    context: "",
};


export default function Form(){
    const [result,setResult] = useState<Data>(initialData);
    
    const handleChange = ( {target} : any) => {
        setResult((currentUser) => ({
          ...currentUser,
          [target.name]: target.value,
        }));
      };

    const handleButton = async() =>{
        const url = "http://localhost:1337/api/contacts";

        try {
            if (
              result.name &&
              result.email &&
              result.tel &&
              result.context
            ) {
              const res = await axios.post(url, {
                data: result,
              }
              );
              console.log({ res });
              await alert("ส่งข้อมูลสำเร็จ")
            }
          } catch (error) {
            console.log(result)
            console.log(error);
            
          }
    }
    return(
        <div>
            <div className="bg-white rounded-2xl shadow-lg"style={{ width:"470px",height:"612px",fontFamily: 'Prompt' }}>
                <div className="" style={{padding:"60px"}}>
                    <p className="text-2xl font-semibold">ส่งข้อความหาเรา</p>
                    <div className="" style={{width:"350px",height:"75px",marginTop:"35px"}}>
                        <p className="text-neutral-600 text-sm">ชื่อ*</p>
                        <input className="text-sm border-b appearance-none bg-transparent w-full text-gray-700 focus:outline-none" 
                        style={{paddingTop:"25px"}} 
                        type="name" name="name" onChange={handleChange}
                        value={result.name}></input>
                    </div>
                    <div style={{width:"350px",height:"75px",marginTop:"25px"}}>
                        <p className="text-neutral-600 text-sm">อีเมล*</p>
                        <input className="text-sm border-b appearance-none bg-transparent w-full text-gray-700 focus:outline-none" 
                        style={{paddingTop:"25px",marginBottom:"15px"}} 
                        type="email" name="email" onChange={handleChange}
                        value={result.email}></input>
                    </div>
                    <div style={{width:"350px",height:"75px",marginTop:"25px"}}>
                        <p className="text-neutral-600 text-sm">เบอร์โทร*</p>
                        <input className="text-sm border-b appearance-none bg-transparent w-full text-gray-700 focus:outline-none" 
                        style={{paddingTop:"25px",marginBottom:"15px"}} 
                        type="tel" name="tel" onChange={handleChange}
                        value={result.tel}></input>
                    </div>
                    <div style={{width:"350px",height:"75px",marginTop:"25px"}}>
                        <p className="text-neutral-600 text-sm">ข้อความ*</p>
                        <input className="text-sm border-b appearance-none bg-transparent w-full text-gray-700 focus:outline-none" 
                        style={{paddingTop:"25px",marginBottom:"15px"}} placeholder="ข้อความของคุณ" 
                        type="context" name="context" onChange={handleChange}
                        value={result.context}></input>
                    </div>
                    <div style={{paddingTop:"20px"}}>
                        <button 
                        onClick={handleButton}
                        className="bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded" 
                        style={{width:"120px", height:"45px"}}
                        >
                        Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}