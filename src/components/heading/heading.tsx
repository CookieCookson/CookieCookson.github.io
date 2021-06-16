import { Component, h } from '@stencil/core';

@Component({
  tag: 'cookie-heading',
  styleUrl: 'heading.scss',
})
export class Heading {
  render() {
    return (
      <h2>
        <slot></slot>
      </h2>
    );
  }
}
