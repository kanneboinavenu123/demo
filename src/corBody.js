import './corBody.css';

export default function CoreBody() {
    return (
        <>
            <div className="Body">
                <div className="body_one">
                    <div className='body_one_sub'>
                        <div><h2>Welcome,Chris!</h2></div>
                        <div className='account'><h5>Account</h5></div>
                        <div className='number'><h5>#10272</h5></div>
                        <div><button className='btn_1'>+ New Order</button></div>
                    </div>
                    <div className='body_one_sup'>
                        <div className='container_one'>
                            <a href='##'>
                                <div><center><svg class="SvgIcon-root SvgIcon-fontSizeMedium css-10vpbmz" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ShoppingCartCheckoutIcon" height="30px" width="30px"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2m-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21 4.96 19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7zM12 2l4 4-4 4-1.41-1.41L12.17 7H8V5h4.17l-1.59-1.59z"></path></svg></center></div>
                                <div><b>Unsubmitted Orders</b></div>
                                <span><div><button>1</button></div>
                                <div><p>In progress</p></div>
                                </span>
                            </a>
                        </div>
                        <div className='container_one '>
                            <a href='##'>
                                <div><center><svg class="SvgIcon-root SvgIcon-fontSizeMedium css-10vpbmz" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocalShippingOutlinedIcon" height="30px" width="30px"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5zm-.5 1.5 1.96 2.5H17V9.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"></path></svg></center></div>
                                <div><b>Unsubmitted Orders</b></div>
                                <span><div><button>today</button></div>
                                <div><p>arriving</p></div>
                                </span>
                            </a>
                        </div>
                        <div className='container_one'>
                            <a href='##'>
                                <div><center><svg class="SvgIcon-root SvgIcon-fontSizeMedium css-10vpbmz" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AddCardIcon" height="30px" width="30px"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h10v-2H4v-6h18V6c0-1.11-.89-2-2-2m0 4H4V6h16zm4 9v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"></path></svg></center></div>
                                <div><b>Unsubmitted Orders</b></div>
                                <span><div><button>18</button></div>
                                <div><p>open</p></div>
                                </span>
                            </a>
                        </div>
                        <div className='container_one'>
                            <a href='##'>
                                <div><center><svg class="SvgIcon-root SvgIcon-fontSizeMedium css-10vpbmz" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FactCheckOutlinedIcon" height="30px" width="30px"><g fill-rule="evenodd"><path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H4V5h16z"></path><path d="M19.41 10.42 17.99 9l-3.17 3.17-1.41-1.42L12 12.16 14.82 15zM5 7h5v2H5zm0 4h5v2H5zm0 4h5v2H5z"></path></g></svg></center></div>
                                <div><b>Unsubmitted Orders</b></div>
                                <span><div><button>0</button></div>
                                <div><p>released</p></div>
                                </span>
                            </a>
                        </div>

                    </div>
                </div>
                <div className="body-two"><img className="add" src="https://images.qas.coremarkcustomerfirst.com/resourcedetails/plantersad1.jpg" alt="add"></img></div>

            </div>
        </>
    )
}