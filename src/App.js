import { useState } from 'react';
import Card from './components/Card';
import HighLightText from './components/HighlightText';
import MainHeading from './components/MainHeading';
import Paragraph from './components/Paragraph';
import Popup from './components/Popup';
import PopupBtn from './components/PopupBtn';
import CardConstants from './constants/CardConstants';

const App = () => {
  const [visiblePopup, setPopup] = useState(false);
  const BUTTONS = ['POPULATION HEALTH', 'EPOCRATES'];
  const handlePopup = (state) => {
    setPopup(state)
  }

  return (
    <div className='container main-wrapper'>
      <div className='mx-auto w-75 my-4'>
        <MainHeading classes='text-center mb-1'>Our Products</MainHeading>
        <Paragraph alignment='text-center'>Our cloud-based and on-premises solutions deliver measurable financial and clinical results for healthcare organizations of all shapes and sizes. That's why our top-performing clients are beating industry becnmarks across the board.</Paragraph>
      </div>
      <div className='row custom-row'>
        <div className='col-sm-12 col-md-6'>
          <div className='left-section mb-0 mb-3'>
              <div className='banner-wrapper'>
                <h4>Electronic Heath Records</h4>
                <Paragraph color='text-white' spacing='mt-2 mb-2'>All your patient data organized and available so you can be entirely in the moment of care.</Paragraph>
                <a href='https://www.google.com/' className='text-decoration-none' target='_blank' rel='noreferrer'><HighLightText color='highligtContent'>Streamline documentation</HighLightText></a>                
              </div>            
          </div>
        </div>
        <div className='col-sm-12 col-md-6 right-section'>
          <div className='row custom-row'>
            {
              CardConstants.map((card) => {
                return(                  
                  <div className='col-sm-6' key={card.id}>
                    <Card title={card.title} subTitle={card.subTitle} highlight={card.highlight} link={card.link}/>
                  </div>                  
                )
              })
            }                        
          </div>
        </div>
      </div>
      <div className='row custom-row mt-3'>                     
          <div className='col-sm-12 col-md-6 mb-0 mb-3'>
            <PopupBtn popup={handlePopup}>POPULATION HEALTH</PopupBtn>
          </div>
        <div className='col-sm-12 col-md-6 mb-0 mb-3'>
          <PopupBtn popup={handlePopup}>EPOCRATES<sup className='trademark'>&#174;</sup></PopupBtn>
        </div>         
      </div>
      {visiblePopup && <Popup popup={handlePopup} cards={CardConstants.slice(0, 2)}/>}
    </div>
  );
}

export default App;
