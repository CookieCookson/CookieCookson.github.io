import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'cookie-icon-list-item',
  styleUrl: 'icon-list-item.scss',
})
export class IconListItem {
  @Prop() url: string;

  @Prop() accessibleLabel: string;

  @Prop() icon: string;

  render() {
    return (
      <div role="listitem">
        <cookie-link url={this.url} external={true} accessible-label={this.accessibleLabel}>
          <ion-icon name={this.icon}></ion-icon>
        </cookie-link>
      </div>
    );
  }
}
