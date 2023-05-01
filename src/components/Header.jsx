import { Col, Row, Avatar } from 'antd';

export default function Header({ Name, Slogan }) {
  return (
    <div className="header">
      <Row className="headerRow" justify="center" align="middle">
        <Col>
          <Row justify="center">
            <Avatar
              className="header__Avatar"
              size={{ xs: 140, sm: 150, md: 180, lg: 180, xl: 200, xxl: 220 }}
              src="./images/avatar.png"
              alt="avatar"
            />
          </Row>
        </Col>
      </Row>
      <Row gutter={[0, 8]} justify="center" align="middle">
        <Col>
          <Row justify="center">
            <h1 className="header__title">{Name}</h1>
          </Row>
        </Col>
        <Col span={24}>
          <hr className="divider--light" />
        </Col>
        <Col>
          <p className="header__slogan">{Slogan}</p>
        </Col>
      </Row>
    </div>
  );
}
