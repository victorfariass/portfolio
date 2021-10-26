import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import certificatesImages from '../images/certificates';
import Carousel from 'react-bootstrap/Carousel';

export default function Certificates() {
  return (
    <div className='certificates-main'>
      <h4>Certificados</h4>
      <Carousel>
        {certificatesImages.map((certificate, index) => (
          <Carousel.Item>
            <div className='certificate-container' key={index}>
              <img src={certificate} alt={`Certificado de ${certificate}`} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
