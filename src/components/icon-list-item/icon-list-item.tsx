import { Component, h, Prop } from '@stencil/core';
import GitHubLogo from '../../assets/icon/github.svg';
import TwitterLogo from '../../assets/icon/twitter.svg';
import LinkedInLogo from '../../assets/icon/linkedin.svg';

@Component({
  tag: 'cookie-icon-list-item',
  styleUrl: 'icon-list-item.scss',
})
export class IconListItem {
  @Prop() url: string;

  @Prop() accessibleLabel: string;

  @Prop() icon: string;

  render() {
    let icon = '';
    switch (this.icon) {
      case 'github':
        icon = GitHubLogo;
        break;
      case 'twitter':
        icon = TwitterLogo;
        break;
      case 'linkedin':
        icon = LinkedInLogo;
        break;
    }
    return (
      <div role="listitem">
        <cookie-link url={this.url} external={true} accessible-label={this.accessibleLabel} innerHTML={icon}></cookie-link>
      </div>
    );
  }
}
