import React from 'react';
import { Carousel, Card, Col, Row } from 'antd';
import styles from './_layout.css';

class ProductLayout extends React.Component {

  imageSources = [
    'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//105/MTA-2594787/samsung_samsung-ua43nu7090kpxd-smart-tv-led--43-inch-_full03.jpg?output-format=webp',
    'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//81/MTA-2603023/dc_dc-chalked-steel-heather-tas-ransel-pria---gray--up-m-bkpk-_full02.jpg?output-format=webp',
    'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-1391619/brica_brica-b-pro-5-alpha-edition-mark-ii-ae2-combo-extreme-paket-action-camera---silver_full05.jpg?output-format=webp',
    'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-2104141/daniel-wellington_daniel-wellington-classic-sheffield-jam-tangan-pria---silver-black---free-strap_full13.jpg?output-format=webp',
  ];

  render() {
    return (
      <>
        <Row>
          <Col span={8}>
            <Carousel autoplay>
              <Card cover={<img className={styles.box} src={this.imageSources[0]}/>}/>
              <Card cover={<img className={styles.box} src={this.imageSources[1]}/>}/>
              <Card cover={<img className={styles.box} src={this.imageSources[2]}/>}/>
              <Card cover={<img className={styles.box} src={this.imageSources[3]}/>}/>
            </Carousel>
          </Col>
          <Col span={8}>
            <Carousel autoplay>
              <Card cover={<img className={styles.box} src={this.imageSources[3]}/>}/>
              <Card cover={<img className={styles.box} src={this.imageSources[0]}/>}/>
              <Card cover={<img className={styles.box} src={this.imageSources[1]}/>}/>
              <Card cover={<img className={styles.box} src={this.imageSources[2]}/>}/>
            </Carousel>
          </Col>
          <Col span={8}>
            <Carousel autoplay>
              <Card cover={<img className={styles.box} src={this.imageSources[2]}/>}/>
              <Card cover={<img className={styles.box} src={this.imageSources[3]}/>}/>
              <Card cover={<img className={styles.box} src={this.imageSources[0]}/>}/>
              <Card cover={<img className={styles.box} src={this.imageSources[1]}/>}/>
            </Carousel>
          </Col>
        </Row>
        {this.props.children}
      </>
    );
  }

}

export default ProductLayout;
