import {Row , Col} from 'antd'
export default function Footer( {Adress} ){

    return(

        <footer className="footer">
            <div className="footer__above ">
            <div className="container">
                
                <Row className='footer__Row' >
                    <Col lg={16} xs={24} >
                        <h5 className="footer__description">
                            {Adress}
                        </h5>
                    </Col>
                    <Col lg={8} xs={24} >
                        <ul className="footer__list">
                            <li className="footer__item"><a href="" className="footer__link"></a></li>
                            <li className="footer__item"><a href="" className="footer__link"></a></li>
                            <li className="footer__item"><a href="" className="footer__link"></a></li>
                        </ul>
                    </Col>
                </Row>
            </div>
            </div>

            <div className="footer__below">
            <div className="container">
                <h6>
                &copy; Copyright All rights reserved.
                       Copyright All rights reserved.
                </h6>
            </div>
            </div>
        </footer>

    );


}