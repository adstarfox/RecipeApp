import './ImgBanner.css'

const ImgBanner = ({img, name}) => {
    return (
        <div className="img-banner"
        style={{
            backgroundImage: `url(${img})`
            // backgroundSize: 'cover',
            // backgroundPosition: 'center'
          }}>
            <h1>{name}</h1>
        </div>
    )
}

export default ImgBanner