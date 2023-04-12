import React,{useEffect,useState} from "react"
import axios from "axios";

interface Form{
    name: string;
    tel: string;
    context: string;
    security: boolean;
    news: boolean;
}

const initialData:Form = {
    name: "",
    tel: "",
    context: "",
    security: true,
    news: false,
};


export default function Form(){
    const [result,setResult] = useState<Form>(initialData);
    
    const handleChange = ( {target} : any) => {
        try{
            setResult((currentData) => ({
                ...currentData,
                [target.name]: target.value,
              }));
        }
        catch(error){
            console.log("error in handleChange Form :",error);
        }
      };


    const onChangeCheckBox = ({target} : any) =>{
        try{

            if(target.name==="security"){
                setResult((currentData) => ({
                    ...currentData,
                    [target.name]: !(result.security)
                }))
            }else if(target.name==="news"){
                setResult((currentData) => ({
                    ...currentData,
                    [target.name]: !(result.news)
                }))
            }
        }
        catch(error){
            console.log("error in onChangeCheckbox Form :",error);
        }
    }
    const handleButton = async() =>{
        const url = "http://localhost:1337/api/contacts";

        try {
            if (
              result.name &&
              result.tel
            ) {
              const res = await axios.post(url, {
                data: result,
              }
              );
              await alert("ส่งข้อมูลสำเร็จ")
            }
          } catch (error) {
            console.log(result)
            console.log(error);
          }
    }
    return(
        <div>
            <div className="bg-white rounded-2xl shadow-lg"style={{ width:"480px",height:"688px",fontFamily: 'Prompt' }}>
                <div className="px-8 py-12" >
                    <div className="" style={{width:"416px",height:"88px"}}>
                        <p className="text-neutral-600 text-sm">ชื่อ*</p>
                        <input className="text-sm mt-2 border rounded-2xl border-slate-200 w-full p-4 text-gray-700 focus:border-slate-400" 
                        style={{}} placeholder="Default input text" 
                        type="name" name="name" onChange={handleChange}
                        value={result.name}></input>
                    </div>
                    <div style={{width:"416px",height:"88px",marginTop:"32px"}}>
                        <p className="text-neutral-600 text-sm">เบอร์โทร*</p>
                        <input className="text-sm mt-2 border rounded-2xl border-slate-200 w-full p-4 text-gray-700" 
                        style={{marginBottom:"15px"}} placeholder="Default input text" 
                        type="tel" name="tel" onChange={handleChange}
                        value={result.tel}></input>
                    </div>
                    <div style={{width:"416px",height:"120px",marginTop:"32px"}}>
                        <p className="text-neutral-600 text-sm">ข้อความ</p>
                        <textarea className="text-sm px-4 py-2 border rounded-2xl mt-2 border-slate-200 w-full text-gray-700" 
                        style={{marginBottom:"15px",height:"88px",resize:"none"}} placeholder="ข้อความของคุณ" 
                        name="context" onChange={handleChange}
                        value={result.context}></textarea>
                    </div>
                    <div className="mt-8">
                        <div className="flex text-sm">
                            <label className="w-5 h-5 ">
                                <input
                                type="checkbox" 
                                id="checkbox1"
                                name="security" 
                                onChange={onChangeCheckBox}
                                checked={result.security}
                                className="peer shrink-0 w-full h-full bg-white  appearance-none rounded border border-solid border-slate-300 checked:bg-indigo-50 checked:border-indigo-500 "
                                style={{padding:"5px"}}/>
                                <span className="peer-checked:absolute border-radius rounded-sm bg-indigo-500 left-0"
                                style={{width:"10px",height:"10px",marginLeft:"37px",marginTop:"5px",marginBottom:"5px"}}></span>
                            </label>
                            <label htmlFor="checkbox1" className="pl-2 peer-checked:text-indigo-500">รับทราบนโยบายความปลอดภัย และยืนยันการส่งข้อมูล</label>
                        </div>
                        <div className="flex text-sm pt-2">
                            <label className="w-5 h-5 ">
                                <input
                                type="checkbox" 
                                id="checkbox2"
                                name="news" 
                                onChange={onChangeCheckBox}
                                checked={result.news}
                                className="peer shrink-0 w-full h-full bg-white  appearance-none rounded border border-solid border-slate-300 checked:bg-indigo-50 checked:border-indigo-500 "
                                style={{padding:"5px"}}/>
                                <span className="peer-checked:absolute border-radius rounded-sm bg-indigo-500 left-0"
                                style={{width:"10px",height:"10px",marginLeft:"37px",marginTop:"5px",marginBottom:"5px"}}></span>
                            </label>
                            <label htmlFor="checkbox2" className="pl-2 peer-checked:text-indigo-500">ยอมรับข่าวสาร ข้อเสนอ และข้อมูลที่เป็นประโยชน์จาก บ้านบ้าน</label>
                        </div>
                    </div>
                    <div className="mt-8 text-slate-500">
                        <p className="text-xs">กรุณาระบุข้อมูลที่เป็นจริงเพื่อให้เจ้าหน้าสามารถติดต่อกลับได้</p>
                        <p className="text-xs">หลังจากได้รับข้อมูลของคุณแล้ว</p>

                    </div>
                    <div className="mt-8">
                        <button 
                        onClick={handleButton}
                        className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded" 
                        style={{width:"149px", height:"56px"}}
                        >
                        ส่งข้อความ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}