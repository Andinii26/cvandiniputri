import foto from "./FOTO.jpeg";


function Profile() {
  return (<img src={foto.src} alt="Andini Putri"  className="fotoku" />
  );
}

export default function Gallery() {
    return (
        <div className="container mx-auto p-2 text-center">
        <h1 className="text-gray-400 font-bold ">CV ONLINE </h1>
        <h2 className="text-3x1">Andini Putri</h2>
        <Profile />
        <p>
          Saya adalah seorang mahasiswa semester 5 jurusan komputerisasi
          Akuntansi. Hobi saya adalah membaca Novel
  
        </p>
        </div>
        )
        }