
import Button from "./../comman/Button"; 
import Makha2 from "./../../assets/home/herosection/makha.jpg"
import { useState } from "react";
function Inovatives (){
    const [read , setRead] = useState(false);
    return <div className="flex flex-col gap-8">

     <div className="grid grid-cols-2 gap-10">
    <img src={Makha2.src} alt="" /> <div className="flex flex-col justify-center gap-2">
        <p className="text-brandColor text-3xl font-bold">INITIATIVES OF THE MINISTRY</p>
        <p>Hajj Policy-2024 / Hajj & Umrah (Regulation) Act, 2023, Upscaling of Route to Makkah Project ‘Road to Makkah’, Zaireen Management Policy , PSDP Projects   Kartarpur Bridge and Recycling Plant for shaheed Quran papers projects are extremely important, Ban on Illegal printing/publication of the Holy Quran, this issue was reported from Chenab Nager, Punjab, Re-Composition of National Commission for Minorities, Pakistan Gurdwara Parbandhak Committee (PSGPC)</p>
        <div onClick={()=>{setRead(!read)}}><Button active={true} text={!read?"Read More":"Read Less"}/></div>
    </div>
    </div>
       <div className={`flex flex-col gap-5 ${read?"h-full opacity-100":"h-0 opacity-0"}`}>
        <div>
        <p className="text-2xl text-brandColor font-semibold">Hajj Policy-2024 / Hajj & Umrah (Regulation) Act, 2023</p>
        <p>Hajj & Umrah (Regulation) Act, 2023 has been approved by the Parliament and will be implemented after formulation of rules and regulations under this Act</p>
        </div>
        <div>
        <p className="text-2xl text-brandColor font-semibold">Upscaling of Route to Makkah Project</p>
        <p>‘Road to Makkah’ project was initiated from Islamabad  airport during Hajj Operation-2019 and 25000 Hajis benefited
The pre-conditions shared by KSA for upscaling the project have been completed by M/o RA & IH
Approval of Royal Council of Saudi Arabia is required for upscaling the project to other four stations.</p>
        </div>
        <div>
        <p className="text-2xl text-brandColor font-semibold">Reconstruction of Pakistan House, Madinah Munawwarah</p>
        <p>Saudi Authorities issued notice on 31.01.2023 for the demolition of Pakistan House Madinah-II
The matter was taken with Saudi Authorities and Ambassador to Saudi Arabia from Pakistan to avoid imminent demolition
Prime Minister Office was also requested on 21.02.2023 to take up the matter with Kingship of Saudi Arabia as the Pakistan House-II is extremely important for Hajj Operation</p>
        </div>
        <div>
        <p className="text-2xl text-brandColor font-semibold">Zaireen Management Policy</p>
        <p>Federal Cabinet approved Zaireen  Management Policy on 13th April,2021
Signing of MOUs with IRAN,IRAQ and Syria under process
Rules under Hajj and Umrah Act are being framed to regulate Umrah</p>
        </div>
       </div>
    </div>
}
export default Inovatives;