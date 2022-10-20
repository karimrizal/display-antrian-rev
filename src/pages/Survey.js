import { ArrowLeftIcon } from '@heroicons/react/outline'
import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { useAlert } from 'react-alert';
import { Link, useNavigate } from 'react-router-dom'
import { url_api_view } from '../components/constant';
import Smiley from '../components/Smiley'

export default function Survey() {
    const [p1, setP1] = useState(0);
    const [p2, setP2] = useState(0);
    const [p3, setP3] = useState(0);
    const [p4, setP4] = useState(0);
    const [p5, setP5] = useState(0);
    const [p6, setP6] = useState(0);
    const [p7, setP7] = useState(0);
    const [p8, setP8] = useState(0);
    const [p9, setP9] = useState(0);
    const [p10, setP10] = useState(0);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const alert = useAlert();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handle submit");
        setShowErrorMessage(true);
        if (p1 > 0 && p2 > 0 && p3 > 0 && p4 > 0 && p5 > 0 && p6 > 0 && p7 > 0 && p8 > 0 && p9 > 0 && p10 > 0) {
            setIsLoading(true);
            const data = { 
                p1: p1,
                p2: p2,
                p3: p3,
                p4: p4,
                p5: p5,
                p6: p6,
                p7: p7,
                p8: p8,
                p9: p9,
                p10: p10,
            };

            fetch(url_api_view+"/records/penilaian", {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                    alert.success("Data berhasil tersimpan");
                    setTimeout(() => { navigate("/"); }, 3000);
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert.error("Data gagal tersimpan");
                    setIsLoading(false);
                });
        }
    }

    return (
       
        <div className="full-height-min-10 bg-gradient-to-r from-gradient3/30 via-gradient2/80 to-gradient1/40 flex flex-col justify-center py-10">
            {/* <div className="relative sm:max-w-4xl sm:mx-auto"> */}
            <Link to="/" style={{ position: "absolute", top: 10, left: 10, display: "flex" }} className="custombutton"><ArrowLeftIcon className="text-black h-6 w-6" style={{ marginRight: 10 }} aria-hidden="true" /> Back</Link>
            <div className="relative md:max-w-5xl md:mx-auto">
                {/* <div className="relative sm:container sm:mx-auto"> */}
                <div className="px-10 py-10 bg-white shadow-md rounded-3xl sm:p-10">
                    <div className="mx-auto">
                        {/* Headline */}
                        <div className="font-sans text-gray-700 space-y-2 sm:leading-7 text-center antialiased">
                            <h1 id="title" className="text-3xl font-semibold">Survey Kepuasan Pelayanan</h1>
                            <p id="description" className="text-lg">BPS Provinsi Sulawesi Tenggara</p>
                        </div>
                        {/* Form */}
                        <form id="survey-form" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-6 gap-4 pt-8">
                                <div className="col-span-6 sm:col-span-6">
                                    <label id="email-label" htmlFor="email" className="block text-sm font-medium text-gray-600">
                                        Persyaratan pelayanan mudah
                                    </label>
                                    <Smiley setValue={setP1} />
                                    <p className="block text-sm font-medium" style={{ color: "red", display: showErrorMessage && p1 == 0 ? "flex" : "none" }}>Isian tidak boleh kosong</p>
                                    {/* <div className="mt-1 flex rounded-md">
                                        <input id="email" type="email" name="name" className="form-input block w-full h-10 px-4 mb-2 border border-gray-300 rounded-md sm:text-sm placeholder-gray-400" placeholder="Your email address" required />
                                    </div> */}
                                </div>
                                <div className="col-span-6 sm:col-span-6">
                                    <label id="email-label" htmlFor="email" className="block text-sm font-medium text-gray-600">
                                        Prosedur/alur pelayanan mudah
                                    </label>
                                    <Smiley setValue={setP2} />
                                    <p className="block text-sm font-medium" style={{ color: "red", display: showErrorMessage && p2 == 0 ? "flex" : "none" }}>Isian tidak boleh kosong</p>
                                </div>
                                <div className="col-span-6 sm:col-span-6">
                                    <label id="email-label" htmlFor="email" className="block text-sm font-medium text-gray-600">
                                        Jangka waktu pelayanan yang diterima sesuai dengan yang ditetapkan
                                    </label>
                                    <Smiley setValue={setP3} />
                                    <p className="block text-sm font-medium" style={{ color: "red", display: showErrorMessage && p3 == 0 ? "flex" : "none" }}>Isian tidak boleh kosong</p>
                                </div>
                                <div className="col-span-6 sm:col-span-6">
                                    <label id="email-label" htmlFor="email" className="block text-sm font-medium text-gray-600">
                                        Biaya pelayanan sesuai yang ditetapkan
                                    </label>
                                    <Smiley setValue={setP4} />
                                    <p className="block text-sm font-medium" style={{ color: "red", display: showErrorMessage && p4 == 0 ? "flex" : "none" }}>Isian tidak boleh kosong</p>
                                </div>
                                <div className="col-span-6 sm:col-span-6">
                                    <label id="email-label" htmlFor="email" className="block text-sm font-medium text-gray-600">
                                        Produk pelayanan yang diterima sesuai yang dijanjikan
                                    </label>
                                    <Smiley setValue={setP5} />
                                    <p className="block text-sm font-medium" style={{ color: "red", display: showErrorMessage && p5 == 0 ? "flex" : "none" }}>Isian tidak boleh kosong</p>
                                </div>
                                <div className="col-span-6 sm:col-span-6">
                                    <label id="email-label" htmlFor="email" className="block text-sm font-medium text-gray-600">
                                        Sarana prasarana nyaman
                                    </label>
                                    <Smiley setValue={setP6} />
                                    <p className="block text-sm font-medium" style={{ color: "red", display: showErrorMessage && p6 == 0 ? "flex" : "none" }}>Isian tidak boleh kosong</p>
                                </div>
                                <div className="col-span-6 sm:col-span-6">
                                    <label id="email-label" htmlFor="email" className="block text-sm font-medium text-gray-600">
                                        Petugas pelayanan merespon dengan baik
                                    </label>
                                    <Smiley setValue={setP7} />
                                    <p className="block text-sm font-medium" style={{ color: "red", display: showErrorMessage && p7 == 0 ? "flex" : "none" }}>Isian tidak boleh kosong</p>
                                </div>
                                <div className="col-span-6 sm:col-span-6">
                                    <label id="email-label" htmlFor="email" className="block text-sm font-medium text-gray-600">
                                        Keberadaan fasilitas pengaduan mudah diketahui
                                    </label>
                                    <Smiley setValue={setP8} />
                                    <p className="block text-sm font-medium" style={{ color: "red", display: showErrorMessage && p8 == 0 ? "flex" : "none" }}>Isian tidak boleh kosong</p>
                                </div>
                                <div className="col-span-6 sm:col-span-6">
                                    <label id="email-label" htmlFor="email" className="block text-sm font-medium text-gray-600">
                                        Tidak ada diskriminasi pelayanan
                                    </label>
                                    <Smiley setValue={setP9} />
                                    <p className="block text-sm font-medium" style={{ color: "red", display: showErrorMessage && p9 == 0 ? "flex" : "none" }}>Isian tidak boleh kosong</p>
                                </div>
                                <div className="col-span-6 sm:col-span-6">
                                    <label id="email-label" htmlFor="email" className="block text-sm font-medium text-gray-600">
                                        Tidak ada pungutan liar (pungli) dalam pelayanan
                                    </label>
                                    <Smiley setValue={setP10} />
                                    <p className="block text-sm font-medium" style={{ color: "red", display: showErrorMessage && p10 == 0 ? "flex" : "none" }}>Isian tidak boleh kosong</p>
                                </div>
                                <div className="col-span-6 sm:col-span-2 mt-2">
                                    <button disabled={isLoading} type="submit" className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        <div className="flex items-center justify-center" style={{ marginRight: 10, display: isLoading ? "flex" : "none" }} >
                                            <div className="w-5 h-5 border-b-2 border-gray-900 rounded-full animate-spin"></div>
                                        </div>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
