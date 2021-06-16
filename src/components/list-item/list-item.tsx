import { Component, h } from '@stencil/core';

@Component({
  tag: 'cookie-list-item',
  styleUrl: 'list-item.scss',
})
export class ListItem {
  render() {
    return (
      <div role="listitem">
        <slot></slot>
      </div>
    );
  }
}
