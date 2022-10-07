import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { Reorder } from 'framer-motion'
import { url_api_view } from '../components/constant';
import "../custom.css"

// reorder
function Table() {
    const [cryptoData, setCryptoData] = useState([]);
    const [tesSuara, setTesSuara] = useState(true);
    let yourDate = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    //   let date = yourDate.toISOString().split('T')[0];
    let date = new Date().getFullYear() + '-' + ("0" + (new Date().getMonth() + 1)).slice(-2) + '-' + ("0" + new Date().getDate()).slice(-2);

    // let msg = new SpeechSynthesisUtterance();
    //         msg.text = "Hello, Anbies Here!";
    //         window.speechSynthesis.speak(msg);

    useEffect(() => {
        const interval = setInterval(() => {
            fetchCryptoData();
            console.log('Table Updated');
            
            // console.log(window.SpeechSynthesisUtterance);
            // textToSpeach("Antrian 1 Silahkan menuju meja 4");
            // window.speechSynthesis.speak(
            //     new SpeechSynthesisUtterance('Oh why hello there.')
            //  );

            // console.log(inputEl.current);
            // inputEl.current.click();
            
            
            // sayit("Antrian 77 silahkan menuju meja 3");

            
        }, 5000)
        return () => clearInterval(interval);
    }, [cryptoData])

    const fetchCryptoData = async () => {
        const data = await fetch(url_api_view + `/records/queue?order=waktu_panggilan,desc&order=id&filter=waktu_kunjungan,sw,${date}`);
        const apiResponse = await data.json();
        // const sortedData = apiResponse.sort((a,b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
        const sortedData = apiResponse.records;
        // console.log(sortedData);
        setCryptoData(sortedData);
        let panggilan = sortedData.filter(data => data.is_sudah_dipanggil == 0&&data.waktu_panggilan!=null);
        if(panggilan.length>0){
            console.log(`Ada ${panggilan.length} panggilan antrian`);
            let firstTableRow = document.getElementsByClassName("shake")[0];
            firstTableRow.classList.add("shaker");


            textToSpeach(`${panggilan[0].nama_pengunjung} silahkan menuju meja ${panggilan[0].meja}`);
            textToSpeach(`${panggilan[0].nama_pengunjung} silahkan menuju meja ${panggilan[0].meja}`);
            textToSpeach(`${panggilan[0].nama_pengunjung} silahkan menuju meja ${panggilan[0].meja}`);
            
            const data = { is_sudah_dipanggil: 1 };
            fetch(url_api_view+`/records/queue/${panggilan[0].id}`, {
            // method: 'POST', // or 'PUT'
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                // firstTableRow.classList.remove("shaker");
            })
            .catch((error) => {
                console.error('Error:', error);
                // firstTableRow.classList.remove("shaker");
            });

            setTimeout(()=>{firstTableRow.classList.remove("shaker");}, 5000);



        }else{
            console.log("tidak ada panggilan antrian");

        }
    }

    async function textToSpeach(message) {
        const speach = new SpeechSynthesisUtterance(message);
        speach.voice = await speechSynthesis.getVoices()[11];
        speechSynthesis.speak(speach);
    }

    // function sayit(message){
    //     var hi = new SpeechSynthesisUtterance(message);
    //     hi.pitch = 1;
    //     hi.rate = 1;
    //     hi.voice = window.speechSynthesis.getVoices().find(voz => voz.lang == "id-ID");
    //     window.speechSynthesis.speak(hi);
    //   }

    const status = [0, "Menunggu Antrian", "Sedang Dilayani", "Selesai Dilayani"];
    const status_warna = ["white", "#E5E7EB", "yellow", "#BBF7D0"];

    if(tesSuara){
        textToSpeach("Audio Test");
        setTesSuara(false);
    }

    






    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div>
                    <h2 className="text-2xl font-semibold leading-tight">Daftar Antrian PST BPS Provinsi Sulawesi Tenggara</h2>
                    <h2 className="text-2xl font-semibold leading-tight">{yourDate.toLocaleDateString("id-ID", options)}</h2>
                </div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div
                        className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                    >
                        <Reorder.Group values={cryptoData} onReorder={setCryptoData}>
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            Antrian
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            Waktu Pendaftaran
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            Status Antrian
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cryptoData.map(cryptocurrency =>
                                        <Reorder.Item as='tr' key={cryptocurrency.price_change_percentage_24h} value={cryptocurrency.price_change_percentage_24h} className="shake" >
                                            <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                                <div className="flex">
                                                    <div className="flex-shrink-0" style={{ width: 150 }}>
                                                        <img
                                                            //   className="w-full h-full rounded-full"
                                                            className="w-full h-full"
                                                            src={"https://sultradata.com/project/antrian-api/" + cryptocurrency.foto_pengunjung_path}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="ml-3 flex flex-col justify-center content-center">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {cryptocurrency.nama_pengunjung}
                                                        </p>
                                                        {/* <p className="text-gray-600 whitespace-no-wrap">{cryptocurrency.symbol}</p> */}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                {/* <p className="text-gray-900 whitespace-no-wrap">{cryptocurrency.waktu_kunjungan}</p> */}
                                                <span
                                                    className="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                                    {cryptocurrency.waktu_kunjungan}
                                                </span>
                                                {/* <p className="text-gray-600 whitespace-no-wrap">USD</p> */}
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                {/* <p className="text-gray-600 whitespace-no-wrap">{status[cryptocurrency.id_status]}</p> */}
                                                <span
                                                    className="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
                                                    style={{ backgroundColor: status_warna[cryptocurrency.id_status] }}
                                                >
                                                    {status[cryptocurrency.id_status]}
                                                </span>
                                            </td>
                                        </Reorder.Item>
                                    )}
                                </tbody>
                            </table>
                        </Reorder.Group>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;