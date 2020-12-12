import React from 'react';

import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            {/* <div>
                <img src='https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg' />
            </div> */}
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large} className={style.avatar} alt=""/>
                <ProfileStatus 
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
            </div>
        </div>
    )
}

export default ProfileInfo;