import "./styles/header.css";

function Header(){
    return(
      <div id="header">
        <h1 id="logo">
            <a href="#">Jowi</a>
        </h1>
        <div class="social">
          <span>FOLLOW US ON:</span>
          <ul>
            <li><a class="twitter" href="#">twitter</a></li>
            <li><a class="facebook" href="#">facebook</a></li>
            <li><a class="vimeo" href="#">vimeo</a></li>
            <li><a class="rss" href="#">rss</a></li>
          </ul>
        </div>
        <div id="navigation">
          <ul>
            <li><a class="active" href="#">HOME</a></li>
            <li><a href="#">NEWS</a></li>
            <li><a href="#">PREMIER</a></li>
            <li><a href="#">COMING SOON</a></li>
            <li><a href="#">CONTACT</a></li>
            <li><a href="#">ADVERTISE</a></li>
          </ul>
        </div>
        <div id="sub-navigation">
          <ul>
            <li><a href="#">SHOW ALL</a></li>
            <li><a href="#">RECENTLY UPLOADED</a></li>
            <li><a href="#">TRENDING</a></li>
            <li><a href="#">MOST COMMENTED</a></li>
          </ul>
          <div id="search">
            <form action="#" method="get" accept-charset="utf-8">
              <label for="search-field">SEARCH</label>
              <input type="text" name="search field" value="Enter search here" id="search-field" class="blink search-field"  />
              <input type="submit" value="GO!" class="search-button" />
            </form>
          </div>
        </div>
      </div>
    );
}

export default Header;
