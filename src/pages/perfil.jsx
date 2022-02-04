
import Navbar from '../components/Navbar';
import  Footer from '../components/Footer';
import PublicLayout from '../layouts/PublicLayout';
import BloqueInfo from '../components/BloqueInfo';
import BloqueInfoB from '../components/BloqueInfoB';


const Perfil = ()=> {
    return ( 
        <PublicLayout >
        
        <BloqueInfo
        title='Academic' subtitle= 'SENA' date='2014-2015' text='System Technique' items='C++ , Networks and Electricity'
        />
    
        <BloqueInfo
        subtitle= 'UDEA' date='2016-2022' text='Systems Engineer' items='Databases, SQL, Java'
        />
       
        <BloqueInfoB
        title= 'Courses' subtitle= 'Platzi' date='2021' text='Java Backend Developer' items='JavaSE Persistence, Int. to JavaSE'
        />

        <BloqueInfoB
        subtitle= 'Coursera' date='2019' text='IA' items='DeepLearning Specialization, IA for everyone'
        />
        
        <BloqueInfo
        title='Experience' subtitle= 'Monitor' date='2018-Actual' text='Lógica y Representación III' items='Universidad de Antioquia'
        />
    
        

     <div className='bottom-0 '><Footer/></div> 
    
</PublicLayout>
)
}

export default Perfil;