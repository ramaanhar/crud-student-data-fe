import React, { useState }from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BACKEND_URL = 'http://localhost:4000';

const AddMahasiswa = () => {
    const [nama, setnama] = useState([]);
    const [nim, setnim] = useState([]);
    const [alamat, setalamat] = useState([]);
    const [nomorTelepon, setnomorTelepon] = useState([]);

    const navigate = useNavigate()

    const saveMhs = async(e) => {
        e.preventDefault();
        try {
            await axios.post(`${BACKEND_URL}/api/mahasiswa`, {
                nama, nim, alamat, nomorTelepon
            });
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveMhs}>
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

export default AddMahasiswa