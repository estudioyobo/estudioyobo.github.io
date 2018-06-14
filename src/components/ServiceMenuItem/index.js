import React, { Component } from "react";
import Anime from "react-anime";
import Link from "gatsby-link";
const animejs = typeof window !== "undefined" ? require("animejs") : _ => _;

class ServiceMenuItem extends Component {
  state = { showItems: false };
  mouseEnter = () => {
    this.setState({
      showItems: true
    });
  };
  mouseLeave = () => {
    this.setState({
      showItems: false
    });
  };
  render() {
    const {
      title,
      items,
      className,
      url,
      style,
      onClick,
      enableItems
    } = this.props;
    return (
      <div
        className={`service__section${className}`}
        style={style}
        onClick={onClick}
      >
        <Link
          to={url}
          className="service__title"
          onMouseOver={this.mouseEnter}
          onMouseOut={this.mouseLeave}
          onClick={this.props.onClick}
        >
          {title}
        </Link>
        { enableItems &&
          this.state.showItems &&(
            <div className="service__items">
              <Anime
                duration={500}
                scale={[0.4, 1]}
                translateY={(t, i, c) =>
                  Math.round(
                    animejs.random(110, 160) *
                      Math.sin(2 * (i + 1) * Math.PI / c)
                  ) + "px"
                }
                translateX={(t, i, c) =>
                  Math.round(
                    animejs.random(130, 180) *
                      Math.cos(2 * (i + 1) * Math.PI / c)
                  ) + "px"
                }
                delay={(e, i) => i * 100}
                opacity={[0, 1]}
              >
                {items.map((item, i) => (
                  <span className="service__item" key={i}>
                    {item.title}
                  </span>
                ))}
              </Anime>
            </div>
          )}
      </div>
    );
  }
}

export default ServiceMenuItem;
