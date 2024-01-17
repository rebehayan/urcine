import React, { useState } from "react";

const Styleguide = () => {
  const [istoggle, setisToggle] = useState(false);
  const toggle = () => {
    setisToggle(!istoggle);
  };
  return (
    <>
      <div className="align center mt50">
        <button
          className={istoggle ? "btn regular pink ico1 --active" : "btn regular pink ico1"}
          onClick={toggle}
        >
          Toggle StyleGuide
        </button>
      </div>
      {istoggle && (
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
          <h3 className="sub-title">
            <strong>SUB TITLE</strong>
            <span>SUB TITLE TEXT</span>
          </h3>

          {/* 버튼 */}
          <div className="mt30"></div>
          <h2 className="heading regular">Button</h2>
          <div className="mt10"></div>
          <button className="btn regular pink">.btn.regular.pink</button>
          <br />
          <br />
          <button className="btn regular pink ico1">.btn.regular.pink.ico1</button>
          <div className="mt30"></div>

          {/* 폼 */}
          <h2 className="heading regular">Form</h2>
          <div className="mt10"></div>
          <input type="text" placeholder="placeholder" className="input" />
          <br />
          <select name="" id="type" className="select">
            <option>select</option>
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

          <h2 className="heading small  mt30">Favorite View</h2>
          <div className="mt10"></div>
          <ul className="movie-list fav">
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
                  <div className="movie-list__genre">Adventure, Drama, Sci-Fi</div>
                  <div className="movie-list__plot">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore quae aliquam
                    veritatis? In corporis provident consectetur ipsa ullam, doloremque quaerat,
                    odio eligendi non qui aperiam nisi voluptatibus suscipit, perferendis
                    laudantium?
                  </div>
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
                  <div className="movie-list__genre">Adventure, Drama, Sci-Fi</div>
                  <div className="movie-list__plot">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore quae aliquam
                    veritatis? In corporis provident consectetur ipsa ullam, doloremque quaerat,
                    odio eligendi non qui aperiam nisi voluptatibus suscipit, perferendis
                    laudantium?
                  </div>
                </div>
              </a>
            </li>
          </ul>

          {/* 디테일페이지 */}
          <div className="mt30"></div>
          <h2 className="heading regular">Details</h2>
          <div className="mt10"></div>
          <ul className="ratings">
            <li>
              <strong>Internet Movie Database</strong>
              <div>8.4/10</div>
            </li>
            <li>
              <strong>Rotten Tomatoes</strong>
              <div>94%</div>
            </li>
            <li>
              <strong>Metacritic</strong>
              <div>78/100</div>
            </li>
          </ul>
          <br />
          <br />
          <br />
          <br />
          <div className="info-block">
            <h3 className="heading regular">Cast</h3>
            <hr className="line-type1 mt20" aria-hidden="true" />
            <h4 className="heading small mt10">Director</h4>
            <p className="txt-type2">Anthony Russo, Joe Russo</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Styleguide;
