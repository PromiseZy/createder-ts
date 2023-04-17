import Contactl from "@/components/contactl"
import Contacts from "@/components/contacts"

export default function contact(){
    return(
        <div>
            <div className="xl:inline hidden min-h-screen flex-col items-center justify-between ">
                <Contactl/>
            </div>
            <div className="xl:hidden inline min-h-screen flex-col items-center justify-between">
                <Contacts/>
            </div>
        </div>
    )
}