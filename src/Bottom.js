function Card() {
    return (
        <div className="card">
            <img src="../Minx.jpg" width="100" height="120" className="card--image" />
            <div className="card--stats">
                <img src="../favicon.ico" width="10" className="card--star" />
                <span>5.0</span>
                <span>(6) • </span>
                <span>USA</span>
            </div>
            <p>Life Lessons with JustaMinx</p>
            <p>From $136 / person</p>
        </div>
    )
}

export default Card;