import React from "react";
import blog1 from "../../../Assets/image/photos/NEW IMAGE 1.jpg";
import Calender from "../../../Assets/image/Calender.svg";
import "./NewsAndBlog.scss";
import data from "./data";
import { Link } from "react-router-dom";
class NewsAndBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      style: `translateY(0)`,
      NewsStyle: `translateY(0)`,
    };
  }
  componentWillMount = async () => {
    const timer = setInterval(() => {
      console.log(this.state.counter);
      if (this.state.counter < 3)
        this.setState({
          style: `translateY(${-161 * this.state.counter}px)`,
          NewsStyle: `translateY(${-178 * this.state.counter}px)`,
          counter: this.state.counter + 1,
        });
      else {
        this.setState({ counter: 0 });
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  };

  render() {
    return (
      <div className="newsandblog">
        <div className="News">
          <div className="head">
            <h2>Latest News</h2>
            <h5>View All</h5>
          </div>
          <div className="NewsMain">
            <div className="item" style={{ transform: this.state.NewsStyle }}>
              <div className="date">
                <span>{data.news.date.day}</span>
                <span className="month">
                  <hr />
                  <p>
                    {data.news.date.month}
                    <br />
                    {data.news.date.year}
                  </p>
                </span>
              </div>
              <div className="details">
                <p className="topic">
                  {" "}
                  <span> ≡ </span>Cewa News
                </p>
                <Link to={`news/${data.news.title}`}>
                  <h5>{data.news.title}</h5>
                </Link>
                <p>{data.news.body}</p>
              </div>
              <hr />
            </div>

            <div className="item" style={{ transform: this.state.NewsStyle }}>
              <div className="date">
                <span>{data.news.date.day}</span>
                <span className="month">
                  <hr />
                  <p>
                    {data.news.date.month}
                    <br />
                    {data.news.date.year}
                  </p>
                </span>
              </div>
              <div className="details">
                <p className="topic">
                  {" "}
                  <span> ≡ </span>Cewa News
                </p>
                <Link to={`news/${data.news.title}`}>
                  <h5>{data.news.title}</h5>
                </Link>
                <p>{data.news.body}</p>
              </div>
              <hr />
            </div>

            <div className="item" style={{ transform: this.state.NewsStyle }}>
              <div className="date">
                <span>{data.news.date.day}</span>
                <span className="month">
                  <hr />
                  <p>
                    {data.news.date.month}
                    <br />
                    {data.news.date.year}
                  </p>
                </span>
              </div>
              <div className="details">
                <p className="topic">
                  {" "}
                  <span> ≡ </span>Cewa News
                </p>
                <Link to={`news/${data.news.title}`}>
                  <h5>{data.news.title}</h5>
                </Link>
                <p>{data.news.body}</p>
              </div>
              <hr />
            </div>
          </div>
          <hr />
        </div>
        <div className="blog">
          <div className="head">
            <h2>Recent Events</h2>
            <h5>View All</h5>
          </div>
          <div className="blogMain">
            <div className="item" style={{ transform: this.state.style }}>
              <div className="item-img">
                <img src={blog1} alt="blog1"></img>
              </div>
              <div className="item-text">
                <h3>{data.blog.title}</h3>
                {/* <div className="user">
                <img
                  src="https://img.icons8.com/office/30/000000/user.png"
                  alt="user"
                />
                <p>{data.blog.user}</p>
              </div> */}
                <div className="date">
                  <img src={Calender} alt="calender" />
                  <p>{data.blog.date}</p>
                </div>
                <div className="article">
                  <p>
                    {data.blog.article}
                    <span>Read more</span>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="item" style={{ transform: this.state.style }}>
              <div className="item-img">
                <img src={blog1} alt="blog1"></img>
              </div>
              <div className="item-text">
                <h3>{data.blog.title}</h3>
                {/* <div className="user">
                <img
                  src="https://img.icons8.com/office/30/000000/user.png"
                  alt="user"
                />
                <p>{data.blog.user}</p>
              </div> */}
                <div className="date">
                  <img src={Calender} alt="calender" />
                  <p>{data.blog.date}</p>
                </div>
                <div className="article">
                  <p>
                    {data.blog.article}
                    <span>Read more</span>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="item" style={{ transform: this.state.style }}>
              <div className="item-img">
                <img src={blog1} alt="blog1"></img>
              </div>
              <div className="item-text">
                <h3>{data.blog.title}</h3>
                {/* <div className="user">
                <img
                  src="https://img.icons8.com/office/30/000000/user.png"
                  alt="user"
                />
                <p>{data.blog.user}</p>
              </div> */}
                <div className="date">
                  <img src={Calender} alt="calender" />
                  <p>{data.blog.date}</p>
                </div>
                <div className="article">
                  <p>
                    {data.blog.article}
                    <span>Read more</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default NewsAndBlog;
