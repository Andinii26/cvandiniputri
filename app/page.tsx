import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatpendidikan";
import RiwayatPekerjaan from "./components/riwayatpekerjaan";
import skill from "./components/skill";
import "./andini-style.css";
import Skills from "./components/skill";
import myinfos from "./components/skill";
import PersonalInfo from "./components/myinfos";
import HobbiesGallery from "./components/hobi";
import Rating from "./components/contact";

export default function CVOnline(){
 return(
<section>
 <Hero/>
 <PersonalInfo/>
 <RiwayatPendidikan/>
 <RiwayatPekerjaan/>
 <Skills/>
 <HobbiesGallery/> 
 <Rating/>
 
</section>
 )
}
 