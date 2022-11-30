
import {useGlobalContext} from '../../Context';
import { AiOutlineGlobal, AiOutlineLinkedin, AiFillGithub, AiOutlineApi } from 'react-icons/ai'



const ModalMenu = () => {

  const {isModalOpen} = useGlobalContext();
  
  
  
  return (
    
    <section className={`${!isModalOpen ? 'closed':'open'} modal-menu`}>
   
      <div className='info-links'>

          <div className='menu-item'>
            <AiOutlineGlobal/>
            <a href="https://francescoup.github.io/start2impact-project/" target="_blank" rel="noreferrer"><h4>Porfolio</h4></a>
          </div>
          <div className='menu-item'>
            <AiOutlineLinkedin/>
            <a href="https://www.linkedin.com/in/francesco-mangione/" target="_blank" rel="noreferrer"><h4>Linkedin</h4></a>
          </div>
          <div className='menu-item'>
            <AiFillGithub/>
            <a href="https://github.com/francescoup" target="_blank" rel="noreferrer"><h4>GitHub</h4></a>
          </div>
          <div className='menu-item'>
            <AiOutlineApi/>
            <a href='https://github.com/pcm-dpc/COVID-19' target="_blank" rel="noreferrer"><h4>API</h4></a>
          </div>

      </div> 
 
    </section>
  )
}
    

  


export default ModalMenu