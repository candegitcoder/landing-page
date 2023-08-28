import 'bootstrap/dist/css/bootstrap.css';

function Features () {
   return (
      <main>
         <div className='features' id='features'>
         <img className='featuresimg' src="./src/assets/img/features-img.jpeg" alt="" />
         <div>
            <h1 className='featurestext'>We Provide Many Features You Can Use</h1>
            <h2 className='featuressubtext'>You can explore the features that we provide with fun and have their own functions each feature.</h2>
            
            <div className='checkuno'>
            <img className='check' src="./src/assets/img/check.jpeg" alt="" />
            <p className='textcheck'>Powerfull online protection.</p>
            </div>
            
            <div className='checkuno'>
            <img className='check' src="./src/assets/img/check.jpeg" alt="" />
            <p className='textcheck'>Internet without borders.</p>
            </div>
            
            <div className='checkuno'>
            <img className='check' src="./src/assets/img/check.jpeg" alt="" />
            <p className='textcheck'>Supercharged VPN</p>
            </div>
            
            <div className='checkuno'>
            <img className='check' src="./src/assets/img/check.jpeg" alt="" />
            <p className='textcheck'>No specific time limits.</p>
            </div>
         </div>
         </div>
      </main>
   )
}

export default Features;
