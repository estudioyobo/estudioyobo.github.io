import React, { Component } from "react";
import charming from "charming";
import { Placeholder, Group, Label, Input, Textarea } from "./styles";
import { Nearby, shuffleArray, lineEq } from "./utils";
import { TweenMax } from "gsap/TweenMax";

class AnimatedInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      placeholderOpacity: 1
    };
  }

  componentDidMount() {
    // Divide label into chars
    charming(this.label);
    const labelLetters = Array.from(this.label.querySelectorAll("span"));
    charming(this.placeholder);
    const placeholderLetters = Array.from(
      this.placeholder.querySelectorAll("span")
    );

    const lettersTotal = placeholderLetters.length;
    const lettersPosArr = shuffleArray(Array.from(Array(lettersTotal).keys()));
    let currentVisible = lettersTotal;

    // whatever we do, start at [distanceThreshold.max]px from the element and end at [distanceThreshold.min]px from the element.
    const distanceThreshold = { min: 0, max: 50 };

    new Nearby(this.input, {
      onProgress: distance => {
        const point = lineEq(
          lettersTotal,
          0,
          distanceThreshold.max,
          distanceThreshold.min,
          distance
        );
        const visible = Math.max(0, Math.min(lettersTotal, Math.floor(point)));
        if (currentVisible !== visible) {
          // hide placeholder and show label.
          if (visible < currentVisible) {
            for (
              let i = 0, len = lettersPosArr.length - visible;
              i < len;
              ++i
            ) {
              const letter = placeholderLetters[lettersPosArr[i]];
              if (letter.dataset.state !== "hidden") {
                letter.dataset.state = "hidden";
                TweenMax.to(letter, 0.5, {
                  //ease: 'Back.easeIn',
                  ease: "Expo.easeOut",
                  y: "-200%",
                  opacity: 0
                });

                TweenMax.to(labelLetters[lettersPosArr[i]], 0.5, {
                  //ease: 'Back.easeOut',
                  //delay: 0.4,
                  ease: "Expo.easeOut",
                  y: "0%",
                  startAt: { y: "200%" },
                  opacity: 1
                });
              }
            }
          }
          // hide label and show placeholder. (only if input doesn't have a value).
          else if (this.input.value.length === 0) {
            for (
              let i = lettersTotal - 1,
                len = lettersTotal - (lettersPosArr.length - visible);
              i >= lettersTotal - len;
              --i
            ) {
              const letter = placeholderLetters[lettersPosArr[i]];
              if (letter.dataset.state === "hidden") {
                letter.dataset.state = "";
                TweenMax.to(letter, 0.2, {
                  ease: "Circ.easeOut",
                  y: "0%",
                  //overwrite: 'all',
                  opacity: 1
                });

                TweenMax.to(labelLetters[lettersPosArr[i]], 1, {
                  ease: "Circ.easeOut",
                  y: "200%",
                  opacity: 0
                });
              }
            }
          }

          if (visible <= 0) {
            this.input.focus();
          }

          currentVisible = visible;
        }
      }
    });
  }

  render() {
    const { name, required, isTextarea, type = "text" } = this.props;
    const Comp = isTextarea ? Textarea : Input;
    return (
      <Group>
        <Label htmlFor={name} innerRef={ref => (this.label = ref)}>
          {name}:
        </Label>
        <Comp
          name={name}
          type={type}
          required={required}
          innerRef={ref => (this.input = ref)}
          value={this.state.value}
          onChange={({ target: { value } }) => {
            if (value.length !== 0) {
              this.setState({ placeholderOpacity: 0, value });
            } else {
              this.setState({ placeholderOpacity: 1, value });
            }
          }}
        />
        <Placeholder
          opacity={this.state.placeholderOpacity}
          innerRef={ref => (this.placeholder = ref)}
        >
          {name}:
        </Placeholder>
      </Group>
    );
  }
}

export default AnimatedInput;
