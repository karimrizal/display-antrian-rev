import React from "react";
import line_up from '../assets/img/line-up-x.png';
import surveyor from '../assets/img/survey.png';
import smiley from '../assets/img/smiley_new.png';
import logo from '../assets/img/logo.png';
import ryan from '../assets/img/ryan.jpg';
import rizal from '../assets/img/rizal.jpg';
import { Link } from "react-router-dom";
import "../custom.css"

export default function Welcome() {
  return (
    <section className=" bg-gradient-to-r from-gradient3/30 via-gradient2/80 to-gradient1/40 ..." style={{minHeight: "100vh"}}>
      <div style={{minHeight: "10vh", alignItems:"center"}}>
        <div className="flex text-center mx-auto items-center justify-center lg:mt-0 sm:w-full md:w-3/4 lg:w-1/2 xl:2-1/2">
          <a href="https://sultradata.com/project/antrian-backend"><img src={logo} alt="logo" className="object-contain py-6" /></a>
        </div>
        <h2 className="text-3xl font-bold text-center tracking-tight text-pst" style={{ marginBottom: 10 }}>Selamat Datang di PST BPS Provinsi Sulawesi Tenggara 👋</h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8" style={{minHeight: "90vh"}}>
        {/* CONTAINER AMBIL ANTREAN */}
        <div class="grid grid-col-1 gap-0 py-10" style={{minHeight: "57vh"}}>
          <Link to="/daftar" className="text-3xl items-center justify-center px-4 py-4 rounded-xl shadow-md font-medium text-black bg-pst hover:bg-blue hover:text-white custombutton"
            style={{ display: "flex", alignItems: "stretch", flexDirection: "column", padding: "50px", backgroundColor: "#ffc500", height: "100%", minHeight: "auto" }}>
            <div style={{paddingBottom:"50px", textAlign:"center"}}>
                <h1 className="text-10xl font-bold mt-0 sm:text-7xl text-pst">Ambil Antrean Dulu, yuk!</h1>
            </div>
            <div class="grid grid-col-1" style={{display: "flex", alignItems:"center"}}>
              <div><img className="w-auto" src={line_up} alt="logo"/></div>
            </div>
          </Link>
        </div>

        {/* CONTAINER SURVEI KEPUASAN */}
        <div class="grid grid-cols-2 gap-0" style={{minHeight: "auto"}}>
          <div>
            <p className="mt-6 text-2xl font-semibold text-gray-800">Sudah selesai menerima layanan?</p>
            <h1 className="text-5xl font-medium mt-0 sm:text-6xl text-pst">Bantu Kami
              <span className="font-bold text-pst leading-tight "> Jadi Lebih Baik!😊👉</span> 
            </h1>
          </div>
          <div>
            <Link to="/survey" className="text-3xl items-center justify-center px-4 py-4 rounded-xl shadow-md font-medium text-white bg-pst hover:bg-blue hover:text-white custombutton"
              style={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "40px", marginBottom: 40 }}>
              <img className="w-auto" src={smiley} alt="logo"/>
              Survey Kepuasan
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}