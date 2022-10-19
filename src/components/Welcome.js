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
          
          <h2 className="text-3xl font-bold text-center tracking-tight text-pst" style={{marginBottom: 10}}>Selamat Datang di PST BPS Provinsi Sulawesi Tenggara 👋</h2>
          {/* <div className='py-3 mt-3 mb-12 columns-1 px-2 text-center'>
            <Link to="/daftar" className="items-center justify-center px-4 py-4 rounded-xl shadow-sm text-base font-medium text-white bg-pst hover:bg-blue hover:text-white">
              Ambil Antrian
            </Link>
            <Link to="/survey" className="items-center justify-center px-4 py-4 rounded-xl shadow-sm text-base font-medium text-white bg-pst hover:bg-blue hover:text-white">
              Survey Kepuasan
            </Link>
          </div> */}

          <div class="grid grid-col-1 gap-0 py-9">
            <div></div>
            <Link to="/daftar" className="text-3xl items-center justify-center px-4 py-4 rounded-xl shadow-md text-base font-medium text-black bg-pst hover:bg-blue hover:text-white/0 custombutton"
              style={{display: "flex", alignItems: "center", flexDirection: "column", padding: "30px", backgroundColor: "#ffc500", height:"100%"}}
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
              style={{display: "flex", alignItems: "center", flexDirection: "column", padding: "40px"}}
            >
              <img className="w-auto"
                src={smiley}
                alt="logo"
              />
              Survey Kepuasan
            </Link>
            </div>
          </div>

          {/* <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
            <div key="Perpustakaan" className="flex flex-col justify-between overflow-hidden text-left rounded-2xl transition-shadow duration-200 bg-indigo-700 shadow-lg group hover:shadow-xl hover:-translate-y-0.5">
                <blockquote className="relative p-4 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                  </svg>
                  <h1 className="px-4 mb-2 text-7xl font-bold text-white">12-A</h1>
                  <hr className="px-4 mb-6"></hr>
                  <div className="px-4 flex col-span-2 align-middle">
                    <img className="object-cover w-28 h-28 mr-2 rounded-full shadow"
                         src={ryan}
                         alt="user"/>
                    <div className="justify-center mt-4">
                        <p className="px-4 text-5xl font-bold text-white">Ryan W. Januardi</p>
                    </div>
                  </div>
                  <p className="px-4 mt-4 text-4xl font-regular text-white mb-4">Perpustakaan</p>
                </blockquote>
            </div>

            <div key="Konsultasi" className="flex flex-col justify-between overflow-hidden text-left rounded-2xl transition-shadow duration-200 bg-green shadow-lg group hover:shadow-xl hover:-translate-y-0.5">
                <blockquote className="relative p-4 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                  </svg>
                  <h1 className="px-4 mb-2 text-7xl font-bold text-white">04-B</h1>
                  <hr className="px-4 mb-6"></hr>
                  <div className="px-4 flex col-span-2 align-middle">
                    <img className="object-cover w-28 h-28 mr-2 rounded-full shadow"
                         src={wayan}
                         alt="user"/>
                    <div className="justify-center mt-4">
                        <p className="px-4 text-5xl font-bold text-white">Wayan Permana S.</p>
                    </div>
                  </div>
                  <p className="px-4 mt-4 text-4xl font-regular text-white mb-4">Konsultasi Statistik</p>
                </blockquote>
            </div>

            <div key="Rekomendasi" className="flex flex-col justify-between overflow-hidden text-left rounded-2xl transition-shadow duration-200 bg-red shadow-lg group hover:shadow-xl hover:-translate-y-0.5">
                <blockquote className="relative p-4 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                  </svg>
                  <h1 className="px-4 mb-2 text-7xl font-bold text-white">04-C</h1>
                  <hr className="px-4 mb-6"></hr>
                  <div className="px-4 flex col-span-2 align-middle">
                    <img className="object-cover w-28 h-28 mr-2 rounded-full shadow"
                         src={damara}
                         alt="user"/>
                    <div className="justify-center mt-4">
                        <p className="px-4 text-5xl font-bold text-white">Damara Utama</p>
                    </div>
                  </div>
                  <p className="px-4 mt-4 text-4xl font-regular text-white mb-4">Rekomendasi Statistik</p>
                </blockquote>
            </div>

            <div key="Penjualan" className="flex flex-col justify-between overflow-hidden text-left rounded-2xl transition-shadow duration-200 bg-orange shadow-lg group hover:shadow-xl hover:-translate-y-0.5">
                <blockquote className="relative p-4 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                  </svg>
                  <h1 className="px-4 mb-2 text-7xl font-bold text-white">02-D</h1>
                  <hr className="px-4 mb-6"></hr>
                  <div className="px-4 flex col-span-2 align-middle">
                    <img className="object-cover w-28 h-28 mr-2 rounded-full shadow"
                         src={rizal}
                         alt="user"/>
                    <div className="justify-center mt-4">
                        <p className="px-4 text-5xl font-bold text-white">Rizal Karim</p>
                    </div>
                  </div>
                  <p className="px-4 mt-4 text-4xl font-regular text-white mb-4">Penjualan Produk Statistik</p>
                </blockquote>
            </div>
          </div> */}

         
        </div>
      </section>
    )
  }