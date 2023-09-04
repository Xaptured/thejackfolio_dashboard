import React from 'react'
import './hobby.css'

// export default function Hobby(props) {
//     const { skillsProp } = props;
//     const { videosProp } = props;
//     const { postsProp } = props;

//     return (
//         <div className='container main_hobby_container pt-5'>
//             <div className='row'>
//                 <div className='col-7 sub_left_hobby_container'>{postsProp.response.data[0].media_type}</div>
//                 <div className='col-5 sub_right_hobby_container'>
//                     <div className='row sub_right_hobby_skill_container'>
//                         {skillsProp.skills.PROFESSIONAL.map(skill => <h6>{skill}</h6>)}
//                     </div>
//                     <div className='row'>
//                         <div className='col-4'>See More</div>
//                         <div className='col-4'>Instagram</div>
//                         <div className='col-4'>YouTube</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default function Hobby() {

    return (
        <div className='container main_hobby_container pt-5'>
            <div className='row'>
                <div className='col-7 sub_left_hobby_container'>Yt & Insta</div>
                <div className='col-5 sub_right_hobby_container'>
                    <div className='row sub_right_hobby_skill_container'>
                        Skills
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <button type="button" class="btn btn-outline-light">See More</button>
                        </div>
                        <div className='col-4'>
                            <button type="button" class="btn btn-outline-light">Instagram</button>
                        </div>
                        <div className='col-4'>
                            <button type="button" class="btn btn-outline-light">YouTube</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
