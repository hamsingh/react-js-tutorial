import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-colour';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data.js'
import QRCodeGenerator from './components/qr-code-generator';

function App() {
  return (
    <div className="App">
      {/* Accordian */}
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10}/> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'5'}/> */}
      {/* <LoadMoreData/> */}
      {/* <TreeView menus={menus} /> */}
      <QRCodeGenerator />
    </div>
  );
}

export default App;
