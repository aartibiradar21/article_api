import NewsBoard from "./news.js";
import SearchBar from './search.js';
import News_data from "./news_data.js";

const App = () => {
  return (
  <>
    <div className="d-flex justify-content-center box2"><img src="/Frame 7.png" alt="logo"></img></div>
      
      <NewsBoard />
      <SearchBar />
      <News_data />
      
  </>
  );
};

export default App;

