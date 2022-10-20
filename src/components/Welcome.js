import React from "react";
import line_up from '../assets/img/line-up-x.png';
import surveyor from '../assets/img/survey.png';
import smiley from '../assets/img/smiley.png';
import logo from '../assets/img/logo.png';
import ryan from '../assets/img/ryan.jpg';
import rizal from '../assets/img/rizal.jpg';
import { Link } from "react-router-dom";
import "../custom.css"

export default function Welcome() {
  return (
    <section className=" bg-gradient-to-r from-gradient3/30 via-gradient2/80 to-gradient1/40 ...">
      <div className="flex text-center mx-auto items-center justify-center lg:mt-0 sm:w-full md:w-3/4 lg:w-1/2 xl:2-1/2">
        <a href="https://sultradata.com/project/antrian-backend">
          <img src={logo}
            alt="logo" className="object-contain py-6" /></a>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">

        <h2 className="text-3xl font-bold text-center tracking-tight text-pst" style={{ marginBottom: 10 }}>Selamat Datang di PST BPS Provinsi Sulawesi Tenggara 👋</h2>
        {/* <div className='py-3 mt-3 mb-12 columns-1 px-2 text-center'>
            <Link to="/daftar" className="items-center justify-center px-4 py-4 rounded-xl shadow-sm text-base font-medium text-white bg-pst hover:bg-blue hover:text-white">
              Ambil Antrian
            </Link>
            <Link to="/survey" className="items-center justify-center px-4 py-4 rounded-xl shadow-sm text-base font-medium text-white bg-pst hover:bg-blue hover:text-white">
              Survey Kepuasan
            </Link>
          </div> */}

        <div className="full-remaining-height">
          <div class="grid grid-col-1 gap-0 py-9">
            <div></div>
            <Link to="/daftar" className="text-3xl items-center justify-center px-4 py-4 rounded-xl shadow-md text-base font-medium text-black bg-pst hover:bg-blue hover:text-white/0 custombutton"
              style={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "30px", backgroundColor: "#ffc500", height: "100%", minHeight: "700px" }}
            >
              <img className="w-auto"
                src={line_up}
                alt="logo"
              />
              Ambil Antrean
            </Link>
          </div>

          <div class="grid grid-cols-2 gap-10">
            <div>
              <p className="mt-6 text-2xl font-semibold text-gray-800">Sudah selesai menerima layanan?</p>
              <h1 className="text-5xl font-medium mt-0 sm:text-6xl text-pst">Bantu Kami
                <span className="font-bold text-pst leading-tight "> Jadi Lebih Baik!</span> 😊👉
              </h1>

            </div>

            <div>
              <Link to="/survey" className="text-3xl items-center justify-center px-4 py-4 rounded-xl shadow-md text-base font-medium text-white bg-pst hover:bg-blue hover:text-white custombutton"
                style={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "40px", marginBottom: 40 }}
              >
                <img className="w-auto"
                  src={smiley}
                  alt="logo"
                />
                Survey Kepuasan
              </Link>
            </div>
          </div>


        </div>





      </div>
    </section>
  )
}