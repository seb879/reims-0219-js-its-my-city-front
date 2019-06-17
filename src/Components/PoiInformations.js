import React from 'react';
import './ComponentsCSS/PoiInformation.scss';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  specificPoiInfos: state.specificPoiInfos[0],
});

const PoiInformation = ({ specificPoiInfos }) => (
  <div className="informationPage">
    <div>
      <h1>{specificPoiInfos.name}</h1>
      <hr />
      <p>Adresse</p>
      <p>code postal ville</p>
      <p>Distance</p>
      <div className="informationPicture">
        <img src={specificPoiInfos.picture_url} alt="table ping pong" />
      </div>
      <div className="informationUser">
        <p>{specificPoiInfos.author}</p>
        <p>le ...</p>
      </div>
    </div>
    <div className="grades">
      <h2>
        Note moyenne :
        {specificPoiInfos.grades.average}
      </h2>
      <p>
        Accessibilité :
        {specificPoiInfos.grades.accessibility}
      </p>
      <p>
        Etat :
        {specificPoiInfos.grades.condition}
      </p>
      <p>
        Fonctionnalité :
        {specificPoiInfos.grades.functional}
      </p>
    </div>
  </div>
);

export default connect(mapStateToProps)(PoiInformation);
