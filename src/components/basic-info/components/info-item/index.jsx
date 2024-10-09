const InfoItem = ({title, value}) => {
    return <p className="title">{title}: <span className="text-normal">{value}</span></p>
}

export default InfoItem