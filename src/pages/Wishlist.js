import React from 'react'
import BreadCrumbs from './BreadCrumbs'
import Meta from './Meta'

const Wishlist = () => {
    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumbs title=" Wishlist" />
            <div className="wishlist-wrapper home-wrapper-2 py-5 ">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="crosss" className='position-absolute cross img-fluid' />
                                <div className="wishlist-card-image">
                                    <img src="images/watch.jpg" alt="watch" className='img-fluid w-100'/>
                                </div>
                                <div className="py-3 px-3">
                                <h5 className="title">
                                    Lorem ipsum dolor sit amet consectetur, 
                                </h5>
                                <h6 className="price">$ 100</h6>

                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="crosss" className='position-absolute cross img-fluid' />
                                <div className="wishlist-card-image">
                                    <img src="images/watch.jpg" alt="watch" className='img-fluid w-100'/>
                                </div>
                                <div className="py-3 px-3">
                                <h5 className="title">
                                    Lorem ipsum dolor sit amet consectetur, 
                                </h5>
                                <h6 className="price">$ 100</h6>

                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="crosss" className='position-absolute cross img-fluid' />
                                <div className="wishlist-card-image">
                                    <img src="images/watch.jpg" alt="watch" className='img-fluid w-100'/>
                                </div>
                                <div className="py-3 px-3">
                                <h5 className="title">
                                    Lorem ipsum dolor sit amet consectetur, 
                                </h5>
                                <h6 className="price">$ 100</h6>

                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="crosss" className='position-absolute cross img-fluid' />
                                <div className="wishlist-card-image">
                                    <img src="images/watch.jpg" alt="watch" className='img-fluid w-100'/>
                                </div>
                                <div className="py-3 px-3">
                                <h5 className="title">
                                    Lorem ipsum dolor sit amet consectetur, 
                                </h5>
                                <h6 className="price">$ 100</h6>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Wishlist
