import React from 'react';
import './Elon.css'
function Elon(props) {
    return (
        <div className="container-fluid bg-secondary-subtle p-3">
            <form action="">
                <div className={'container bg-secondary-subtle mt-5 h-auto p-5'}>
                    <div className="row">
                        <div className="col-12 bg-light  p-3">
                            <h1>Bizga e’loningiz haqida gapirib bering</h1>

                            <label htmlFor="title">Sarlavhani kiriting*</label>
                            <input type="text" className="rounded-0 form-control bg-secondary-subtle" id={'title'}
                                   placeholder={'Masalan Iphone 11 kafolati bilan'}
                            />
                            <br/>
                            <label htmlFor="category">Kategorya</label>
                            <select name="" id=""
                                    className={'form-select w-50 rounded-0 text-dark bg-secondary-subtle'}>
                                <option value="bolla">Bollar uchun</option>
                                <option value="elektr">Elektr Jihozlar</option>
                                <option value="ish">Ish</option>
                                <option value="hayvonlar">Hayvonlar</option>
                                <option value="uy">Uy</option>
                                <option value="modda&stil">Modda va Stil</option>
                                <option value="xizmatlar">Xizmatlar</option>
                                <option value="xobi">Xobi va dam olish sport</option>
                                <option value="transport">Transport</option>
                            </select>

                        </div>
                        <div className="col-12 col-md-12 bg-light mt-3 p-3">
                            <h5>Rasmlar</h5>
                            <form action="" className={'d-flex gap-3 w-50 flex-wrap'}>
                                <label htmlFor="fileInput" className="custom-file-upload ">
                                    <h5 className={'text-decoration-underline text-dark'}>Rasm
                                        Joylash</h5> {/* Image for upload button */}
                                    {/* Uncomment the line below if you want to use a button */}
                                    {/* <button type="button">Upload</button> */}
                                    <input id="fileInput" type="file"/>
                                </label>
                                <label htmlFor="fileInput" className="custom-file-upload">
                                    <i className="fa-solid fa-image bg-secondary-subtle"></i> {/* Image for upload button */}
                                    {/* Uncomment the line below if you want to use a button */}
                                    {/* <button type="button">Upload</button> */}
                                    <input id="fileInput" type="file"/>
                                </label>
                                <label htmlFor="fileInput" className="custom-file-upload">
                                    <i className="fa-solid fa-image bg-secondary-subtle"></i> {/* Image for upload button */}
                                    {/* Uncomment the line below if you want to use a button */}
                                    {/* <button type="button">Upload</button> */}
                                    <input id="fileInput" type="file"/>
                                </label>
                                <label htmlFor="fileInput" className="custom-file-upload">
                                    <i className="fa-solid fa-image bg-secondary-subtle"></i> {/* Image for upload button */}
                                    {/* Uncomment the line below if you want to use a button */}
                                    {/* <button type="button">Upload</button> */}
                                    <input id="fileInput" type="file"/>
                                </label>
                                <label htmlFor="fileInput" className="custom-file-upload">
                                    <i className="fa-solid fa-image bg-secondary-subtle"></i> {/* Image for upload button */}
                                    {/* Uncomment the line below if you want to use a button */}
                                    {/* <button type="button">Upload</button> */}
                                    <input id="fileInput" type="file"/>
                                </label>
                                <label htmlFor="fileInput" className="custom-file-upload">
                                    <i className="fa-solid fa-image bg-secondary-subtle"></i> {/* Image for upload button */}
                                    {/* Uncomment the line below if you want to use a button */}
                                    {/* <button type="button">Upload</button> */}
                                    <input id="fileInput" type="file"/>
                                </label>
                                <label htmlFor="fileInput" className="custom-file-upload">
                                    <i className="fa-solid fa-image bg-secondary-subtle"></i> {/* Image for upload button */}
                                    {/* Uncomment the line below if you want to use a button */}
                                    {/* <button type="button">Upload</button> */}
                                    <input id="fileInput" type="file"/>
                                </label>
                            </form>

                        </div>
                        <div className="col-12 col-md-12 bg-light mt-3 p-3">
                            <label htmlFor="" className={'w-100'}>
                                Tavsif*
                                <textarea name="" id="" cols="30" rows="10"
                                          className={'form-control rounded-0 w-75'}></textarea>
                                Kamida 40 ta belgi kiriting
                            </label>


                        </div>
                        <div className="col-12 col-md-12 bg-light mt-3 p-3">
                            <label htmlFor="" className={'w-100 p-3'}>
                                Joylashuv*
                                <input type="text" className="form-control rounded-0 w-25"
                                       placeholder={'Shahar yoki pochta index'}
                                />
                            </label>


                        </div>
                        <div className="col-12 col-md-12 bg-light mt-3 p-3">
                            <label htmlFor="" className={'w-100 p-3'}>
                                Murojaat qiluvchi shaxs**
                                <input type="text" className="form-control rounded-0 w-25"
                                       placeholder={'shaxs'}
                                />
                            </label>
                            <label htmlFor="" className={'w-100 p-3'}>
                                Email manzil*
                                <input type="email" className="form-control rounded-0 w-25"
                                       placeholder={'email'}
                                />
                            </label>
                            <label htmlFor="" className={'w-100 p-3'}>
                                Telefon Raqam*
                                <input type="text" className="form-control rounded-0 w-25"
                                       placeholder={'+998xxxxxxxx'}
                                />
                            </label>


                        </div>
                        <div className="col-12 col-md-12 bg-light mt-3 p-5">

                            <div className="float-end">
                                <button className={'btn p-3 rounded-0 custom-btn-hover'}>E'loni Joylashtirish</button>
                            </div>

                        </div>
                    </div>
                </div>`
            </form>
        </div>
    );
}

export default Elon;