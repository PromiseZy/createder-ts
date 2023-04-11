import React,{useEffect,useState} from "react"

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
    
    useEffect(()=>{
        console.log(initialData)
    })

    const [result,setResult] = useState<Data>(initialData);
    return(
        <div>
            <div className="bg-white rounded-2xl shadow-lg"style={{ width:"470px",height:"612px",fontFamily: 'Prompt' }}>
                <div className="" style={{padding:"60px"}}>
                    <p className="text-2xl font-semibold">ส่งข้อความหาเรา</p>
                    <div className="" style={{width:"350px",height:"75px",marginTop:"35px"}}>
                        <p>ชื่อ*</p>
                        <input className="border-b appearance-none bg-transparent w-full text-gray-700 focus:outline-none" 
                        type="text" style={{paddingTop:"25px"}} 
                        name="name"
                        value={result.name}></input>
                    </div>
                    <div style={{width:"350px",height:"75px",marginTop:"25px"}}>
                        <p>อีเมล*</p>
                        <input className="border-b appearance-none bg-transparent w-full text-gray-700 focus:outline-none" 
                        type="text" style={{paddingTop:"25px",marginBottom:"15px"}} ></input>
                    </div>
                    <div style={{width:"350px",height:"75px",marginTop:"25px"}}>
                        <p>เบอร์โทร*</p>
                        <input className="border-b appearance-none bg-transparent w-full text-gray-700 focus:outline-none" 
                        type="text" style={{paddingTop:"25px",marginBottom:"15px"}} ></input>
                    </div>
                    <div style={{width:"350px",height:"75px",marginTop:"25px"}}>
                        <p>ข้อความ*</p>
                        <input className="border-b appearance-none bg-transparent w-full text-gray-700 focus:outline-none" 
                        type="text" style={{paddingTop:"25px",marginBottom:"15px"}} placeholder="ข้อความของคุณ" ></input>
                    </div>
                    <div style={{paddingTop:"20px"}}>
                        <button 
                        className="bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded" 
                        style={{width:"120px", height:"45px"}}>
                        Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}