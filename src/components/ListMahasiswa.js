import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BACKEND_URL = 'http://localhost:4000';
const ListMahasiswa = () => {
    const [mahasiswa, setMahasiswa] = useState([]);

    useEffect(() => {
        getMahasiswa();
    }, []);

    const getMahasiswa = async () => {
        // const response = await axios.get(`${BACKEND_URL}/api/mahasiswa`);
        const response = await axios.get(`${BACKEND_URL}/api/mahasiswa`);
        setMahasiswa(response.data.data);
    }
    const deleteMahasiswa = async (id) => {
        await axios.delete(`${BACKEND_URL}/api/mahasiswa/${id}`);
        getMahasiswa()
    }

    return (
        <div>
            {/* <Link to="/add" className="button is-primary mt-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>NIM</th>
                        <th>Nama</th>
                        <th>Alamat</th>
                        <th>Nomor Telepon</th>
                    </tr>
                </thead>
                <tbody>
                    { mahasiswa.map((mhs, index) => (
                        <tr key={ mhs.id }>
                            <td>{ index + 1 }</td>
                            <td>{ mhs.nim }</td>
                            <td>{ mhs.nama }</td>
                            <td>{ mhs.alamat }</td>
                            <td>{ mhs.nomorTelepon }</td>
                            <td>
                                <Link to={`/edit/${mhs.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={ () => deleteMahasiswa(mhs.id) } className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table> */}
            <div className="columns mt-5 is-centered">
                <div className="column is-half">
                    <Link to="/add" className="button is-primary mt-2">Tambah</Link>
                    <table className="table is-striped is-fullwidth">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>NIK</th>
                                <th>Nama Lengkap</th>
                                <th>Alamat</th>
                                <th>No.HP</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mahasiswa.map((mhs, index) => (

                                <tr key={mhs.id}>
                                    <td>{index + 1}</td>
                                    <td>{mhs.nim}</td>
                                    <td>{mhs.nama}</td>
                                    <td>{mhs.alamat}</td>
                                    <td>{mhs.nomorTelepon}</td>
                                    <td>
                                        <Link to={`/edit/${mhs.id}`} className='button is-small is-info'>Edit</Link>
                                        <button onClick={() => { deleteMahasiswa(mhs.id) }}  className='button is-small is-danger'>Hapus</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    )
}

export default ListMahasiswa;