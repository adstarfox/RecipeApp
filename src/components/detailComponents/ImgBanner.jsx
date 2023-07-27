import './ImgBanner.css'

const ImgBanner = ({img, name}) => {
    return (
        <div className="img-banner"
        style={{
            background: `linear-gradient(
              190deg,
              rgba(0, 0, 0, 0.8),
              rgba(0, 0, 0, 0.1)),
              url(${img})`,
            backgroundSize: '100%',
            backgroundPosition: 'center'
          }}>
            <h1>{name}</h1>
        </div>
    )
}

export default ImgBanner