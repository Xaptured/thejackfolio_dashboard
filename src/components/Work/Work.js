import React from 'react'
import './work.css'

export default function Work() {
    return (
        <div className='container main_work_container pt-5'>
            <div className='row'>
                <div className='col-7 sub_left_work_container'>Orgs & Projects</div>
                <div className='col-5 sub_right_work_container'>
                    <div className='row sub_right_work_skill_container'>
                        Skills
                    </div>
                    <div className='row'>
                        <div className='col-6'>See More</div>
                        <div className='col-6'>Download CV</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
