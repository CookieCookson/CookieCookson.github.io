import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'cookie-link',
  styleUrl: 'link.scss',
})
export class Link {
  @Prop() url: string;

  @Prop() external: boolean = false;

  @Prop() accessibleLabel: string;

  render() {
    return (
      <a href={this.url} target={this.external ? '_blank' : '_self'} rel={this.external ? 'noreferrer' : null} aria-label={this.accessibleLabel}>
        <slot></slot>
      </a>
    );
  }
}
