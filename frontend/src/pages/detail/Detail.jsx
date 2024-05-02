import React, {useContext} from "react";
import SliderComponent from "../../components/Slider";
import AvatarComponent from "../../components/Avatar.jsx";
import CommentSlider from "../../components/CommentSlider.jsx";
import StarRating from "../../components/Stars.jsx";
import {MyContext} from "../../App.jsx";



export default function Detail(){
    const {detailItem} = useContext(MyContext)
    console.log(detailItem,'detail')
    return(
        <div className="container-fluid bg-secondary-subtle">

            <div className="container">

                <div className="row gap-lg-3">
                    <div className="col-12 col-md-7 mt-5 bg-light  text-dark p-5" style={{height: "500px"}}>
                        <SliderComponent detailItem={detailItem} />

                    </div>
                    <div className="col-12 col-md-4 mt-5 bg-light" style={{height: "200px"}}>
                        <div className="d-flex justify-content-between pt-3">
                            <span>
                                  {new Date(detailItem.created_time).toLocaleString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                    hour: 'numeric',
                                                    minute: 'numeric',
                                                    timeZone: 'UTC' // Adjust timezone as needed
                                                })}
                            </span>

                            <i className="fa-regular fa-heart"></i>

                        </div>
                        <div className={'pt-3'}>
                            <p>{detailItem.title}</p>
                            <b>
                                {detailItem.price}$

                            </b>&nbsp;<small>Договорная</small>
                            <br/><br/>

                            <div className={'w-100 mx-auto'}>
                                <button className="btn btn-dark text-uppercase w-100 rounded-0"
                                        style={{background: 'rgb(0, 47, 52);'}}>
                                    telefon raqam:{detailItem.phone_number}
                                </button>
                            </div>
                        </div>

                        <div className="bg-light col-md-4 mt-5 w-100 rounded">
                            <div className="card p-3">
                                <h5>Foydalanuvchi</h5>
                                <div className="d-flex gap-3">
                                    <AvatarComponent/>
                                    <span className={'fw-light'}><strong>{detailItem.user.username}</strong>
                                    <br/>
                                        Olx <b>fevral 2018 yil</b><br/>
                                        Online <b>Kecha 19:00</b>
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-12">
                            <div className="card mt-5 w-100 p-3">
                                <div className="d-flex justify-content-between w-100">
                                    <div className={''}>
                                        <svg width="1em" height="1em" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg" className="css-kaz1nj">
                                            <path
                                                d="M12 2c4.963 0 9 4.037 9 9 0 4.701-5.034 9.195-7.328 11h-3.344C8.035 20.195 3 15.701 3 11c0-4.963 4.037-9 9-9zm0 2c-3.86 0-7 3.14-7 7 0 3.75 4.614 7.981 6.995 9.764C13.749 19.434 19 15.108 19 11c0-3.86-3.14-7-7-7zm0 3c2.206 0 4 1.794 4 4 0 2.205-1.794 4-4 4-2.205 0-4-1.795-4-4 0-2.206 1.795-4 4-4zm0 2c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"
                                                fill="currentColor" fill-rule="evenodd"></path>
                                        </svg>
                                        <b>Karta</b>
                                        <p>{detailItem.adress}</p>
                                    </div>
                                    <div>
                                        <iframe
                                            src={detailItem.location}
                                            style={{border: "none"}} height={80} width={200} allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 bg-light-subtle mt-3 col-md-12" style={{height: '200px'}}>

                            <div className="d-flex align-items-center" style={{height: '100%'}}>
                                <div className="w-75 mx-auto">
                                    <CommentSlider/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-7 bg-light p-5" style={{height: "max-content"}}>
                        <h3>Name</h3>
                        <ul>
                            <li>Флаг Узбекистана</li>
                            <li>Отличного качество</li>
                            <li>Производства Китай</li>
                            <li>Размер 150 см 90 см</li>

                        </ul>
                        <p>
                            Футбол уйинларида спорт мусобакаларида уз жамоангизни севимли спортчиларингизни Узбекистон
                            Байроги билан куллаб кувватлан Олга Узбекистон !!!z
                        </p>

                    </div>
                    <div className="col-12 col-md-7 bg-light p-5" style={{height: "max-content"}}>
                        <div className={'d-flex justify-content-between'}>
                            <div>
                                <h5>Foydalanuvchi</h5>
                                <div className="d-flex gap-3">
                                    <AvatarComponent/>
                                    <span className={'fw-light'}><strong>Asror</strong>
                                    <br/>
                                        Olx <b>fevral 2018 yil</b><br/>
                                        Online <b>Kecha 19:00</b>
                                    </span>
                                </div>
                            </div>
                            <div>

                                <button className={'btn btn-dark rounded-0 mt-5'}><b>Ulanish uchun Tel:</b> +998(91)922-6296
                                </button>
                            </div>
                        </div>


                    </div>
                    <div className="col-12 bg-light-subtle col-md-7 p-3">
                        <h3>Izoh qoldirish</h3>
                        <form action="">
                            <StarRating totalStars={5}/>
                            <br/>
                            <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
                            <button className={'mt-3 btn btn-outline-primary'}>Qo'shish</button>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    )
}