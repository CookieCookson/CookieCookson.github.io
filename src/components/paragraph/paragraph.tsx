import { Component, h } from '@stencil/core';

@Component({
  tag: 'cookie-paragraph',
  styleUrl: 'paragraph.scss',
})
export class Paragraph {
  render() {
    return (
      <p>
        <slot></slot>
      </p>
    );
  }
}
