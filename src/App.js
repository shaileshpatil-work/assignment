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
    <div className='container'>
      <div className='mx-auto w-75 my-4'>
        <MainHeading classes='text-center mb-1'>Our Products</MainHeading>
        <Paragraph alignment='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Paragraph>
      </div>
      <div className='row'>
        <div className='col-sm-12 col-md-6'>
          <div className='left-section mb-0 mb-3'>
              <div className='banner-wrapper'>
                <h4>Electronic Heath Records</h4>
                <Paragraph color='text-white' spacing='mt-2 mb-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Paragraph>
                <a href='https://www.google.com/' className='text-decoration-none' target='_blank' rel='noreferrer'><HighLightText color='highligtContent'>Streamline documentation</HighLightText></a>                
              </div>            
          </div>
        </div>
        <div className='col-sm-12 col-md-6 right-section'>
          <div className='row'>
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
      <div className='row mt-3'>        
        {
          BUTTONS.map((btn) => {
            return (
              <div className='col-sm-12 col-md-6 mb-0 mb-3' key={btn}>
                <PopupBtn popup={handlePopup}>{btn}</PopupBtn>
              </div>
            )
          })
        }
      </div>
      {visiblePopup && <Popup popup={handlePopup}/>}
    </div>
  );
}

export default App;
