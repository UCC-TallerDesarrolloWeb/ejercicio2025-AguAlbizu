import "@styles/home.css"
import yogaImg from "../assets/HOME/yoga.webp";
import zumbaImg from "../assets/HOME/zumba.jpg";

const Home = () => {
    return (
        <div className="card-home">
            <div>
                <img src="../../public/home/funcional.jpg" alt="Funcional" />
                <h2>Funcional</h2>
            </div>
            <div>
                <img src="../../public/home/taekwondo.jpg" alt="Taekwondo" />
                <h2>Taekwondo</h2>
            </div>
            <div>
                <img src={yogaImg} alt="Yoga" />
                <h2>Yoga</h2>
            </div>
            <div>
                <img src={zumbaImg} alt="Zumba" />
                <h2>Zumba</h2>
            </div>
        </div>
    )
}

export default Home;