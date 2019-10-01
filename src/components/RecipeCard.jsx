import React from 'react'

export default function RecipeCard(props) {
    const { image, readyInMinutes, title } = props.el

    return (
        <article className='slider__slide'>
            <a
                data-carousel-link=''
                data-internal-referrer='hp_carousel 01_Oktoberfest Recipes'
                data-referring-position='carousel 01'
                href={`${props.baseUri}${image}`}
                target='_self /'
            >
                <div className='slider__text'>
                    <h5 className='slider__title'>{title}</h5>
                    <p className='slider__description'>
                        Prepration Time: {readyInMinutes} Minutes
                    </p>
                </div>
                <img src={`${props.baseUri}${image}`} alt="dish" />
            </a>
        </article>
    )
}