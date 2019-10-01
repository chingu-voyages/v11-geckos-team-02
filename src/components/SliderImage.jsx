import React from 'react'
import knifeimg from '../assets/img/knife_banner.png'


export default function SliderImage() {
    return (
        <div className="slider_image">
            <div id="c506" className="component_ContentDisplay_Content">
                <div className="plain_content">
                    <h1 ><span >RECIPE INSPIRATION FOR  EVERY OCCASION</span></h1>
                    <h4 >
                        <span >
                            <strong>
                                <img align="baseline" alt="knife banner" height="27" src={knifeimg} title="knife banner" width="711" />
                            </strong>
                        </span>
                    </h4>

                    <h4 ><span >Search hundreds of iron rich beef and lamb recipes</span></h4>
                </div>
            </div>
        </div>
    )
}