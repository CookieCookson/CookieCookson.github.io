import { Component, h } from '@stencil/core';

@Component({
  tag: 'cookie-icon-list',
  styleUrl: 'icon-list.scss',
})
export class IconList {
  render() {
    return (
      <div role="list">
        <slot></slot>
      </div>
    );
  }
}
