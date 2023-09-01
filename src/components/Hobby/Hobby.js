import React from 'react'
import './hobby.css'

export default function Hobby() {
    return (
        <div className='container main_hobby_container pt-5'>
            <div className='row'>
                <div className='col-7 sub_left_hobby_container'>Insta & Yt</div>
                <div className='col-5 sub_right_hobby_container'>
                    <div className='row sub_right_hobby_skill_container'>
                        Skills
                    </div>
                    <div className='row'>
                        <div className='col-4'>See More</div>
                        <div className='col-4'>Instagram</div>
                        <div className='col-4'>YouTube</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
