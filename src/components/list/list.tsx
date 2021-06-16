import { Component, h } from '@stencil/core';

@Component({
  tag: 'cookie-list',
  styleUrl: 'list.scss',
})
export class List {
  render() {
    return (
      <div role="list">
        <slot></slot>
      </div>
    );
  }
}
