import "./scss/style.scss";

function App() {
  return (
    <>
      <header className="header">
        <h1>
          <a href="#/">UrCinePick</a>
        </h1>
        <button className="btn-menu" aria-label="메뉴"></button>
        <nav>
          <ul className="gnb">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Movies</a>
            </li>
            <li>
              <a href="">Favorite</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Search</a>
            </li>
          </ul>
        </nav>
        <div className="utillity">
          <button className="btn-search" aria-label="검색"></button>
          <button className="btn-insta" aria-label="인스타그램"></button>
          <button className="btn-facebook" aria-label="페이스북"></button>
          <button className="btn-watcha" aria-label="왓챠피디아"></button>
        </div>
        <dialog className="search">
          <div>
            <input type="search" placeholder="Movie here to search." value="" />
            <button className="btn-search" aria-label="검색"></button>
          </div>
          <button className="btn-close" aria-label="닫기"></button>
          <p className="txt-type1">
            엔터키를 누르시면 검색이 됩니다. 페이지로 돌아가고 싶으시다면 ESC키 또는 닫기버튼을
            눌러주세요.
          </p>
        </dialog>
      </header>
      <div className="megamenu">
        <button className="btn-close" aria-label="닫기"></button>
        <nav>
          <ul className="megamenu__list">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Movies</a>
            </li>
            <li>
              <a href="">Favorite</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Search</a>
            </li>
          </ul>
        </nav>
        <div className="bg-mega"></div>
      </div>
      <main>
        <div className="m0auto">
          {/* 텍스트 */}
          <div className="mt30"></div>
          <h2 className="heading regular">Typography</h2>
          <div className="mt10"></div>
          <h2 className="heading large">heading large</h2>
          <h2 className="heading regular">heading regular</h2>
          <h2 className="heading small">heading small</h2>
          <p className="txt-type1">txt-type1 txt-type1 txt-type1</p>
          <p className="txt-type2">txt-type2 txt-type2 txt-type2</p>

          {/* 버튼 */}
          <div className="mt30"></div>
          <h2 className="heading regular">Button</h2>
          <div className="mt10"></div>
          <button className="btn regular pink">SEARCH</button>
          <div className="mt30"></div>

          {/* 폼 */}
          <h2 className="heading regular">Form</h2>
          <div className="mt10"></div>
          <input type="text" placeholder="placeholder" className="input" />
          <br />
          <select name="" id="type" className="select">
            <option value="">select</option>
          </select>

          {/* 썸네일 */}
          <div className="mt30"></div>
          <h2 className="heading regular">Thumbnails</h2>
          <div className="mt10"></div>
          <h2 className="heading small">galleryView</h2>
          <div className="mt10"></div>
          <ul className="movie-list">
            <li>
              <a href="">
                <div className="movie-list__info">
                  <div className="movie-list__poster">
                    <img
                      src="https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-image-12-1255x790.jpg"
                      alt=""
                    />
                  </div>
                  <div className="movie-list__title">제목</div>
                  <div className="movie-list__year">2024</div>
                </div>
              </a>
            </li>
          </ul>
          <h2 className="heading small  mt30">cardView</h2>
          <div className="mt10"></div>
          <ul className="movie-list card">
            <li>
              <a href="">
                <div className="movie-list__info">
                  <div className="movie-list__poster">
                    <img
                      src="https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-image-12-1255x790.jpg"
                      alt=""
                    />
                  </div>
                  <div className="movie-list__title">제목</div>
                  <div className="movie-list__year">2024</div>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="movie-list__info">
                  <div className="movie-list__poster">
                    <img
                      src="https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-image-12-1255x790.jpg"
                      alt=""
                    />
                  </div>
                  <div className="movie-list__title">제목</div>
                  <div className="movie-list__year">2024</div>
                </div>
              </a>
            </li>
          </ul>
          <h2 className="heading small  mt30">listView</h2>
          <div className="mt10"></div>

          <ul className="movie-list list">
            <li>
              <a href="">
                <div className="movie-list__info">
                  <div className="movie-list__poster">
                    <img
                      src="https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-image-12-1255x790.jpg"
                      alt=""
                    />
                  </div>
                  <div className="movie-list__title">제목</div>
                  <div className="movie-list__year">2024</div>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="movie-list__info">
                  <div className="movie-list__poster">
                    <img
                      src="https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-image-12-1255x790.jpg"
                      alt=""
                    />
                  </div>
                  <div className="movie-list__title">제목</div>
                  <div className="movie-list__year">2024</div>
                </div>
              </a>
            </li>
          </ul>

          {/* 디테일페이지 */}
          <div className="mt30"></div>
          <h2 className="heading regular">Details</h2>
          <div className="mt10"></div>
        </div>
      </main>
      <footer className="footer">
        <div className="m0auto">
          <div>
            UrCinePick
            <br />
          </div>
          <div>CopryRight &copy; ${new Date().getFullYear()}</div>
        </div>
      </footer>
    </>
  );
}

export default App;
