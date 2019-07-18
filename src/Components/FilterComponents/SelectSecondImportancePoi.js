import React from 'react';
import { connect } from 'react-redux';
import '../ComponentsCSS/FilterComponent.scss';
import axios from 'axios';
import PreviousPageFilterButton from './PreviousPageFilterButton';


const mapStateToProps = state => ({
  isKeywordOneChoosen: state.pois.poiKeywordsDisplay,
  specificSecondKeywords: state.keywords.specificSecondKeywords,
  isKeywordTwoChoosen: state.display.isKeywordTwoChoosen,
  filteredPoiByKeyword: state.keywords.filteredPoiByKeyword,
  secondKeyword: state.keywords.secondKeyword,
  keywordOneChoosen: state.keywords.keywordOneChoosen,

});

const SelectSecondImportancePoi = ({
  dispatch, isKeywordOneChoosen, specificSecondKeywords,
  isKeywordTwoChoosen, secondKeyword, keywordOneChoosen,
}) => (
  <div className="secondFilterPage">
    <PreviousPageFilterButton />

    <div className="selectedKeywordOne">
      {keywordOneChoosen}
    </div>

    <div className="selectSecondTheme">
      <p>Affinez votre recherche</p>
    </div>

    <div className="keywordsOfSecondImportance">
      {isKeywordOneChoosen && specificSecondKeywords.map(keyword => (
        <button
          type="button"
          className="secondFilterButton"
          key={keyword.name}
          onClick={() => dispatch({ type: 'APPLY_BUTTON', secondKeyword: keyword.name })
      }
        >
          {keyword.name}

        </button>
      ))}
    </div>

    <div>
      <div className="applyButton">
        {isKeywordTwoChoosen && (
        <button
          type="button"
          className="applyButtonStyle"
          onClick={() => axios.get(`${process.env.REACT_APP_API_URL}/pois/filter/${secondKeyword}`)
            .then(res => dispatch({
              type: 'HANDLE_KEYWORD_FILTERING',
              filteredPoiByKeyword: res.data,
              userInputSearchBar: secondKeyword,
            })).then(setTimeout(() => {
              dispatch({ type: 'HIDE_ALERT' });
            }, 3000))
      }
        >
        Appliquer
        </button>
        )
        }
      </div>
    </div>
  </div>
);


export default connect(mapStateToProps)(SelectSecondImportancePoi);
