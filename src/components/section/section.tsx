import { Component, h } from '@stencil/core';

@Component({
  tag: 'cookie-section',
  styleUrl: 'section.scss',
})
export class Section {
  render() {
    return (
      <section>
        <div class="content">
          <slot></slot>
        </div>
      </section>
    );
  }
}
