
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PublicLayout from '../layouts/PublicLayout';
import ImagenPrincipal from '../images/ImagenPrincipal.jpeg';
import BloqueNormal from '../components/BloqueNormal';
import BloqueNormalB from '../components/BloqueNormalB';


function Index(){
    return (
    
        <PublicLayout >
            <div className='grid place-items-center  '>
            <img className= 'm-auto my-7 max-h-60 rounded-3xl items-center ' src= {ImagenPrincipal}  ></img>
                <BloqueNormal 
                title='Andrea Ortiz Giraldo' text= 'Junior developer  with skills in the Python programming language for artificial intelligence with Tensorflow and Keras. Convolutional Neural Networks, Basic SQL, Agile Methodologies, Design Patterns, Software Architectures, Basic Java.'
                />
            </div>


                <BloqueNormalB
                title='Skills' text= 'CSS, Javascript, HTML, python, tensorflow, keras, java SE, EE.'
                />
            
                <BloqueNormal
                title= 'Projects And Hobbies' text='Sign language image classification model, Sign language image classification technologies. Favorite hobby is practicing professional Salsa Caleña at the Latin rhythm academy. '
                />

                <BloqueNormalB
                title= 'Idioms' text='Spanish: Native English: A2 '
                />

             <div className='bottom-0'><Footer/></div> 
            
        </PublicLayout>

     
        
    );
}

export default Index;