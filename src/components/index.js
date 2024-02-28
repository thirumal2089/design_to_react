import pic  from './picture.png' ;
import './index.css' ;

const Home=() => {
    return(
     <div className="container">
        <div className='sub-container1'>
            <h1 className='title'>Free Trial</h1>
            <p className='para'>Creating something beautiful with coding is hugely rewarding! It takes discipline and hours of effort, but the sense of accomplishment at the end is worth it.</p>

            <button className='button'>Try Now</button>
        </div>
        
        <div className='sub-container2'>
            <img src={pic} className="picture" />
        </div>
     </div>
    );
};
export default Home;