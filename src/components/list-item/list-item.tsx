import { Component, h } from '@stencil/core';

@Component({
  tag: 'cookie-list-item',
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
