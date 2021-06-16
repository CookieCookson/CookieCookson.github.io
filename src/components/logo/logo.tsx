import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'cookie-logo',
  styleUrl: 'logo.scss',
})
export class Logo {
  @Prop() url: string;

  render() {
    return (
      <a href={this.url}>
        <h1>cookie.dev</h1>
      </a>
    );
  }
}
