import './styles.css'
import InfoItem from "./components/info-item"
const BasicInfo = () => {
    return (
        <div className='basic-info'>
            <div className='calibration-info'>
                <InfoItem title="Calibration name" value="Ro Bobbio's dev team" />
                <InfoItem title="Calibration description" value="This calibration is created to calibrate all the people of Rocío Bobbio's team, looking the best performance of each individually." />
                <InfoItem title="Notes" value="This calibration was completed successfully. With any inconvenient. Now we can move on creating a IDP for the calibrateds participants that need one." />
            </div>
            <div className='participants-info'>
                <InfoItem title="Participants" value="12" />
                <InfoItem title="Leaders" value="1" />
                <InfoItem title="Status" value="Finished." />
            </div>
            <div className='dates-info'>
                <InfoItem title="Date of creation" value="10/09/2024" />
                <InfoItem title="Date started" value="05/10/2024" />
                <InfoItem title="Date finished" value="09/10/2024" />
            </div>
          
        </div>
    )
}

export default BasicInfo