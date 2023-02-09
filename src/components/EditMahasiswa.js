import React, { useState, useEffect }from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const BACKEND_URL = 'http://localhost:4000';

const EditMahasiswa = () => {
    const [nama, setnama] = useState([]);
    const [nim, setnim] = useState([]);
    const [alamat, setalamat] = useState([]);
    const [nomorTelepon, setnomorTelepon] = useState([]);
    
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(() => {
        returnUserById();
    }, []);

    const updateMhs = async(e) => {
        e.preventDefault();
        try {
            await axios.patch(`${BACKEND_URL}/api/mahasiswa/${id}`, {
                nama, nim, alamat, nomorTelepon
            });
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const returnUserById = async () => {
        const response = await axios.get(`${BACKEND_URL}/api/mahasiswa/${id}`)
        setnama(response.data.data.nama)
        setnim(response.data.data.nim)
        setalamat(response.data.data.alamat)
        setnomorTelepon(response.data.data.nomorTelepon)
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updateMhs}>
                <div className="field">
                    <label className='label'>Nama Lengkap</label>
                    <div className="control">
                        <input type="text" className="input" name="nama" 
                        value={
                            nama
                        }
                        onChange={(e) => { setnama(e.target.value) }}
                        id="nama" />
                    </div>
                </div>
                <div className="field">
                    <label className='label'>NIM</label>
                    <div className="control">
                        <input type="text" className="input" 
                        value={
                            nim
                        }
                        onChange={(e) => { setnim(e.target.value) }}
                        name="nim" id="nim" />
                    </div>
                </div>
                <div className="field">
                    <label className='label'>Alamat</label>
                    <div className="control">
                        <input type="text" className="input" 
                        value={
                            alamat
                        }
                        onChange={(e) => { setalamat(e.target.value) }}
                        name="alamat" id="alamat" />
                    </div>
                </div>
                <div className="field">
                    <label className='label'>Nomor Telepon</label>
                    <div className="control"> 
                        <input type="text" className="input" 
                        value={
                            nomorTelepon
                        }
                        onChange={(e) => { setnomorTelepon(e.target.value) }}
                        name="nomorTelepon" id="nomorTelepon" />
                    </div>
                </div>
                <div className="field">
                    <button type="submit" className="button is-success">Simpan</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditMahasiswa