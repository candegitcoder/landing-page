import 'bootstrap/dist/css/bootstrap.css';

function About () {
    return (
        <main>
            <section className="card-group" id='about'>
            <div className='titulosabout'>
               <h1 className="carduno">Want anything to be easy with <b>LaslesVPN.</b></h1>
               <p className="carddos">Provide a network for all your needs with ease and fun using <b>LaslesVPN</b> discover interesting features from us.</p>
               <button type="button" className="btn btn-outline-danger getboton">Get Started</button>
            </div>

            <div>
                <img className="intro" src="src/assets/img/landing-image.jpeg" alt="" />
            </div>
            </section>

            <section className='rectangulo'>
            <div className="informationcard">
                <div className="infocard">
                    <img className="iconos" src="./src/assets/img/icon-users.jpeg" alt="" />
                    <div className='inforectangulo'>
                    <p className="numeros" >90+</p>
                    <p className="cardtextos">Users</p>
                    </div>
                </div>
                <div className="infocard">
                    <img className="iconos" src="./src/assets/img/icon-locations.jpeg" alt="" />
                    <div className='inforectangulo'>
                    <p className="numeros">30+</p>
                    <p className="cardtextos">Locations</p>
                    </div>
                </div>
                <div className="infocard">
                    <img className="iconos" src="./src/assets/img/icon-servers.jpeg" alt="" />
                    <div className='inforectangulo'>
                    <p className="numeros">50+</p>
                    <p className="cardtextos">Servers</p>
                    </div>
                </div>
            </div>
            </section>
        </main>
    )
};


export default About;



