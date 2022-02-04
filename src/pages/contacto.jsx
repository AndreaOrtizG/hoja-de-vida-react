
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PublicLayout from '../layouts/PublicLayout';
import BloqueNormal from '../components/BloqueNormal';
import BloqueNormalB from '../components/BloqueNormalB';

const Contacto = ()=> {
    return ( 
        <PublicLayout >
        
            <BloqueNormal 
            title='Address' text= 'Dosquebradas, Risaralda'
            />
        

           
            <BloqueNormalB
            title='Phone' text= '+57 316-291-51XX'
            />
           
        
            <BloqueNormal
            title= 'Email' text='andrea.ortizg@udea.edu.co'
            />

            

         <div className='bottom-0 fixed'><Footer/></div> 
        
    </PublicLayout>

        )
}

export default Contacto;